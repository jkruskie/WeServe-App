import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>

          {/* Person Header */}
          <View style={styles.header} >
            <Text styles={styles.welcomeTxt}>
              Hello, Justin
            </Text>
          </View>
          <Image style={styles.headerImg} source={require('../assets/profilepicture.jpg')}/>
          {/* End Person Header */}

          {/* List of Opportunities */}
          <View style={styles.oppContainer} >
            <Text>
              Test 1
            </Text>
          </View>

          <View style={styles.oppContainer} >
            <Text>
              Test 1
            </Text>
          </View>

          <View style={styles.oppContainer} >
            <Text>
              Test 1
            </Text>
          </View>
          {/* End List of Opportunities */}

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
  },
  oppContainer: {
    backgroundColor: 'lightgray',
    width: 375,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  header: {
    backgroundColor: 'lightgray',
    width: 400,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
    },
  welcomeTxt: {
    // marginTop: 100,
    // textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 152
  },
  headerImg: {
    width: 125,
    height: 125,
    borderRadius: 75,
    marginTop: -85,
    marginBottom: 50
  }
});