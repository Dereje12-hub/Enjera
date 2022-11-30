import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

export default function Login( {navigation} ) {

  return (
     <View style={styles.center}>
      <Text>LoginScene</Text>
   </View>
  )
}



const styles = StyleSheet.create({

center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },


})