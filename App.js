import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import Layout from './components/Layout';
const Stack=createNativeStackNavigator();
//const Tab=createBottomTabNavigator();

 const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Profile" component={ProfileScreen } options={{title:"Profile"}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Layout" component={Layout}/>
        
      </Stack.Navigator>
      {/* <Tab.Navigator initialRouteName='home' >
        <Tab.Screen name="profile" component={ProfileScreen}/>
        <Tab.Screen name='home' component={HomeScreen}/>
      </Tab.Navigator> */}

    </NavigationContainer>


  )

 }
export default App;