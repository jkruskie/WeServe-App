import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class LogScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Log Screen</Text>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#212121',
    textAlign:'center'
  },
  button: {
    width:300,
    borderRadius: 25,
    backgroundColor:'#FCE4EC',
    marginVertical: 10,
    paddingVertical:16

  }
});