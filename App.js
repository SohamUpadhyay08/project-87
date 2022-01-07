import React from 'react';
import { createSwitchNavigator,createAppContainer } from "react-navigation"
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from "./navigation/DrawerNavigator"
import LoginScreen from "./screens/LoginScreen"
import DashboardScreen from "./screens/Dashboard"
import LoadingScreen from "./screens/LoadingScreen"
import firebase from "firebase"
import {firebaseConfig} from "./Config"

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app()
}
const SwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen : LoginScreen,
  DashboardScreen : DashboardScreen,
})
const AppNavigator = createAppContainer(SwitchNavigator)
export default function App() {
  return (
    <AppNavigator/>
  );
}