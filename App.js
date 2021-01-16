import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';

const currencyPerRupee= {
  DOLLAR:    0.014,
  EURO:      0.012,
  POUND:     0.011,
  RUBEL:     0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN:       1.54,
  DINAR:     0.043,
  BITCOIN:   0.0000041
}

export default class App extends React.Component {

    constructor(props){
      super(props);
      this.state={
        inputValue:"",
        resultValue:"0.0"
      }
    }
render(){
  return (

    <View style={styles.container}>

      <Text>CURRENCY CHANGER</Text>
      <View style={styles.inputContainer}>

      <TextInput style={styles.input}>
      KeyBoardType="numeric",
      textAlign:'center',
      placeHolder:"ENTER VALUE",
      value={this.state.inputValue}
      onChangeText={inputValue=>this.setState({inputValue})}
     </TextInput> </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("DOLLAR")}style={converterButton}>
        <Text style={styles.convertButtonText}>DOLLAR</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("EURO")}style={converterButton}>
        <Text style={styles.convertButtonText}>EURO</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("POUND")}style={converterButton}>
        <Text style={styles.convertButtonText}>POUND</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("RUBEL")}style={converterButton}>
        <Text style={styles.convertButtonText}>RUBEL</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("AUSDOLLAR")}style={converterButton}>
        <Text style={styles.convertButtonText}>AUSDOLLAR</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("CANDOLLAR")}style={converterButton}>
        <Text style={styles.convertButtonText}>CANDOLLAR</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("YEN")}style={converterButton}>
        <Text style={styles.convertButtonText}>YEN</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("DINAR")}style={converterButton}>
        <Text style={styles.convertButtonText}>DINAR</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.converterButtonContainer}>
      <TouchableOpacity onPress={()=>this.buttonPressed("BITCOIN")}style={converterButton}>
        <Text style={styles.convertButtonText}>BITCOIN</Text>
      </TouchableOpacity>
    </View>







      <StatusBar style="auto" />

    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer:{
    textAlign:'center',

  },

  input:{

  },

  converterButtonContainer:{

  },
});
