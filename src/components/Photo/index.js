import React from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

import {styles} from './styles';

export const Photo = ({photo, onDelete, onClose}) => {
    return (
        <ImageBackground source={{uri: photo}} style={styles.container}>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => onDelete(null)}>
                    <Icon name='delete' size={35} color='#f00' />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => onClose(false)}>
                    <Icon name='check' size={35} color='#fff' />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
