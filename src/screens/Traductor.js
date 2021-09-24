
import React from "react";
import { ImageBackground, Image, TouchableOpacity, TouchableHighlight, View, Text, StyleSheet, TextInput, Clipboard, } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Traductor = ({ navigation }) => {

  return (
    < View style={styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={styles.viewPickerSelect}>
          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}
            style={picketSelectStyles}
            //itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayangna', value: 'Mayangna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />

          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}
            style={picketSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayangna', value: 'Mayangna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />
        </View>

        <View style={styles.viewInputs}>
          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
            placeholderTextColor='pink'
          />

          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
            placeholderTextColor='pink'
          />
        </View>

        <View style={styles.viewIconContainer1}>
          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/audio.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/imagen.png')} />
          </TouchableHighlight>
        </View>

        <View style={styles.viewIconContainer2}>
          <TouchableHighlight style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../img/audio.png')} />
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.text}> Traducir </Text>
          </TouchableOpacity>

          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.navigate('Menu')}
          >    
            <Image source={require('../img/explorar.png')} />
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
    resizeMode: "cover",
  },
  viewIconContainer1: {
    flexDirection: "row",
    marginTop: '-55%',
    marginLeft: '-30%',
    marginRight: '-15%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewIconContainer2: {
    marginTop: '-72%',
    marginLeft: '-30%',
    marginRight: '-15%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  viewTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInputs: {
    marginTop: '15%',
  },
  viewPickerSelect: {
    flexDirection: 'row',
    marginTop: '34%',
    marginBottom: '-10%'
  },
  Input: {
    height: '32%',
    borderWidth: 1,
    color: '#2c2c2c',
    borderRadius: 8,
    borderColor: '#4B7EFB',
    width: "96%",
    marginTop: -5,
    marginLeft: '2%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: '3%',
    marginBottom: '7%',
    marginLeft: '35%',
    marginRight: '35%',
    borderRadius: 4,
    elevation: 5,
    backgroundColor: '#4B7EFB',
    width: '40%',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  textButton: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 20,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    color: '#8406c8',
    //textDecorationLine: 'underline',
  },
  iconContainer: {
    elevation: 10,
    height: 110,
    width: 110,
    marginLeft: '-11%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  icon: {
    height: '30%',
    width: '33%',
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

export default Traductor;