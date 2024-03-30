import { View, Text, ImageBackground, StyleSheet, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppTextInput from '../components/AppTextInput';
import AppButton2 from '../components/Appbutton2';
import DrawerNavigator from '../navigations/DrawerNavigator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Registrarse() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        style={[styles.container, { width: windowWidth, height: windowHeight }]}
        source={require("../assets/images/background.png")}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.text}>Registrarse</Text>
        </View>

        <View style={{marginBottom: 15, marginTop: 15, width:"90%",}}>
          <AppTextInput name="account" text="Nombre de usuario"/>
          <AppTextInput name="email" text="Email"/>
          <AppTextInput name="lock" text="Contraseña" secureTextEntry={true}/>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton2 name="REGISTRARSE" fontFamily="DongleBold" color="#DF8C3F" onPress={()=>navigation.navigate("Inicio")}/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("IniciarSesión")} style={styles.signInLink}>
          <Text style={styles.signInText}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputText: {
    fontSize:20,
  },
  icon: {
    marginHorizontal:15,
  },
  textBox: {
    flexDirection:"row",
    marginBottom:40,
  },
  logoContainer: {
    marginTop:0,
    paddingTop:0,
    paddingEnd:2,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  container: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:50,
    fontWeight:"600",
    fontFamily:"DongleBold",
    color:"black",
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  signInLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: '#333', // Color del texto más oscuro
  },
})

export default Registrarse;