import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from "../screens/Inicio";
import Cuenta from "../screens/Cuenta";
import AcercaDe from "../screens/AcercaDe";
import CerrarSesion from "../screens/CerrarSesion";

const Stack = createNativeStackNavigator();

function DrawerNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="Cuenta" component={Cuenta} />
            <Stack.Screen name="AcercaDe" component={AcercaDe} />
            <Stack.Screen name="Salir" component={CerrarSesion} />
        </Stack.Navigator>
    )
}

export default DrawerNavigator;