import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import config from '../../config';
import { setUserId, setUserToken } from '../../redux/actions/UserActions';

export default function ForgotPasswordScreen(props: any) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sentVerification, setVerification] = useState(false);
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
      setVerification(true);
      return;
    } else {
      dispatch(setUserToken(respondedData.accessToken));
      dispatch(setUserId(respondedData.id));
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={ require('../../assets/images/background-2.png') } style={styles.background}>
        <View style={styles.forgotHeader}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>          
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.headerImg} source={require('../../assets/images/logo-red.png')}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.enterEmail}>Enter the email address associated with your account.</Text>
          <Text style={styles.forgotPassParagraph}>Confirm your email and we'll send the instructions.</Text>
        </View>
        <View>
          <TextInput  
              style={styles.inputText}
              placeholder="Enter Your Email" 
              placeholderTextColor="#617694"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
          />
      

          {sentVerification ? <Text style={styles.emailSent}>Email sent.</Text> : <></> }

          <TouchableOpacity onPress={authenticateUser} style={styles.send}>
            <Text style={styles.sendText}>Send</Text>
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
  },
  forgotPassContainer: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    display: 'flex'
  },
  emailSent: {
    color: Colors.action,
    textAlign: 'center',
    // marginTop: 10
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
  send: {
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
  sendText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  background: {
    width: '100%', 
    height: '100%',
    resizeMode: 'center',
  },
  forgotPassText: {
    color: Colors.text,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 28,
    fontWeight: 'bold',

  },
  forgotPassParagraph: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 12,
    textAlign: 'center',
  },
  textContainer: {
  },
  enterEmail: {
    fontSize: 28,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 12,
    textAlign: 'center',
  },
  forgotHeader: {
    marginTop: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
