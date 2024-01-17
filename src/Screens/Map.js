import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import NavBar from '../components/NavBar';

const Map = () => {
    const [showImage, setShowImage] = useState(true);

    const toggleView = () => {
        setShowImage(!showImage);
    };

    return (
        <View>
        <NavBar/>
        <View style={styles.container}>
            
            {showImage ? (
                <Image source={require('../../assets/mapa-dc.jpg')}
                       style={styles.image}
                />
            ) : (
                <View style={styles.mapBorder}>
                <MapView style={styles.map}
                         initialRegion={{
                            latitude: -21.979579406397583,
                            longitude: -47.88038067934134,
                            latitudeDelta: 0.001,
                            longitudeDelta: 0.001,
                         }}
                >
                <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} />
                </MapView>
                </View>
            )}
            <TouchableOpacity onPress={toggleView} style={styles.button}>
                <Text style={styles.buttonText}>{showImage ? 'Google maps' : 'Mapa DC'}</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexGrow:1,
        justifyContent: 'center',
        alignItems:'center',
        height:'85%'
    },
    image: {
        borderWidth:2,
        borderColor:'#6F73D2',
        borderRadius:10,
        width: 350,
        height: 175,
        resizeMode: 'cover',
      },
      mapBorder:{
        padding:2,
        borderWidth:2,
        borderColor:'#6F73D2',
        borderRadius:10,
      },
      map: {
        width: 350,
        height: 175,
        resizeMode: 'contain',
      },
      button: {
            flexDirection:'row',
            marginTop:'2%',
            marginBottom: '2%',
            padding:20,
            borderRadius:20,
            backgroundColor: '#6F73D2'
      },
      buttonText: {
        color:'white'
      }
})

export default Map;