import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#f5e1ce'}}>
        <ImageBackground source={require('../assets/images/honeyBackground.jpg')} style={{padding:20,}}>
          <Image source={require('../assets/images/icon.png')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#f5e1ce',}}>
        <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
    <View>
    </View>
    </View>
  )
}

export default CustomDrawer;