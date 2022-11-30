import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Component/Bottom/Home";
import Message from "../../Component/Bottom/Message";
import WatchList from "../../Component/Bottom/WatchList";
import Login from "../../Component/Login/Login";
import Registration from "../../Component/Registration/Registration";
import { Button } from "react-native";

//import {favicon} from 'assert' 

const Stack = createStackNavigator(
  //  {
  //       defaultNavigationOptions: {
  //           headerTitleAlign: 'center',
  //       }
  //   }
  
);

const screenOptionStyle = {
  
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleStyle: {
            fontWeight: 'bold',
          },
  //  headerTitleStyle: { 
  //                      textAlign:"center", 
  //                      flex:1,
  //                     headerTitleAlign: 'center', 
  //                  },
 
};
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      //source={require('assets/favicon.png')}
    />
  );
}


const MainStackNavigator = () => {
 
//  <Image
//       style={{ width: 50, height: 50 }}
//       source={src=(favicon)}
//     />

  
  return (
    <Stack.Navigator 
        screenOptions={screenOptionStyle}
        >
      <Stack.Screen 
                  name="Home " 
                  component={Home} 
                  options={{ 
                   headerRight: () => (
              <Button
                onPress={() => alert('This is call button!')}
                title="Call"
                color="#00cc00"
              />
                   )
                    }}  
               /> 
       <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Registration" component={Registration} /> 

    
    </Stack.Navigator>
  );
}

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="Message " component={Message} /> 
    </Stack.Navigator>
  );
}

const WatchListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
       <Stack.Screen name="Watch List" component={WatchList} /> 
    </Stack.Navigator>
  );
}

export { MainStackNavigator, MessageStackNavigator, WatchListStackNavigator };