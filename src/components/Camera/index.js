import React, {useState, useEffect} from 'react';
import {Camera as CameraExpo, CameraType, FlashMode} from 'expo-camera';
import Icon from '@expo/vector-icons/AntDesign';
import {Alert, View, TouchableOpacity } from 'react-native';

import {styles} from './styles';

export const Camera = ({close, savePhoto}) => {
    const [refCamera, setRefCamera] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [powerFlash, setPowerFlash] = useState(FlashMode.off);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await CameraExpo.getCameraPermissionsAsync();
            setHasPermission(status)
        })();
    }, []);

    if(hasPermission === 'denied') {
        (async () => {
            const {status} = await CameraExpo.requestCameraPermissionsAsync();
            setHasPermission(status);
        })();
    }

    const flipCamera = () => {
        setType(() => {
            type === CameraType.back ? CameraType.front : CameraType.back;
        })
    };

    const photoCamera = async () => {
       try{
            const {uri} = await refCamera.takePictureAsync({
                quality: 0.8,
            });

            savePhoto(uri);
       }catch(error) {
            Alert.alert('Alert', 'Erro ao salvar tirar a foto', error);
       }
    };

    const flashCamera = () => {
        setPowerFlash(() => {
            powerFlash === FlashMode.off ? FlashMode.on : FlashMode.off;
        });
    };

    return (
        <CameraExpo ref={ref => setRefCamera(ref)} style={styles.container} type={type} flashMode={powerFlash}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => close(false)}>
                    <Icon name='close' size={30} color='#fff' />
                </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
                    <Icon name='sync' size={30} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cameraButton} onPress={() => photoCamera()}>
                    <Icon name='camera' size={80} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.flashButton} onPress={flashCamera}>
                    <Icon name='poweroff' size={30} color='#fff' />
                </TouchableOpacity>
            </View>
        </CameraExpo>
    );
};


