import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';
import Icon from '@expo/vector-icons/AntDesign';

import {Photo} from '../../components/Photo';
import {Camera} from '../../components/Camera';

export const Book = ({navigation, route}) => {
    const editBook = route.params?.editBook
    ? route.params.editBook
    : {
        id: null,
        title: '',
        description: '',
        photo: null,
        edit: false,
      };
    
    const bookEdit = editBook.edit;

    const [title, setTitle] = useState(editBook.title);
    const [description, setDescription] = useState(editBook.description);
    const [photo, setPhoto] = useState(editBook.photo);
    const [edit, setEdit] = useState(true);
    const [listBooks, setListBooks] = useState([]);

    const [showCamera, setShowCamera] = useState(false);
    
    const onSavePhoto = (value) => {
        setPhoto(value);
    }; 


    useEffect(() => {
        getDataBase();
    });

    const getDataBase = async () => {
        const dataBase = await AsyncStorage.getItem('@dataBase')
            .then(response => {
                const json = JSON.parse(response);
                json === null ? setListBooks([]) : setListBooks(json);
            });
        return dataBase;
    }

    const verification = () => {
        if(bookEdit === true) {
            const newList = listBooks.map(item => {
                if(item.id === editBook.id) {
                    item.title = title;
                    item.description = description;
                    item.photo = photo;
                    item.edit = edit;
                }

                return item;
            });

            setListBooks(newList);
            setDataBase();
            navigation.navigate('Main')
        } else {
            if(title !== null && title !== '') {
                const id = Math.random(5000).toString();
                const data = {id, title, description, photo, edit};
                listBooks.push(data);
                setDataBase();
                navigation.navigate('Main')
            } else {
                Alert.alert('Alerta', 'Informe o (TÍTULO) do livro!')
                return false;
            };
        };
    };

    const setDataBase = async () => {
        const dataBase = await AsyncStorage.setItem('@dataBase', JSON.stringify(listBooks));
    };


    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#ff4400' />
            <Text style={styles.title}>Adicione um novo livro</Text>
            <View style={styles.containerInputs}>
                <TextInput 
                    placeholder='Título...' 
                    placeholderTextColor='#000'
                    style={styles.input} 
                    multiline={true}
                    numberOfLines={3}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <TextInput 
                    placeholder='Descrição...' 
                    style={styles.input}
                    multiline={true}
                    numberOfLines={8}
                    placeholderTextColor='#000'
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonCamera} onPress={() => setShowCamera(true)}>
                    <Icon name='camera' size={40} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.addButton} onPress={verification}>
                    <Text style={styles.textAddButton}>Adicionar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.textCancelButton}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <Modal style={{flex: 1}} visible={showCamera} presentationStyle={'fullScreen'} animationType={'slide'} onRequestClose={() => setShowCamera(false)} transparent={false}>
               {
                photo ?  <Photo photo={photo} onDelete={value => setPhoto(value)} onClose={value => setShowCamera(value)} /> 
                :
                <Camera close={value => setShowCamera(value)} savePhoto={value => onSavePhoto(value)} />
               }
            </Modal>
        </View>
    );
};
