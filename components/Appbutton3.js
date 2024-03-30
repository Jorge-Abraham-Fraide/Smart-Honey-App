import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function AppButton3({ name, fontFamily, color, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { fontFamily: fontFamily }]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        padding:8,
        position:"absolute",
        width:252,
        height:60,
        left:79,
        top:630,
        backgroundColor:"#0097B2",
        borderRadius:40,
    },
    text: {
        fontSize: 40,
        color: "white",
    },
});

export default AppButton3;


