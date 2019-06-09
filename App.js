import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {Button} from "react-native-web";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      altura: number,
      peso: number,
      imc: 0,
    }
  }

  calcularImc = () => {
    let indiceImc = this.state.peso/this.state.altura * this.state.altura;
    this.setState({imc: indiceImc});
  };

  render() {
    return (
        <View style={{padding: 10}}>
          <TextInput
              style={{height: 40}}
              placeholder="Digite seu peso!"
              onChangeText={(peso) => this.setState({peso: peso})}
          />
          <TextInput
              style={{height: 40}}
              placeholder="Digite sua altura"
              onChangeText={(altura) => this.setState({altura: altura})}
          />
          <Button onPress={this.calcularImc} title="Calcular"/>
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.imc}
          </Text>
        </View>
    );
  }
}
