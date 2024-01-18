import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from 'react-native'

const DATA = [
    {
        id:'1',
        image_name:'joana',
        name_year: 'Joana, BCC 019',
        topics: 'Tópicos: Dificuldade de estudar , falecimento de ente querido, persistência.',
    },
    {
        id:'2',
        image_name:'brainer',
        name_year: 'Brainer, EnC 020',
        topics: 'Tópicos: Pressão em Provas, estratégia de estudo, paciência.',
    },
    {
        id:'3',
        image_name:'marcos',
        name_year: 'Marcos, Enc 018',
        topics: 'Tópicos: Dificuldade Financeira,  problemas familiares, bolsas de estudo.',
    }
        
]

const Item = (props) => {
    const { image_name, name_year, topics } = props;
    const images = {
        brainer: require('../../assets/imgPeopleList/brainer.png'),
        joana: require('../../assets/imgPeopleList/joana.png'),
        marcos: require('../../assets/imgPeopleList/marcos.png'),
      };
    return (
        <View style={styles.item}>
            <View style={styles.image_container}>
                <Image style={styles.item_image} source={images[image_name]} ></Image>
            </View>
            <View style={styles.item_text}>
               <Text style={styles.item_title}>{name_year}</Text>
               <Text style={styles.item_topic}>{topics}</Text>
            </View> 
        </View>
        
    )
}

const PeopleList = () => {
    const renderItem = ({item}) => (
        <Item
        id={item.id} 
        image_name={item.image_name}
        name_year={item.name_year} 
        topics={item.topics} 
        ></Item>
    )

    return (
            <View style={styles.container}>
                <FlatList
                data = {DATA}
                renderItem = {renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:'2%'
    },
    item: {
        backgroundColor:'#6F73D2',
        marginBottom:'7.5%',
        borderRadius:10,
        padding:'5%',
        flexDirection:'row'
        
    },
    image_container:{
        marginRight:'2%',
    },
    item_image: {
        height: 100,
        resizeMode:'contain'
    },
    item_text:{
        width:'55%'
    },
    item_title:{
        fontWeight:'bold',
        color:'white',
        fontSize:22,
        marginBottom:'2%'
    },
    item_topic:{
        color:'white',
        fontSize:16

    }
})

export default PeopleList;