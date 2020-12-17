import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase-config';

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (<NavegacaoPrincipal />);
}



