
import React from 'react'
import { StyleSheet, Text,Button, View } from 'react-native'


export default function HomeScene( {navigation} ) {
  return (
    <View>
        <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScene')}
      />
       <Button
        title="Go to Register"
        color={"green"}
        onPress={() => navigation.navigate('RegisterScene')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})