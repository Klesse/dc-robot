import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native'
import Home from './src/components/Home'
import Info from './src/components/Info'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Info/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default App;