import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Account from './screens/Cuenta';
import AppNavigation from './navigations/AppNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    "DongleBold": require("./assets/fonts/Dongle-Bold.ttf"),
    "Aubrey": require("./assets/fonts/Aubrey-Regular.ttf"),
    "Baloo": require("./assets/fonts/BalooChettan2-Regular.ttf"),
    "Arial": require("./assets/fonts/arial.ttf"),
    "Epilogue": require("./assets/fonts/Epilogue-SemiBold.ttf"),
  })

  if (!fontsLoaded) return null;
  return (
    <AppNavigation />
  );
}

