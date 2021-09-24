import React from "react";
import {StyleSheet, View, Text, SafeAreaView, TextInput,ActivityIndicator, FlatList} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  // constructor(props)
  // {
  //    super(props);
  //    this.state = {
  //      isLoading: true,
  //      palabras:[]
  //    }
  // }


  // componentDidMount = async () =>{
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //   .then((response) => await response.json())
  //   .then((responseJson) => {

  //     this.setState({
  //       isLoading: false,
  //       palabras: responseJson,
  //     });

  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });

  // }
  //  render(
    
  //  )
  return (
    <>
      <SafeAreaView>
      <Text>Header</Text>
      </SafeAreaView>

      <View>
        <Text>Cuerpo</Text>
        <View style={[{marginLeft:"1%", width: "40%", backgroundColor: "#ff0000", borderColor: "blue"}, styles.viewInputs]}>
        <RNPickerSelect
        placeholder={{
                    label: 'Seleccione un lenguaje',
                    value: null,
                }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

        <RNPickerSelect
        placeholder={{
                    label: 'Seleccione un lenguaje',
                    value: null,
                }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
        </View>
        
        <View>
        <TextInput
        style={styles.Input}
        placeholder="Escriba texto..."
        />

        <TextInput
        style={styles.Input}
        placeholder="Escriba texto..."
        />
        </View>
      </View>
      
      <View>
        <Text>Footer</Text>
      </View>

      {/* <ActivityIndicator size="large" color="#0000ff" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  viewInputs: {
    //flexDirection: 'row',
  },
  Input: {
        height: 100,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#2c2c2c',
        borderRadius: 5,
        width: "100%",
        marginTop: 10,
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#ff0000",
        paddingHorizontal: 20,
    },
  });

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: "20%",
    position: "absolute",
  },
});
