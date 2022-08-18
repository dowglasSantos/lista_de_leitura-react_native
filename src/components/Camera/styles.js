import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 35,
    },
    cameraButton: {
        marginHorizontal: 40,
    }
});