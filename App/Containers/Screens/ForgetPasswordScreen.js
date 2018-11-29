import React from 'react'
import {
    ActivityIndicator,
    Alert,
    BackHandler,
    Dimensions,
    Image,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Text,
    TextInput,
    View,
} from 'react-native'
import styles from './../Styles/ForgotPasswordScreenStyles';
import SplashScreen from 'react-native-splash-screen'

const { height } = Dimensions.get('window')

export default class ForgetPasswordScreen extends React.PureComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: "",
            sendingEmail: false
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate("LoginScreen"));
    }

    checkEmail(text) {
        var validator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        return validator.test(text)
    }
    setEmail(text) {
        var username = text.replace(/[!#$%^&*(),?":{}|<>=/+;:'-\s]/g, '');

        this.setState({
            email: username
        });
    }
    async onSubmit() {
        this.setState({
            sendingEmail: true
        })
        if (this.state.email !== "") {
            if (this.checkEmail(this.state.email.toString())) {
                await setTimeout(() => {
                    fetch('https://tenupwalletapi.azurewebsites.net/api/auth/forgotPassword',
                        {
                            method: 'POST',
                            body: JSON.stringify({
                                email: this.state.email
                            }),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        }).then(res => res.json())
                        .then(async response => {
                            if (response.isProcessed !== undefined && response.isProcessed === true) {
                                ToastAndroid.show('An email has been sent to you.', ToastAndroid.SHORT)
                                this.setState({
                                    sendingEmail: false
                                })
                                this.props.navigation.navigate('LoginScreen')
                            }
                            else {
                                ToastAndroid.show('This email address does not exist.', ToastAndroid.SHORT)
                                this.props.navigation.navigate('ForgetPasswordScreen')
                                this.setState({
                                    sendingEmail: false
                                })

                            }
                        }
                        ).catch(error => Alert.alert('Error:', error));

                }, 3000);
            }//end of if
            else {
                Alert.alert('Error', "")

            }
        }

    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {
                    this.state.sendingEmail
                    &&
                    <ActivityIndicator size="large" color="#ffffff" style={{ alignSelf: 'center', marginTop: height * 0.47 }} />
                }
                {
                    this.state.sendingEmail === false
                    &&
                    <View>

                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>Forget Password</Text>
                        </View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtitleText}>Please enter your email to sent recovery email</Text>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.rowView}>
                                <View style={styles.usernameIconStyle}>

                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Email"
                                    placeholderTextColor="white"
                                    onChangeText={(text) => this.setEmail(text)}
                                    value={this.state.email}
                                />
                            </View>
                            <TouchableOpacity style={[styles.centered, styles.btnContainer]} onPress={this.onSubmit}>
                                <Text style={styles.forgetText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                }
            </View >
        )
    }
}