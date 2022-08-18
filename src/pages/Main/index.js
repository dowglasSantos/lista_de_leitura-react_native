import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from '@expo/vector-icons/AntDesign';
import { View, Text, TouchableOpacity } from 'react-native';

import {styles} from './styles';
import {BookList} from '../../components/bookList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Main = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    useGetBooks();
  }, []);

  const useGetBooks = () => {
    (async () => {
        const dataBase = await AsyncStorage.getItem('@dataBase')
            .then(response => {
                const json = JSON.parse(response);
                setData(json);
            });
    })();
  }

  const onDelete = async (itemId) => {
    const newList = data.filter(item => {
      return item.id !== itemId;
    });
    const dataBase = await AsyncStorage.setItem('@dataBase', JSON.stringify(newList));
    setData(newList);
    return newList;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>Lista de leitura</Text>

        <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.navigate('Book')}>
          <Icon name='plus' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
      <BookList data={data} onDelete={onDelete} />
    </View>
  );
}

