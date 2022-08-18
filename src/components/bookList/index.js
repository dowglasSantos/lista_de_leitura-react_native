import React, {useState} from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export const BookList = ({data, onDelete}) => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);

    return (
       <View style={styles.container}>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.containerBooks}>
                        <TouchableOpacity style={styles.buttonChecked} onPress={() => setChecked(true)}>
                            <Text style={[checked ? styles.titleBookChecked : styles.titleBook]}>{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Book', {editBook: item})}>
                            <Icon name='edit' size={35} color='#1cb' />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)} >
                            <Icon name='delete' size={35} color='#f00' />
                        </TouchableOpacity>
                    </View>
                )}
            />
       </View>
    );
};
