import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, MessageStackNavigator, WatchListStackNavigator } from "../StackNavigator/StackNavigator";
import { View, Button, Text, Animated } from 'react-native';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{headerShown: false}}
       
     >
      <Tab.Screen 
         name="Home" 
         component={MainStackNavigator} 
           options={{
         //     title: 'My Home',
        //     headerTintColor: 'white',
        //     headerStyle: { backgroundColor: 'lightblue' },

        //   //headerTitle: (props) => <LogoTitle {...props} />,
        //     // header: () => (
        //     //   <Button
        //     //     onPress={() => alert('This is a button!')}
        //     //     title="search"
        //     //     color="#00cc00"
        //     //   />
        //     // ),
            
            headerRight: () => (
              <Button
                onPress={() => alert('This is call button!')}
                title="Call"
                color="#00cc00"
              />
            ),


         }}  

      />
      <Tab.Screen name="Message" component={MessageStackNavigator} />
      <Tab.Screen name="WatchList" component={WatchListStackNavigator} />
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigator;