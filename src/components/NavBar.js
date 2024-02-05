
import React from 'react'
import {View, Image, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const NavBar = () => {

    const windowHeight = Dimensions.get('window').height;
    const viewHeight = windowHeight * 0.1;

    const navigation = useNavigation();

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    }

    const goToMapScreen = () => {
      navigation.navigate('Map');
    }

    const gotToPeopleScreen = () => {
      navigation.navigate('People')
    }

    const goToSettingsScreen = () => {
      navigation.navigate('Settings')
    }


    return (
        <SafeAreaView style={[styles.container, {height: viewHeight}]}>
            <View style={styles.icons_left}>
              <TouchableOpacity onPress={goToHomeScreen}>
                  <Feather name={'home'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.icons_right}>
              <TouchableOpacity onPress={goToMapScreen}>
                <Feather name={'map-pin'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={gotToPeopleScreen}>
                <Feather name={'user'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={goToSettingsScreen}>
                <Feather name={'settings'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
              </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        height: 5,
        paddingHorizontal: 16, // Adiciona algum espaçamento horizontal entre os ícones e as bordas
      },
      icons_left: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        width:50
      },
      icons_right: {
        alignItems: 'center',
      },
    icons_right: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',

    },
    icons: {
        color:'white',
        textAlign: 'center',
        backgroundColor:'black',
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 10,
        padding:2
    }
  })

export default NavBar;

