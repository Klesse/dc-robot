import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native'
import Navigator from './src/Screens/Navigator'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
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