import React, { useState } from 'react';
import { View, StyleSheet, Text, 
    FlatList, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import NavBar from '../components/NavBar';
import axios from 'axios';
import ChatBubble from '../components/ChatBubble';
import {speak, isSpeakingAsync, stop} from 'expo-speech';
import { GEMINI_API_KEY } from "@env"

const Chat = ({route}) => {

    const {color} = route.params;

    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleUserInput = async () => {
        let updatedChat = [
            ...chat,
            {
                role: "user",
                parts: [{text: userInput}],

            },

        ];

        setLoading(true);

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
                {
                    contents: updatedChat,
                }
            );

            console.log("Gemini Pro API response:", response.data);

            const modelResponse = 
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            
            if (modelResponse) {
                const updateChatWithModel = [
                    ...updatedChat,
                    {
                        role:"model",
                        parts: [{text: modelResponse}],

                    },
                ]

                setChat(updateChatWithModel);
                setUserInput("");
            }

        } catch (error) {
            console.error("Error calling Gemini Pro API:",error);
            console.error("Error response:",error.response);
            setError("Aconteceu um erro. Tente novamente");
        } finally {
            setLoading(false);
        }
        setIsButtonDisabled(true);

    };

    const handleSpeech = async (text) => {
        if (isSpeaking){
            stop();
            setIsSpeaking(false);
        } else {
            if(!(await isSpeakingAsync())) {
                speak(text, {language: 'pt-BR'});
                setIsSpeaking(true);
            }
        }
    };

    const renderChatItem = ({item}) => (
        <ChatBubble
        role={item.role}
        text={item.parts[0].text}
        onSpeech={() => handleSpeech(item.parts[0].text)}
        />
    );

    const handleInputChange = (text) => {
        setUserInput(text);
        setIsButtonDisabled(text.trim().length === 0);
    };

    return (
        <View style={{flex:1}}>
            <NavBar/>
            <View style={[styles.container,{backgroundColor:color}]}>
                <Text style={styles.title}>Robô do DC</Text>
                <FlatList
                data={chat}
                renderItem={renderChatItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.chatContainer}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua mensagem..."
                        placeholderTextColor='#aaa'
                        value={userInput}
                        onChangeText={handleInputChange}
                    />
                    <TouchableOpacity style={[styles.button]} onPress={handleUserInput} disabled={isButtonDisabled}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                {loading && <ActivityIndicator style={styles.loading} color="#333" />}
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16,
        backgroundColor:'#f8f8f8',
    },
    title: {
        fontSize:24,
        fontWeight:"bold",
        color:"white",
        marginBottom: 20,
        marginTop:20,
        textAlign: "center",
        borderRadius:20,
        backgroundColor:'#6F73D2'
    },
    chatContainer: {
        flexGrow:1,
        justifyContent:"flex-end",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    input: {
        flex: 1,
        height: 50,
        marginRight: 10,
        padding: 8,
        borderColor: "#333",
        borderWidth:1,
        borderRadius: 25,
        color: "#333",
        backgroundColor: "#fff",
    },
    button: {
        padding: 10,
        borderRadius: 25,
        backgroundColor:'#6F73D2'
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
    },
    loading: {
        marginTop: 10,
    },
    error: {
        color: "red",
        marginTop: 10,
    },

});

export default Chat;
