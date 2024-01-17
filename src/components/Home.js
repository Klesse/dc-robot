import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import NavBar from './NavBar'
import {Feather} from '@expo/vector-icons'

// Bluetooth Serial (Sem ser LE)
// MorphCast

const Home = () => {
    const handlePress = () => {
        Alert.alert('Hey Brainer!');
      };

    return (
        <View style={styles.container}>
            <NavBar/>
            <View style={styles.home_features}>
                <Image source={require('../../assets/robo.png')} 
                style={styles.image}
                resizeMode="contain"/>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Pressione-me</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.icon_container}>
                <Feather name={"info"} style={styles.info_icon}/>
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
        height:150
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
        fontWeight: 'bold'
    },
    icon_container: {
        flexDirection:'row',
        backgroundColor: '#D9F0FF'
    },
    info_icon: {
        color:'white',
        textAlign: 'center',
        fontSize:30,
        backgroundColor:'black',
        borderRadius: 50,
        marginLeft:20,
        marginBottom:20
    }
  })

export default Home;