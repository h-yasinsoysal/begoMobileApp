import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../Assets/imgs/logo.png')}
                />
            </View>
            <View>
                <Text style={styles.label}>Vergi Numarası</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Vergi numaranızı giriniz"
                />
            </View>
            <View>
                <Text style={styles.label}>Parola</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Parolanızı giriniz"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainerPass}>
                <TouchableOpacity onPress={() => console.log('Şifremi Unuttum pressed')}>
                    <Text style={styles.buttonText}>Şifremi Unuttum</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    logo: {
        width: 400, 
        height: 50,
        marginBottom: 50,
        resizeMode: 'contain',
    },
    label: {
        color: '#7A7A7A',
        fontFamily: 'Arial',
        fontSize: 19.219,
        paddingBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        display: 'flex',
        width: 388,
        height: 63,
        padding: 20,
        borderColor: '#7A7A7A',
        borderWidth: 1,
        borderRadius: 31,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonContainer: {
        display: 'flex',
        width: 388,
        height: 64,
        borderRadius: 31.5,
        backgroundColor: '#DDA726',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainerPass: {
        display: 'flex',
        width: 388,
        height: 64,
        borderRadius: 31.5,
        backgroundColor: '#7A7A7A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 500,
        fontSize: 17,
    }
});

export default Login;
