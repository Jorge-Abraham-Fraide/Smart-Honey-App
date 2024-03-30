import React from 'react';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTextInput from '../components/AppTextInput';
import AppButton2 from '../components/Appbutton2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function IniciarSesión() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={[styles.backgroundImage, { width: windowWidth, height: windowHeight }]}
          source={require("../assets/images/background.png")}
        >
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Text style={styles.text}>Iniciar Sesión</Text>
            </View>

            <View style={styles.inputContainer}>
              <AppTextInput name="account" text="Nombre de usuario" />
              <AppTextInput name="lock" text="Contraseña" secureTextEntry={true} />
            </View>

            <View style={styles.buttonContainer}>
              <AppButton2 name="ENTRAR" fontFamily="DongleBold" color="#DF8C3F" onPress={() => navigation.navigate("Inicio")} />
            </View>

            <View style={styles.signUpContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Registrarse")}>
                <Text style={styles.signUpText}>¿Aún no tienes una cuenta? Regístrate aquí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    top:150,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 55,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: "center",
    alignSelf:"center",
    marginBottom: 30,
    paddingHorizontal: 0,
    width: '90%',
  },
  buttonContainer: {
    marginBottom: 0,
    paddingHorizontal: 50,
    width: '100%',
  },
  text: {
    paddingBottom:20,
    textAlign: "center",
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'DongleBold',
    color: '#333',
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#333',
  },
});

export default IniciarSesión;