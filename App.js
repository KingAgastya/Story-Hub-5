import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import LoginScreen from './screens/LoginScreen'

import firebase from 'firebase'
import db from './config'

export default class App extends React.Component() {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadStoryScreen},
},
{
defaultNavigationOptions : ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
  }
})
}
);

const switchNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  TabNavigator : {screen : TabNavigator}
})
const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
