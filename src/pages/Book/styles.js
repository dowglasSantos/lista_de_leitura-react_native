import { StyleSheet } from 'react-native';
import Constants  from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 18,
        marginTop: 15,
        color: '#2890ff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerInputs: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    input: {
        color: '#000',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ff4400',
        fontSize: 16,
        paddingTop: 10,
    },
    containerButtons: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    buttonCamera: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#ff4400', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        width: '60%',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#ff4400',
        marginBottom: '5%',
    },
    textAddButton: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    cancelButton: {
        marginBottom: '20%',
    },
    textCancelButton: {
        color: '#566',
        fontSize: 15,
        marginBottom: 35,
    },
});