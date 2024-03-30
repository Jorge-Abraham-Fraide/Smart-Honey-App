import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function AppButton2({ name, fontFamily, color, onPress }) {
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
        backgroundColor: "#C39717",
        marginBottom: 15,
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    text: {
        fontSize: 28,
        fontWeight: "600",
        color: "white",
    },
});

export default AppButton2;