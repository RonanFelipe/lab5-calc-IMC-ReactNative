import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      peso: 0,
      imc: 0,
      status: 0,
    }
  }

  calcularImc = () => {
    let indiceImc = this.state.peso/(this.state.altura * this.state.altura);
    this.setState({imc: indiceImc});
    this.setState({status: 1});
  };

  clear = () => {
      this.setState({
          altura: 0,
          peso: 0,
          imc: 0,
          status: 0,
      })
  };

  render() {
      const showButtonCalculate = <Button onPress={this.calcularImc} title="Calcular"/>;
      const showButtonClear = <Button onPress={this.clear} title="Limpar Dados"/>;
    return (
        <View style={{padding: 10}}>
            <View>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Calculadora IMC
                </Text>
            </View>
          <TextInput
              style={{height: 40}}
              placeholder="Digite seu peso!"
              onChangeText={(peso) => this.setState({peso: peso})}
              value={this.state.peso}
          />
          <TextInput
              style={{height: 40}}
              placeholder="Digite sua altura"
              onChangeText={(altura) => this.setState({altura: altura})}
              value={this.state.altura}
          />
            <View>
                {this.state.status === 1 ? showButtonClear : showButtonCalculate}
            </View>
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.imc}
          </Text>

        </View>
    );
  }
}
