import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native'
import Home from './src/components/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;