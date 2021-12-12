import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import config from '../../config';
import { setUserId, setUserToken, setUserType } from '../../redux/actions/UserActions';

export default function LoginScreen(props: any) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasEmailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  async function authenticateUser() {
    let res = await fetch(config.api.host + '/api/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    let respondedData = await res.json()
    let respondedStatus = res.status;
    console.log(respondedData);

    if (respondedStatus == 401) {
      setEmailError(true);
      return;
    } else {
      dispatch(setUserToken(respondedData.accessToken));
      dispatch(setUserId(respondedData.id));
      dispatch(setUserType(respondedData.user_type));
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ require('../../assets/images/background-2.png') } style={styles.background}>
        <View style={styles.imgContainer}>
          <Image style={styles.headerImg} source={require('../../assets/images/logo-red.png')}></Image>
        </View>
        <View style={styles.loginContainer}>
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Your Email" 
            placeholderTextColor="#617694"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
          />
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Your Password" 
            placeholderTextColor="#617694"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          {hasEmailError ? <Text style={styles.emailError}>Incorrect Username Or Password</Text> : <></> }

          <TouchableOpacity onPress={authenticateUser} style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { 
            navigation.navigate('ForgotPasswordScreen'); }} 
            style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot password?</Text>
          </TouchableOpacity>
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
  headerImg: {
    width: '30%',
    resizeMode: 'contain'
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "20%",
    marginTop: 50,
  },
  loginContainer: {
    display: 'flex',
    marginTop: 50,
    width: '100%',
    borderRadius: 10,
  },
  loginText: {
    display: 'flex'
  },
  inputText: {
    height: 60,
    width: '70%',
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#617694',
    fontSize: 24,
    padding: 10,
    marginBottom: 20,
  },
  loginBtn: {
    marginBottom: 25,
    height: 60,
    width: '70%',
    backgroundColor: Colors.primary,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  emailError: {
    color: Colors.action,
    textAlign: 'center',
  },
  background: {
    width: '100%', 
    height: '100%',
    resizeMode: 'center',
  },
  forgotPassText: {
    color: Colors.text,
    fontSize: 16,

  },
  forgotPass: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
