import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import NavBar from './NavBar'


const Info = () => {
    return (
        <View style={styles.container}>
            <NavBar/>
            <Text style={styles.title}>Informações do robô do DC</Text>
            <View style={styles.info_features}>
                <View style={styles.info_card}>
                    <Text style={styles.info_card_title}>Sobre o DC</Text>
                    <ScrollView persistentScrollbar={true} showsVerticalScrollIndicator={true}>
                        <Text style={styles.info_card_text}>O Departamento de Computação da UFSCar destaca-se como um polo 
                            de excelência acadêmica e pesquisa na área da computação. 
                            Reconhecido por sua equipe de profissionais qualificados e 
                            instalações modernas, o departamento oferece um ambiente propício
                            para o desenvolvimento de inovações tecnológicas e formação de
                            profissionais capacitados, contribuindo significativamente 
                            para o avanço científico e tecnológico.
                        </Text>
                    </ScrollView>
                </View>
                
                
                <View style={styles.info_card}>
                    <Text style={styles.info_card_title}>O robô</Text>
                    <ScrollView persistentScrollbar={true} showsVerticalScrollIndicator={true}>
                        <Text style={styles.info_card_text}>O robô inovador projetado para otimizar a interação no Departamento de 
                            Computação da UFSCar, proporcionando uma experiência enriquecedora aos
                            membros da comunidade acadêmica. Com um design futurista e amigável, 
                            este robô autônomo foi desenvolvido para desempenhar duas funções 
                            principais: melhorar o bem-estar emocional e fornecer informações sobre 
                            a universidade.
                        </Text>
                    </ScrollView>
                    <View style={styles.separator}></View>
                    <View style={styles.icon_container}>
                        <View style={styles.icon_and_title}>
                        <Text style={styles.icon_title}>Início</Text>
                            <Feather name="home" style={styles.icons} />
                        </View>
                        
                        <View style={styles.icon_and_title}>
                        <Text style={styles.icon_title}>DC</Text>
                            <Feather name="map-pin" style={styles.icons} />         
                        </View>

                        <View style={styles.icon_and_title}>
                            <Text style={styles.icon_title}>Relatos</Text>
                            <Feather name="user" style={styles.icons} />
                        </View>

                        <View style={styles.icon_and_title}>
                            <Text style={styles.icon_title}>Config.</Text>
                            <Feather name="settings" style={styles.icons} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title: {
        textAlign:'center',
        fontSize:24,
        color:'#6F73D2',
        fontWeight:'bold',
        padding: 10,
        backgroundColor: '#D9F0FF'
    },
    info_features: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        backgroundColor: '#D9F0FF'

    },
    info_card: {
        flex:1,
        backgroundColor: '#6F73D2',
        margin:5,
        padding:5,
        borderRadius:10,
    },
    info_card_title:{
        fontWeight:'bold',
        fontSize:18,
        textDecorationLine: 'underline',
        color: 'white',
        textAlign:'center'
    },

    info_card_text: {
        fontSize: 17,
        lineHeight: 24,
        color:'white'

    },
    separator: {
        height: 2,
        backgroundColor: 'white',
      },
    icon_container: {
        marginRight: 20,
        flexDirection:'row'
    },
    icon_and_title:{
        alignItems: 'center',
        flexDirection:'column',
        paddingLeft:10,
        paddingRight:10,

    },
    icons:{
        color:'white',
        textAlign: 'center',
        backgroundColor:'black',
        fontSize:20,
        borderWidth: 2,
        width:30,
        borderRadius: 10,
        padding:2
    },
    icon_title: {
        fontWeight:'bold',
        marginTop: 5,
        color:'white'
    }

})

export default Info;