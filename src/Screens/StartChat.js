import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native'

import NavBar from '../components/NavBar';

const StartChat = () => {

  const navigation = useNavigation();

  const goToChatScreen = () => {
    navigation.navigate('Chat');
  }

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <View style={styles.wrapper}>
          <View style={styles.camera_container}>
            <Camera
              style={styles.camera}
              type={Camera.Constants.Type.front}
              ref={(ref) => setCameraRef(ref)}
            >
            </Camera>
          </View>
          <View style={styles.buttons_container}>
            <Text style={styles.title}>
              Você está API_RESULT
            </Text>
            <TouchableOpacity onPress={goToChatScreen} style={styles.button}>
              <Text style={styles.buttonText}> Opção 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Opção 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Opção 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Opção 4 </Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  camera_container: {
    flexDirection:'column',
    justifyContent:'space-around',
    marginTop:'2%',
    borderRadius: 20, 
    overflow: 'hidden',
    borderColor: '#6F73D2',
    borderWidth: 2,
    width: '27.5%',
    aspectRatio: 3 / 4,
  },
  camera: {
    height:'100%',
    width: '100%',
  },
  buttons_container: {
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    width:'45%',
  },
  title:{
    borderRadius:10,
    fontSize:20,
    padding:10,
    width:'100%',
    textAlign:'center',
    backgroundColor: '#6F73D2',
    color:'white',
    
  },
  button: {
    width:'60%',
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#6F73D2',
  },
  buttonText: {
      color: 'white',
      textAlign:'center',
      fontWeight: 'bold'
  },
});

export default StartChat;
