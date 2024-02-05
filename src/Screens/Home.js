import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import NavBar from '../components/NavBar'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Bluetooth Serial (Sem ser LE)
// MorphCast

const Home = () => {

    const navigation = useNavigation();

    const goToInfoScreen = () => {
        navigation.navigate('Info');
      };
    

      const goToStartChatScreen = () => {
        navigation.navigate('StartChat')
      }

    return (
        <View style={styles.container}>
            <NavBar/>
            <View style={styles.home_features}>
                <Image source={require('../../assets/robo.png')} 
                style={styles.image}
                resizeMode="contain"/>
                <TouchableOpacity style={styles.button} onPress={goToStartChatScreen}>
                    <Text style={styles.buttonText}>Iniciar chat</Text>
                </TouchableOpacity>
            </View>
            
                <View style={styles.icon_container}>
                    <TouchableOpacity onPress={goToInfoScreen}>
                        <Feather name={"info"} style={styles.info_icon}/>
                    </TouchableOpacity>
                </View>
            
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    home_features: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'column',
        backgroundColor: '#D9F0FF'
    },
    image: {
        height:windowHeight*0.40
    },
    button: {
        flexDirection:'row',
        marginTop: 10,
        padding:20,
        borderRadius:20,
        backgroundColor: '#6F73D2'
    },
    buttonText: {
        color: 'white',
        fontSize:windowHeight*0.05,
        fontWeight: 'bold'
    },
    icon_container: {
        flexDirection:'row',
        backgroundColor: '#D9F0FF'
    },
    info_icon: {
        color:'white',
        textAlign: 'center',
        fontSize: windowHeight*0.10,
        backgroundColor:'black',
        borderRadius: 50,
        marginLeft:20,
        marginBottom:20
    }
  })

export default Home;