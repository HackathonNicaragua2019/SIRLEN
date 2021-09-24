import React from "react";
import { ImageBackground, Image, TouchableOpacity, TouchableHighlight, View, Text, TextInput, StyleSheet, Header, Footer } from "react-native";

const Login = ({ navigation }) => {

  /*const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={require('../img/plantillaUp.png')}
      />
      <Header {...props} style={{ backgroundColor: 'transparent' }} />

    </View>
    );*/

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={styles.viewLogo}>
          <Image source={require('../img/sirlen.png')} />
        </View>

        <View style={styles.viewInputs}>
          <Text style={styles.textInput}> Usuario </Text>
          <TextInput
            style={styles.Input}
            placeholder="Usuario"
            placeholderTextColor='pink'
          />

          <Text style={styles.textInput}> Contraseña </Text>
          <TextInput
            style={styles.Input}
            placeholder="Contraseña"
            placeholderTextColor='pink'
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Traductor')}>

          <Text style={styles.text}> Entrar </Text>
        </TouchableOpacity>

        <View style={styles.viewTextContainer}>
          <Text style={styles.textRegistrar}> ¿No tienes una cuenta? </Text>
          <TouchableHighlight
            style={styles.textButton}
            underlayColor={'transparent'}
            onPress={() => navigation.navigate('Registrar')}
          >
            <Text style={styles.textButton}>Regístrate aquí</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

/*const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={require('../img/plantillaDown.png')}
    />
    <Footer {...props} style={{ backgroundColor: 'transparent' }} />
  </View>
  );*/


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
    marginTop: '2%',
  },
  viewLogo: {
    alignItems: 'center',
    marginTop: '-9%',
  },
  Input: {
    height: 62,
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
    marginTop: 10,
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

export default Login;