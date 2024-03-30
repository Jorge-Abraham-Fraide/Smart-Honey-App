import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppTextInput({ name, text, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder={text}
        placeholderTextColor="#8A8A8A"
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF0D5', // Cambio de color de fondo a #FEF0D5
    borderRadius: 25,
    borderColor: 'black', // Añadir borde negro
    borderWidth: 1, // Grosor del borde
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    fontFamily: 'Arial',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;