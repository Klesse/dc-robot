import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import NavBar from '../components/NavBar'
import PeopleList from '../components/PeopleList'

const People = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBar/>
            <Text style={styles.title}>Relatos de Estudos</Text>
            <PeopleList/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: '#D9F0FF'
    },
    title: {
        fontSize:30,
        textAlign:'center',
        marginTop:'2%',
        //fontFamily:'Lalezar-Regular',
        fontWeight:'bold',
        color:'#6F73D2'
    }

})

export default People;

