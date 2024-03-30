import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, Dimensions, View } from 'react-native';
import AppButton3 from '../components/Appbutton3';
import { useNavigation } from '@react-navigation/native';
import AppTextInput2 from '../components/AppTextInput2';
import AppButton4 from '../components/Appbutton4';
import camaraIcon from '../assets/images/camaraIcon.png'
import camaraExterna from '../assets/images/camaraExterna.png'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ChooseCameraScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/fondoCamaras.png")}
      >
      <AppButton4
        name="CÁMARA DEL CELULAR"
        fontFamily="Epilogue"
        color="#964119"
        onPress={() => navigation.navigate("IniciarSesión")}
        icon={camaraIcon} // Pasa la imagen de la abeja como icono
      />
      <AppButton4
        name="CÁMARA EXTERNA"
        fontFamily="Epilogue"
        color="#0097B2"
        onPress={() => navigation.navigate("IniciarSesión")}
        icon={camaraExterna} // Pasa la imagen de la abeja como icono
      />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseCameraScreen;