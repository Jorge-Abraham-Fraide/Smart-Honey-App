import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton4 from '../components/Appbutton4';
import camaraIcon from '../assets/images/camaraIcon.png';
import camaraExterna from '../assets/images/camaraExterna.png';
import CameraScreen from './CameraScreen';
import ExternalCameraScreen from './ExternalCameraScreen';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ChooseCameraScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/images/fondoCamaras.png")}
    >
      <AppButton4
        name="CÁMARA DEL CELULAR"
        fontFamily="Epilogue"
        color="#964119"
        onPress={() => navigation.navigate("CameraScreen")}
        icon={camaraIcon} // Pasa la imagen de la abeja como icono
      />
      <AppButton4
        name="CÁMARA EXTERNA"
        fontFamily="Epilogue"
        color="#0097B2"
        onPress={() => navigation.navigate("ExternalCameraScreen")}
        icon={camaraExterna} // Pasa la imagen de la abeja como icono
      />
    </ImageBackground>
  );
}

const ChooseCameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChooseCameraScreen"
        component={ChooseCameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{  title: 'Cámara del Celular',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: "#CD7104" },
      }} 
      />
      <Stack.Screen
        name="ExternalCameraScreen"
        component={ExternalCameraScreen}
        options={{ title: 'Cámara Externa',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: "#CD7104" },
      }} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseCameraStack;