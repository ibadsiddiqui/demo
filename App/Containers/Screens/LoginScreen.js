import React from 'react'
import {
  Text,
  View,
  ToastAndroid,
  Image,
  StatusBar,
  BackHandler,
  TextInput,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import styles from "./../Styles/LoginScreenStyles";

import SplashScreen from 'react-native-splash-screen'
import LoginHeader from './../../Components/LoginHeader'

const { height } = Dimensions.get('window')

// import { LoginManager, AccessToken } from 'react-native-fbsdk';

export default class LoginScreen extends React.PureComponent {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.moveToSignUp = this.moveToSignUp.bind(this)
    this.loginWithFb = this.loginWithFb.bind(this)
    this.state = {
      username: "",
      password: "",
      loginToken: "",
      isUserLoggedIn: false,
      attemptingLogin: false,
      message: '',
      onFBLogin: false
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }

  checkUsername(text) {
    var RegexResult = /[!#$%^&*(),?":{}|<>=/+;:'-]/g
    return RegexResult.test(text);
  }

  checkPassword(text) {
    var passwordRegex = /^((?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=.*[a-zA-Z0-9])).{8,}$/;
    return passwordRegex.test(text)
  }

  setUsername(text) {
    var username = text.replace(/[!#$%^&*(),?":{}|<>=/+;:'-\s@]/g, '');

    this.setState({
      username: username
    });
  }

  setPassword(text) {
    this.setState({
      password: text
    });
  }

  onSubmit() {
    if (this.state.password !== "" && this.state.username !== "") {

      if (!this.checkUsername(this.state.username.toString())) {
        if (this.checkPassword(this.state.password.toString())) {
          this.setState({
            attemptingLogin: true,
          })
          setTimeout(() => {

         fetch('https://tenupwalletapi.azurewebsites.net/api/auth/login', {
         //  fetch('http://192.168.100.32:3000/api/auth/login', {
          
        method: 'POST', // or 'PUT'
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
              }), // data can be `string` or {object}!
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(async response => {
                if (response.isUserLoggedIn !== undefined && response.isUserLoggedIn === true) {
                  await AsyncStorage.setItem('loginToken', response.token)
                  setTimeout(() => {

                    this.setState({
                      username: '',
                      password: '',
                      isUserLoggedIn: response.isUserLoggedIn,
                      attemptingLogin: false,
                    })
                  }, 1000);

                  this.props.navigation.push('DashboardScreen')

                } else {
                  this.setState({

                    username: '',
                    password: '',
                    attemptingLogin: false,
                    isUserLoggedIn: false,
                    message: response.message

                  })

                  if (this.state.message == "Unauthorized") {

                    ToastAndroid.showWithGravity("Username does not exist", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                    this.props.navigation.navigate('LoginScreen')

                  } else if (this.state.message == "Verify your Email") {

                    ToastAndroid.showWithGravity(this.state.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                    this.props.navigation.navigate('LoginScreen')
                  }

                }
              })
              .catch(error => Alert.alert('Error:', error));
          }, 1000);
        } else {
          ToastAndroid.showWithGravity('Please Enter A Valid Password', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
      } else {
        ToastAndroid.showWithGravity('A Username should only have Alphabets and Numbers. No Special Characters.', ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } else {
      ToastAndroid.showWithGravity('Please Enter Your Credentials', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

  }

  moveToSignUp() {
    this.props.navigation.navigate('RegistrationScreen')
  }

  loginWithFb() {

    //     this.setState({
    //       onFBLogin: true,
    //     })

    //     LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {

    //       if (result.isCancelled) {
    //         Alert.alert('Login cancelled', "Please Login Again");
    //         return;
    //       } else {
    //         AccessToken.getCurrentAccessToken().then(
    //           async (data) => {
    //             token = data.accessToken.toString();

    //             let response = await fetch(
    //               `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
    //             )
    //             const res = JSON.parse(response._bodyText)

    //             fetch('https://tenupwalletapi.azurewebsites.net/api/auth/login/facebook', {
    //               method: 'POST', // or 'PUT'
    //               body: JSON.stringify({
    //                 email: res.email,
    //                 username: res.name,
    //                 accessToken: token,
    //                 facebookId: res.id,
    //                 profileImg: res.picture.data.url

    //               }), // data can be `string` or {object}!
    //               headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //               }
    //             }).then(res => res.json())
    //               .then( res => {
    //                 // Alert.alert('data', typeof res.isUserLoggedIn)
    //                 if (res.isUserLoggedIn === false || res.doesUserExist === false) {

    //                   // ToastAndroid.showWithGravity("You need to register first with facebook", ToastAndroid.SHORT, ToastAndroid.BOTTOM)

    //                   this.props.navigation.navigate('DashboardScreen')

    //                 } else if (res.isUserLoggedIn === true || res.doesUserExist === true) {
    // //                  setTimeout(async () => {
    //                     // await AsyncStorage.setItem('loginToken', response.token);

    //                     // this.setState({
    //                       // isUserLoggedIn: true,
    //                       // attemptingLogin: false,
    //                     // })
    //                   // }, 1000);
    //                   this.props.navigation.navigate('DashboardScreen')
    //                 } else {
    //                   ToastAndroid.showWithGravity('Please try again', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    //                   this.props.navigation.navigate('LoginScreen')
    //                 }
    //               })
    //           })
    //       }
    //     })
  }


  render() {
    return (
      <View >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
        {/* <FacebookLogin /> */}

        {
          this.state.attemptingLogin === true && this.state.isUserLoggedIn === false
          &&
          <ActivityIndicator size="large" color="#ffffff" style={{ alignSelf: 'center', marginTop: height * 0.47 }} />
        }

        {
          this.state.attemptingLogin === false && this.state.isUserLoggedIn === false
          && this.state.onFBLogin === false
          &&
          <View>

            <LoginHeader />

            <View style={styles.container}>

              <View style={styles.rowView}>
                <View style={styles.usernameIconStyle}>
                  <Image source={require('./../../Assets/login-screen/email.png')} style={styles.usernameIcon} />
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Username"
                  placeholderTextColor="white"
                  onChangeText={(text) => this.setUsername(text)}
                  value={this.state.username} />
              </View>
              <View style={styles.rowView}>
                <View style={styles.usernameIconStyle}>
                  <Image source={require('./../../Assets/login-screen/password.png')} style={styles.errorIcon} />
                </View>
                <TextInput
                  on
                  style={styles.textInput}
                  placeholder="Enter Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  onChangeText={(text) => this.setPassword(text)}
                  value={this.state.password} />

              </View>
              <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => this.props.navigation.navigate('ForgetPasswordScreen')}>
                <Text style={styles.forgotPasswordText}> Forgot Password? </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.onSubmit}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.moveToSignUp}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}

            <View style={[styles.centered, styles.signUpContainer]}>
              <Text style={styles.signUpText}>Login with</Text>

              <View style={styles.rowView}>
                <TouchableOpacity onPress={this.loginWithFb}>
                  <Image source={require('./../../Assets/login-screen/fb-logo-btn.png')} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Not Available', ToastAndroid.SHORT, ToastAndroid.BOTTOM)}>
                  <Image source={require('./../../Assets/login-screen/twitter.png')} style={styles.midMargin} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Not Available', ToastAndroid.SHORT, ToastAndroid.BOTTOM)}>
                  <Image source={require('./../../Assets/login-screen/instagram.png')} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        }

      </View>
    )
  }
}
