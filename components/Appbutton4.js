import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";

function AppButton4({ name, fontFamily, color, onPress, icon }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.text, { fontFamily: fontFamily }]}>
                    {name}
                </Text>
                {icon && <Image source={icon} style={styles.icon} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        top:155,
        backgroundColor: "#C39717",
        marginBottom: 15,
        padding: 8,
        borderRadius: 20,
        width: "85%",
        height:80,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    text: {
        fontSize: 23,
        fontWeight: "600",
        color: "white",
        marginRight: 20, // Espacio entre el texto y el icono
    },
    icon: {
        width: 50,
        height: 25,
    },
});

export default AppButton4;