import React from "react";
import { ImageBackground, Image, TouchableOpacity, TouchableHighlight, View, Text, TextInput, StyleSheet, PickerIOSComponent } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Registrar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>

                <View style={styles.viewInputs}>
                    <Text style={styles.textInput}> Nombre </Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Nombre"
                        placeholderTextColor='pink'
                    />

                    <Text style={styles.textInput}> Correo electrónico</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Correo electrónico"
                        placeholderTextColor='pink'
                    />

                    <View style={styles.viewPickerSelect}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Etnia',
                                value: null,
                            }}
                            style={picketSelectStyles}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Español', value: 'Español' },
                                { label: 'Miskitu', value: 'Miskitu' },
                                { label: 'Rama', value: 'Rama' },
                                { label: 'Mayangna', value: 'Mayangna' },
                                { label: 'Garifuna', value: 'Garifuna' },
                            ]}
                        />

                        <RNPickerSelect
                            placeholder={{
                                label: 'Ocupación',
                                value: null,
                            }}
                            style={picketSelectStyles}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Estudiante primaria', value: 'Estudiante primaria' },
                                { label: 'Estudiante secundaria', value: 'Estudiante secundaria' },
                                { label: 'Bachiller', value: 'Bachiller' },
                                { label: 'Estudiante universitario', value: 'Estudiante universitario' },
                                { label: 'Egresado', value: 'Egresado' },
                                { label: 'Trabajo', value: 'Trabajo' },
                                { label: 'otro', value: 'otro' },
                            ]}
                        />

                    </View>
                    <Text style={styles.textInput}> Contraseña </Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Contraseña"
                        placeholderTextColor='pink'
                    />
                    <Text style={styles.textInput}> Comfirma tu contraseña </Text>
                    <TextInput
                        style={styles.Input}
                        placeholder="Confirma tu contraseña"
                        placeholderTextColor='pink'
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.text}> Crear </Text>
                </TouchableOpacity>

                <View style={styles.viewTextContainer}>
                    <Text style={styles.textRegistrar}> ¿Ya tienes una cuenta? </Text>
                    <TouchableHighlight
                        style={styles.textButton}
                        underlayColor={'transparent'}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Inicia sesión aquí</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTextContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInputs: {
        // flexDirection: 'row',
        // marginTop: '2%',
    },
    viewPickerSelect: {
        flexDirection: 'row',
    
    },

    Input: {
        height: 44,
        borderWidth: 1.5,
        borderColor: '#4B7EFB',
        borderRadius: 15,
        width: "94%",
        marginLeft: '2%',
        marginBottom: 10,
        color: "black",
        paddingHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: '7%',
        marginBottom: '7%',
        marginLeft: '32%',
        marginRight: '35%',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#4B7EFB',
        width: '40%',
    },
    textInput: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#EF4E93',
        marginTop: 7,
        marginBottom: 6,
        marginLeft: 9,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textRegistrar: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#4B7EFB',
    },

    textButton: {
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 17,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        color: '#ed391e',
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

const picketSelectStyles = StyleSheet.create({
    inputAndroid: {
        marginRight: '50%',
        marginLeft: 1,
        fontSize: 16,
        width: '100%',
        color: 'black',
        borderColor: 'black',
    },
});

export default Registrar;