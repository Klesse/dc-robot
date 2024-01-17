
import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const NavBar = () => {

    const windowHeight = Dimensions.get('window').height;
    const viewHeight = windowHeight * 0.1;

    const navigation = useNavigation();

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    }


    return (
        <SafeAreaView style={[styles.container, {height: viewHeight}]}>
            <View style={styles.icons_left}>
              <TouchableOpacity onPress={goToHomeScreen}>
                  <Feather name={'home'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
                </TouchableOpacity>
            </View>
            

            <View style={styles.icons_center}>
                <Feather name={'hard-drive'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
            </View>
            <View style={styles.icons_right}>
                <Feather name={'map-pin'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
                <Feather name={'user'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
                <Feather name={'settings'} style={[styles.icons, {fontSize:viewHeight*0.6}]}/>
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
      icons_center: {
        justifyContent: 'center',
        alignItems: 'center',
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

