import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: '#ff4400',
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 10,
      paddingHorizontal: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      color: '#2890ff',
      fontWeight: 'bold',
    },
    buttonHeader: {
      width: 60,
      height: 60,
      borderRadius: 70,
      backgroundColor: '#2890ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });