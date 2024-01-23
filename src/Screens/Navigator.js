import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import Info from "./Info";
import NavBar from "../components/NavBar";
import Map from './Map';
import People from './People';
import Settings from './Settings';
import StartChat from './StartChat';
import Chat from './Chat';

const Stack = createStackNavigator();


const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} 
                name="Home" component={Home}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="StartChat" component={StartChat}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="Chat" component={Chat}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="Info" component={Info}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="NavBar" component={NavBar}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="Map" component={Map}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="People" component={People}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="Settings" component={Settings}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;