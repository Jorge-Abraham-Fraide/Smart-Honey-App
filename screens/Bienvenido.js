import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground, StyleSheet } from 'react-native'
import AppButton from '../components/Appbutton'
import beeIcon from '../assets/images/bee.png'; // Importa la imagen de la abeja

function Bienvenido({navigation}) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/image.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.text}>Tu guía digital</Text>
        <Text style={styles.subText}>Para explorar las maravillas de la miel y las abejas</Text>
      </View>

      <AppButton
        name="COMENZAR"
        fontFamily="Baloo"
        color="#C39717"
        onPress={() => navigation.navigate("IniciarSesión")}
        icon={beeIcon} // Pasa la imagen de la abeja como icono
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 670,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Aubrey",
    color: "black",
    marginBottom: 10, // Espacio entre "Tu guía digital" y el nuevo texto
  },
  subText: {
    fontSize: 16,
    fontFamily: "Aubrey",
    color: "black",
  }
})

export default Bienvenido;