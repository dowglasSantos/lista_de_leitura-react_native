import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Main} from '../pages/Main';
import {Book} from '../pages/Book';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Main'>
                <Screen name='Main' component={Main} options={{headerShown: false}} />
                <Screen name='Book' component={Book} options={{headerShown: false}} />
            </Navigator>
        </NavigationContainer>
    );
};


