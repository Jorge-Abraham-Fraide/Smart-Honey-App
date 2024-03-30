import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, Dimensions, View } from 'react-native';
import AppButton3 from '../components/Appbutton3';
import { useNavigation } from '@react-navigation/native';
import AppTextInput2 from '../components/AppTextInput2';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Inicio() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/fondoInicio.png")}
      >
      <AppButton3 name="BUSCAR" fontFamily="DongleBold" color="#0097B2" onPress={() => navigation.navigate("Camaras")} />

      <View>
        <AppTextInput2 />
      </View>
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

export default Inicio;