import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Component/Bottom/Home";
import Message from "../../Component/Bottom/Message";
import WatchList from "../../Component/Bottom/WatchList";
import Login from "../../Component/Login/Login";


const Stack = createStackNavigator();

const screenOptionStyle = {

  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
        screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home}/> 
       <Stack.Screen name="Login" component={Login} /> 
    
    </Stack.Navigator>
  );
}

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="Message" component={Message} /> 
    </Stack.Navigator>
  );
}

const WatchListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="WatchList" component={WatchList} /> 
    </Stack.Navigator>
  );
}

export { MainStackNavigator, MessageStackNavigator, WatchListStackNavigator };