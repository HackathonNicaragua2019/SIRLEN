
import React from "react";
import { ImageBackground, Image, TouchableHighlight, View, Text, StyleSheet, Linking } from "react-native";

const Danza = ({ navigation }) => {
    return (
        <ImageBackground source={require('../img/plantilla.png')} style={styles.image}> 
           <View style={styles.viewImage}>
           <Text style={styles.textImage}> Wallagallo </Text>
                <Image source={require('../img/wallagallo.png')} />
            </View>
            <View style={styles.viewTextContainer}>
                <Text style={styles.text}> Más información </Text>
                <TouchableHighlight
                    style={styles.textButton}
                    underlayColor={'transparent'}
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zGRk_IzbqUs')}
                >
                    <Text style={styles.textButton}>aquí</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    viewTextContainer: {
        marginTop:'11%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewImage: {
        alignItems:'center',
        alignContent: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    textImage: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle:'italic',
        letterSpacing: 0.25,
        color: '#101010',
        marginTop:'-7%',
        marginBottom:'10%',
    },

    text: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#EF4E93',
    },

    textButton: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 18,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        color: '#4B7EFB',
        textDecorationLine: 'underline',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
});

export default Danza;