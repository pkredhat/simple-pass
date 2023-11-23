import { StyleSheet } from 'react-native';
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    input: {
        marginTop: 12,
        marginBottom: 20,
        marginHorizontal: 22,
        paddingHorizontal: 24,
        width: "85%",
        //fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        textAlign: 'left',
        alignContent: "center",
        justifyContent: "center",
    },
    modal: {
        borderColor: "purple",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#000",
        width: "90%",
        height: "50%",
        marginHorizontal: 15,
        padding: 30,
        borderRadius: 10,
        justifyContent: "flex-start",
    },
    pressable: {
        backgroundColor: "#F6F6F6",
        padding: 27,
        marginBottom: 15,
        marginHorizontal: 20,
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "silver",
        borderStyle: "solid",
        borderWidth: 1,
    },
    square: {
        borderColor: "rgb(120, 69, 172)",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "rgb(237, 221, 246)",
        width: 100,
        height: 100,
        margin: 14,
        borderRadius: 10
    },
    quicksand: {
        fontSize: 20,
        //fontFamily: "Quicksand_700Bold",
    },
    title: {
        marginTop: 32,
        marginBottom: 20,
        paddingHorizontal: 24,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
});
export default styles;