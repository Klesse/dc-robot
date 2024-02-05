import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native'

import NavBar from '../components/NavBar';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StartChat = () => {

  const navigation = useNavigation();

  const goToChatScreen = (color) => {
    navigation.navigate('Chat', {color});
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
              Selecione como está se sentindo
            </Text>
            <TouchableOpacity onPress={() => goToChatScreen('#FFFF99')} style={[styles.button, styles.happyButton]}>
              <Text style={styles.buttonText}> Feliz </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToChatScreen('#FFFF99')} style={[styles.button, styles.sadButton]}>
              <Text style={styles.buttonText}> Triste </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToChatScreen('#CCCCCC')} style={[styles.button, styles.normalButton]}>
              <Text style={styles.buttonText}> Normal </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToChatScreen('#FFD9D9')} style={[styles.button, styles.angryButton]}>
              <Text style={styles.buttonText}> Raiva </Text>
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
    marginTop:'0.5%',
    marginBottom:'3%',
    borderRadius: 20, 
    overflow: 'hidden',
    borderColor: '#6F73D2',
    borderWidth: 2,
    width: windowWidth*0.35,
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
    color:'#F5F5F5',
    
  },
  button: {
    width:'60%',
    padding: 12,
    borderRadius: 20,
  },
  happyButton: {
    backgroundColor: '#FFD700',
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  sadButton: {
    backgroundColor: '#87CEEB',
    elevation: 5, // Para Android
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  normalButton: {
    backgroundColor: '#808080',
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  angryButton: {
    backgroundColor: '#FF0000',
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonText: {
      color: '#F5F5F5',
      textAlign:'center',
      fontWeight: 'bold'
  },
});

export default StartChat;
