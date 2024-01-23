import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import axios from 'axios';

const Chat = () => {
    const [data, setData] = useState([]);
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        const prompt = textInput;
        try {
            const response = await axios.post(
                apiUrl,
                {
                    prompt: prompt,
                    max_tokens: 1024,
                    temperature: 0.5,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );

            const text = response.data.choices[0].text;
            setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: text }]);
            setTextInput('');
        } catch (error) {
            console.error('Error sending request to OpenAI API:', error);
            // Trate o erro conforme necessário
            // Por exemplo, você pode exibir uma mensagem de erro para o usuário
        }
    };

    return (
        <SafeAreaView>
            <NavBar />
            <View style={styles.container}>
                <Text style={styles.title}> AI Chat Bot </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.body}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>
                                {item.type === 'user' ? 'Ninza' : 'Bot'}
                            </Text>
                            <Text style={styles.bot}>{item.text}</Text>
                        </View>
                    )}
                />
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                    placeholder="Ask me anything"
                />
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    body: {
        backgroundColor: '#fffcc9',
        width: '102%',
        margin: 10,
    },
    bot: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: 60,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'yellow',
        width: '90%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default Chat;
