import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppTextInput2({ name, text, ...otherProps }) {
  const [searchText, setSearchText] = useState('');

  const handleChangeText = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Buscar..."
        placeholderTextColor="#8A8A8A"
        style={styles.input}
        value={searchText}
        onChangeText={handleChangeText}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 710, 
    width:300,
    marginRight:80,
  },
  input: {
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    borderColor: 'transparent', // Cambia el color del borde a transparente
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
    color: '#333',
    fontFamily: 'Arial',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput2;

