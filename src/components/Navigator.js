import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import Info from "./Info";
import NavBar from "./NavBar";

const Stack = createStackNavigator();


const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} 
                name="Home" component={Home}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="Info" component={Info}/>
                <Stack.Screen options={{ headerShown: false }} 
                name="NavBar" component={NavBar}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;