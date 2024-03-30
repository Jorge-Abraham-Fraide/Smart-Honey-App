import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from '../screens/Inicio';
import CameraScreen from '../screens/CameraScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ExternalCameraScreen from '../screens/ExternalCameraScreen';
import ChooseCameraScreen from '../screens/ChooseCameraScreen';
import Galeria from '../screens/Galeria';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Inicio'
    screenOptions={{
        tabBarInactiveTintColor:"white",
        tabBarActiveTintColor:"#5c1721",
        tabBarStyle:{height:60, backgroundColor:"#DF8C3F"}
    }}
    >
    <Tab.Screen 
    name='Inicio' 
    component={Inicio} 
    options={{title:"Bienvenido(a)",
    tabBarBadge:1,
    headerStyle:{backgroundColor:"#CD7104"},
    headerTintColor: '#000000',
    tabBarShowLabel:false,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign:"center",
    headerShown:false,
    tabBarIcon:({size,color})=>(
      <MaterialCommunityIcons name='home' size={50} color={color} />
    ),
    }}
    />
    <Tab.Screen 
    name='Camaras' 
    component={ChooseCameraScreen}
    options={{
      headerShown:false,
        tabBarIcon:({size,color})=>(
            <MaterialCommunityIcons name='bee-flower' size={50} color={color} />
          ),
          tabBarShowLabel:false,
          title:"Cámaras",
          headerTitleAlign:"left",
    }}
    />
    <Tab.Screen 
    name='Galería'
    component={Galeria}
    options={{
      headerShown:false,
        tabBarIcon:({size,color})=>(
            <MaterialCommunityIcons name='file-image' size={50} color={color} />
          ),
          tabBarShowLabel:false,
          title:"Cámaras",
          headerTitleAlign:"left",
    }}
    />
  </Tab.Navigator>
  )
}

export default BottomTabNavigator;