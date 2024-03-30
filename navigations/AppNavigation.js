import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bienvenido from '../screens/Bienvenido';
import IniciarSesión from '../screens/IniciarSesión';
import Registrarse from '../screens/Registrarse';
import Inicio from '../screens/Inicio';
import Cuenta from '../screens/Cuenta';
import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import AcercaDe from '../screens/AcercaDe';
import CerrarSesion from '../screens/CerrarSesion';
import CustomDrawer from '../components/CustomDrawer';
import ChooseCameraScreen from '../screens/ChooseCameraScreen';
import CameraScreen from '../screens/CameraScreen';
import ExternalCameraScreen from '../screens/ExternalCameraScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='Bienvenido'
      screenOptions={{
        drawerStyle:{backgroundColor:"#f5e1ce"},
        drawerActiveBackgroundColor:"#e8c39e",
        drawerActiveTintColor:"#95305a",
        drawerLabelStyle:{fontSize:30, marginLeft:-15, fontFamily:"DongleBold"} 
      }}
      >
        <Drawer.Screen 
        name='Bienvenido' 
        component={BienvenidoStackScreen} 
        options={{ drawerLabel: () => null, headerShown: false, headerShadowVisible:false,}} />
      <Drawer.Screen 
      name='Inicio' 
      component={InicioStackScreen} 
      options={{ 
        title: "Inicio", 
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: "#CD7104" },
        drawerIcon: ({ focused, color, size }) => (
        <MaterialCommunityIcons
        name={focused ? 'home-circle' : 'home-circle'}
        size={40}
        color={color}
      />
    )
  }} 
/>
        <Drawer.Screen 
        name='Cuenta' 
        component={Cuenta} 
        options={{ 
          title: "Cuenta", 
          headerTitleAlign:'center', 
          headerStyle:{backgroundColor:"#CD7104"},
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
            name={focused ? 'account' : 'account'}
            size={40}
            color={color}
          />
        )
          }} 
          />
        <Drawer.Screen 
        name='AcercaDe' 
        component={AcercaDe} 
        options={{ 
          title: "Acerca de", 
          headerTitleAlign:'center', 
          headerStyle:{backgroundColor:"#CD7104"},
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
            name={focused ? 'information-outline' : 'information-outline'}
            size={40}
            color={color}
          />
        )
          }} 
          />
        <Drawer.Screen 
        name='Salir' 
        component={CerrarSesion} 
        options={{ 
          title: "Salir", 
          headerTitleAlign:'center', 
          headerStyle:{backgroundColor:"#CD7104"},
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
            name={focused ? 'logout' : 'logout'}
            size={40}
            color={color}
          />
        )
          }} 
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// Crear un Stack Navigator para las pantallas Bienvenido, Iniciar Sesión y Registrarse
const BienvenidoStack = createNativeStackNavigator();

function BienvenidoStackScreen() {
  return (
    <BienvenidoStack.Navigator>
      <BienvenidoStack.Screen
        name='BienvenidoRoot' // Cambia el nombre de la pantalla raíz
        component={Bienvenido}
        options={{ headerShown: false,}}
      />
      <BienvenidoStack.Screen
        name='IniciarSesión'
        component={IniciarSesión}
        options={{
          title: "Iniciar Sesión", 
          headerStyle: { backgroundColor: "#CD7104" }, 
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: 'bold' }, 
          headerTitleAlign: "center" 
        }}
      />
      <BienvenidoStack.Screen
        name='Registrarse'
        component={Registrarse}
        options={{
          title: "Registrarse", 
          headerStyle: { backgroundColor: "#CD7104" }, 
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: 'bold' }, 
          headerTitleAlign: "center" 
        }}
      />
    </BienvenidoStack.Navigator>
  );
}

// Crear un Stack Navigator para la pantalla Inicio que contiene BottomTabNavigator
const InicioStack = createNativeStackNavigator();

function InicioStackScreen() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen
        name='BottomTabNavigator'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </InicioStack.Navigator>
  );
}

export default AppNavigation;

