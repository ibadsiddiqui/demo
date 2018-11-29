import React from 'react'
import styles from "./../Styles/ProfileScreenStyles"
import SplashScreen from 'react-native-splash-screen'
import {
    ActivityIndicator,
    Alert,
    AsyncStorage,
    BackHandler,
    Dimensions,
    Image,
    StatusBar,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    View,
} from 'react-native'

const { height } = Dimensions.get('window')


export default class ProfileScreen extends React.PureComponent {
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            userToken: null,
            fetchingUserData: null,
            dataFetched: null,
            userEmail: "",
            userCity: '',
            userFullName: '',
            userPhoneNumber: '',

        }
    }//end of constructor

    async _getToken() {
        const loginToken = await AsyncStorage.getItem('loginToken')

        this.setState({
            userToken: loginToken
        })
    }

    EmailValidator(text) {
        var validator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        return validator.test(text)
    }
    setEmail(text) {
        var email = text.replace(/[!#$%^&*(),?":{}|<>=/+;:'-]/g, '');

        this.setState({
            userEmail: email
        });
    }
    cityValidator(text) {
        var validator = /[a-zA-Z\s]/
        return validator.test(text)
    }
    setCity(text) {
        this.setState({
            userCity: text
        });
    }
    componentWillMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('DashboardScreen'))

        this.setState({
            fetchingUserData: false,
            dataFetched: true
        })
    }


//kon sa website pe?? five
    async componentDidMount() {
        // await this._getToken();

        // fetch('https://tenupwalletapi.azurewebsites.net/api/userprofile/getProfile', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': "Bearer " + this.state.userToken
        //     }
        // }).then(res => res.json())
        //     .then(response => {
        //         this.setState({
        //             fetchingUserData: false,
        //             dataFetched: true,
        //             userEmail: response.email,
        //             userFullName: response.fullname,
        //             userCity: response.city,
        //             userPhoneNumber: response.phoneNumber,
        //             userGender: response.gender,
        //             userDOB: response.dob,

        //         })
        //     })
        //     .catch(error => Alert.alert('Error:', JSON.stringify(error)));
    }
    onSubmit() {
        fetch('https://tenupwalletapi.azurewebsites.net/api/userprofile/updateProfile', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + this.state.userToken
            },

            body: JSON.stringify({
                fullname: this.state.userFullName,
                dob: this.state.userDOB,
                gender: this.state.userGender === "1" ? 1 : 0,
                city: this.state.userCity,
                phoneNumber: this.state.userPhoneNumber,
                email: this.state.userEmail
            }),
        }).then(res => res.json()).then(response => {
            ToastAndroid.showWithGravity('Saved!', ToastAndroid.SHORT)
        });
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DashboardScreen')} style={styles.backIconContainer}>
                    <Image source={require('./../../Assets/received-tups-screen/back.png')} style={styles.backIcon} />
                </TouchableOpacity>

                {
                    this.state.fetchingUserData === true && this.state.dataFetched === false
                    &&
                    <ActivityIndicator size="large" color="#0c3b87" style={{ alignSelf: 'center', marginTop: height * 0.47 }} />

                }
                {
                    this.state.fetchingUserData === false && this.state.dataFetched === true
                    &&
                    <View>
                        <Text style={styles.heading}>Profile</Text>
                        <Image source={require('./../../Assets/profile-screen/image.png')} style={styles.profileImage} />
                        <Text style={styles.usernameText}>{this.state.userFullName}</Text>

                        <View style={styles.userInfo}>

                            <View style={styles.userEmailPlaceholder}>
                                <Text style={styles.greyColor}>Email Address</Text>
                                <TextInput
                                    style={styles.userText}
                                    value={this.state.userEmail}
                                    onChangeText={(text) => this.setEmail(text)}
                                />

                                {/* <Image source={require('./../../Assets/profile-screen/bar.png')} style={styles.lowerBorder} /> */}
                            </View>

                            <View style={styles.userCityPlaceholder}>
                                <Text style={styles.greyColor}>City</Text>
                                <View style={styles.rowView}>

                                    <TextInput style={styles.userText}
                                        value={this.state.userCity}
                                        onChangeText={(text) => this.setCity(text)}
                                    />
                                    <Image source={require('./../../Assets/profile-screen/pin.png')} style={styles.locationPin} />
                                </View>

                                {/* <Image source={require('./../../Assets/profile-screen/bar.png')} style={styles.lowerBorder} /> */}
                            </View>

                            <View style={styles.userPhoneNumberPlaceholder}>
                                <Text style={styles.greyColor}>Phone Number</Text>
                                <TextInput style={styles.userText}
                                    value={this.state.userPhoneNumber}
                                    onChangeText={(text) => this.setPhoneNumber(text)}
                                    keyboardType="numeric"
                                />

                                {/* <Image source={require('./../../Assets/profile-screen/bar.png')} style={styles.lowerBorder} /> */}
                            </View>

                        </View>


                        <TouchableOpacity style={[styles.centered, styles.saveBtnContainer]}
                            onPress={this.onSubmit} >
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}