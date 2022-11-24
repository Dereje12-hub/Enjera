import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScene from '../HomeScene/HomeScene';
import LoginScene from '../LoginScene/LoginScene';
import RegisterScene from '../RegisterScene/RegisterScene';


const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();
//*
export default function MyStack() {
  return (
    
    <Stack.Navigator>
        <Stack.Screen
        name="HomeScene"
        component={HomeScene}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lightblue' },
        }}
      /> 
       <Stack.Screen
        name="LoginScene"
        component={LoginScene}
        options={{ headerStyleInterpolator: forFade }}
      />  

      <Stack.Screen
        name="RegisterScene"
        component={RegisterScene}
        options={{ headerStyleInterpolator: forFade }}
      />  

    </Stack.Navigator>

   

  );
}

const styles = StyleSheet.create({})