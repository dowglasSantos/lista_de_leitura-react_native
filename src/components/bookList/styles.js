import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBooks: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#456',
        alignItems: 'center',
    },
    buttonChecked: {
        flex: 1,
    },
    titleBook: {
        fontSize: 15,
        color: '#fff',
    },
    titleBookChecked: {
        color: '#ccc',
        textDecorationColor: '#000',
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
    },
    editButton: {
        marginRight: 20,
    },
    deleteButton: {
       //
    },
});