import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

export default function Home( {navigation}) {
  return (
    <View style={styles.center}>
             <Text> This is Home Screen</Text>
            <Button
              title="Go to Login"
              //style={[{height: '30px', width : '100px'}]}
              //color={"lightgreen"}
              onPress={() => navigation.navigate('Login')}
            />

              <Button
              title="Go to Registration"
              //style={[{height: '30px', width : '100px'}]}
              //color={"lightgreen"}
              onPress={() => navigation.navigate('Registration')}
            />
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
});