import React from 'react'
import {
    Text,
    View,
    Image,
    StatusBar,
    BackHandler,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import styles from "./../Styles/RegistrationScreenStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Components/SignUpHeader'
import SignUpFooter from '../../Components/SignUpFooter';


export default class RegisterScreen extends React.PureComponent {
    constructor() {
        super();
        this.setFullName = this.setFullName.bind(this);
        this.setUsername = this.setUsername.bind(this);

        this.moveToAgeAndGender = this.moveToAgeAndGender.bind(this)
        this.state = {
            username: '',
            fullname: ''
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.pop());
    }

    setUsername(text) {

        var username = text.replace(/\s+/g, '');
        username = username.replace(/\@/g, '');
        username = username.replace(/\!/g, '');
        username = username.replace(/\./g, '');
        username = username.replace(/\-/g, '');
        username = username.replace(/\=/g, '');
        username = username.replace(/\`/g, '');
        username = username.replace(/\,/g, '');
        username = username.replace(/\//g, '');
        username = username.replace(/\+/g, '');
        username = username.replace(/\_/g, '');
        username = username.replace(/\#/g, '');
        username = username.replace(/\$/g, '');
        username = username.replace(/\%/g, '');
        username = username.replace(/\&/g, '');
        username = username.replace(/\*/g, '');
        username = username.replace(/\(/g, '');
        username = username.replace(/\)/g, '');


        this.setState({
            username: username
        });
    }
    setFullName(text) {
        this.setState({
            fullname: text
        });
    }
    async moveToAgeAndGender() {
        await AsyncStorage.setItem('fullname', this.state.fullname);
        await AsyncStorage.setItem('username', this.state.username);

        if (this.state.fullname !== '' && this.state.username !== '' && this.state.username.length >= 8) {
            this.props.navigation.push('AgeAndGender');
        } else if (this.state.username.length < 8) {
            ToastAndroid.showWithGravity('Username should atleast contain 8 characters', ToastAndroid.SHORT, ToastAndroid.BOTTOM);

        }
        else {
            ToastAndroid.showWithGravity('Please enter your full name and username', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }

    loginWithFb() {

        // this.setState({
        //     onFBLogin: true,
        // })

        // LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {

        //     if (result.isCancelled) {
        //         Alert.alert('Login cancelled', "Please Login Again");
        //         return;
        //     } else {
        //         AccessToken.getCurrentAccessToken().then(
        //             async (data) => {
        //                 token = data.accessToken.toString();

        //                 let response = await fetch(
        //                     `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        //                 )
        //                 const res = JSON.parse(response._bodyText)

        //                 fetch('https://tenupwalletapi.azurewebsites.net/api/auth/login/facebook', {
        //                     method: 'POST', // or 'PUT'
        //                     body: JSON.stringify({
        //                         email: res.email,
        //                         username: res.name,
        //                         accessToken: token,
        //                         facebookId: res.id,
        //                         profileImg: res.picture.data.url

        //                     }), // data can be `string` or {object}!
        //                     headers: {
        //                         'Accept': 'application/json',
        //                         'Content-Type': 'application/json'
        //                     }
        //                 }).then(res => res.json())
        //                     .then(res => {
        //                         // Alert.alert('data', typeof res.isUserLoggedIn)
        //                         if (res.isUserLoggedIn === false || res.doesUserExist === false) {

        //                             // ToastAndroid.showWithGravity("You need to register first with facebook", ToastAndroid.SHORT, ToastAndroid.BOTTOM)

        //                             this.props.navigation.navigate('DashboardScreen')

        //                         } else if (res.isUserLoggedIn === true || res.doesUserExist === true) {
        //                             // +                  setTimeout(async () => {
        //                             // await AsyncStorage.setItem('loginToken', response.token);

        //                             // this.setState({
        //                             // isUserLoggedIn: true,
        //                             // attemptingLogin: false,
        //                             // })
        //                             // }, 1000);
        //                             this.props.navigation.navigate('DashboardScreen')
        //                         } else {
        //                             ToastAndroid.showWithGravity('Please try again', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        //                             this.props.navigation.navigate('LoginScreen')
        //                         }
        //                     })
        //             })
        //     }
        // })
    }

    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {/* Header */}
                <SignUpHeader />


                {/* Body */}
                <View style={styles.container}>

                    <View style={styles.userIconStyle}>
                        <Image source={require('./../../Assets/signup-screen/user1.png')} />

                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.usernameIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setUsername(text)}
                            value={this.state.username} />
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.usernameIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Full Name"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setFullName(text)}
                            value={this.state.fullname} />

                    </View>


                </View>

                <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.moveToAgeAndGender}>
                    <Text style={styles.loginText}>Next</Text>
                </TouchableOpacity>

                {/* Footer */}

                <SignUpFooter />
            </View>
        )
    }
}
