import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AppButton2 from '../components/Appbutton2';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

function CerrarSesion() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.buttonContainer}>
        <Text style={styles.text}>¿Quieres cerrar sesión?</Text>
          <AppButton2 name="VOLVER" fontFamily="Baloo" color="#000000" onPress={()=>navigation.navigate("Inicio")}/>
          <AppButton2 name="SALIR" fontFamily="Baloo" color="#E61919" onPress={()=>navigation.navigate("BienvenidoRoot")}/>
        </View>
      </ScrollView>

  )
}
const styles = StyleSheet.create({
  text: {
    textAlign:"center",
    fontFamily:"DongleBold",
    fontSize:40,
    marginBottom:20,
  },
  buttonContainer: {
    marginTop:250,
    flex:1,
  },
  },
  );

export default CerrarSesion