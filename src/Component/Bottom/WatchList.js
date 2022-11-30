import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WatchList =() => {
  return (
    <View style={styles.center}>
      <Text>Watch List</Text>
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

export default WatchList