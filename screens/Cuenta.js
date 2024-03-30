import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const myList=[
  {title:"Jorge Abraham", icon:{
    name:"account",
    backgroundColor:"#49b7e6",
  }},
  {title:"Contacto", icon:{
    name:"email",
    backgroundColor:"#f4b743",
  }},
  {title:"Acerca de", icon:{
    name:"information",
    backgroundColor:"#e14752",
  }},
  {title:"Salir", icon:{
    name:"logout",
    backgroundColor:"#fc4c65",
  }},
]

function Cuenta() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={myList}
        keyExtractor={item=>item.title}
        renderItem={({item})=><View>
          <View style={styles.iconContainer}>
            <View style={[styles.iconBackground, {backgroundColor:item.icon.backgroundColor}]}>
            <MaterialCommunityIcons 
              name={item.icon.name}
              style={styles.icon}
              size={25}
            />
            </View>

            <Text style={styles.text}>
            {item.title}
            </Text>
          </View>

        </View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize:25,
    fontWeight:"600",
    fontFamily:"DongleBold",
    color:"black",
  },
  iconBackground:{
    //backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    width:50,
    marginHorizontal:10,
    height:50,
  },
  icon:{
    marginHorizontal:10,
  },
  iconContainer:{
    flexDirection:"row",
    marginBottom:20,
    alignItems:"center",
    backgroundColor:"white",
    paddingTop:10,
    paddingBottom:10,
  },
  container:{
    flex:1,
    marginTop:70,
    backgroundColor:"#eee",
  }
})

export default Cuenta;