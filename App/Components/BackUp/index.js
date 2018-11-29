import React from 'react'
import {
    View,
    Image,
    BackHandler,
    Text,
    Alert,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'
// styles
import styles from './styles'

// components
import SplashScreen from 'react-native-splash-screen'
export default class BackUp extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            fetchingUserData: null,
            dataFetched: null,
            seedphrase:null,
        }
    }//end of constructor


    componentWillMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('DashboardScreen'))

        this.setState({
            fetchingUserData: true,
            dataFetched: false
        })
    }

    async componentDidMount() {

        fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/SeedPhrase', {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + this.props.loginToken
            }
        }).then(res => res.json())
        .then(res => 
            this.setState({seedphrase:JSON.stringify(res)}
        ))
        .catch(error => Alert.alert('Error:', JSON.stringify(error)));
    }

    render() {
        return (

            <View>

                <Text style={styles.heading}>Backup</Text>

                <View style={styles.PINCodeHeaderContainer}>
                    <Text style={styles.PINCodeHeaderText}>Write down wallet{'\n'} recovery phrase</Text>
                </View>

                <Text style={styles.recoveryPhrase}>{this.state.seedphrase}</Text>

                <Text style={styles.securityHeading}>Security Tips</Text>

                <View style={styles.securityPointView}>

                    <Text style={styles.securityPoint1}>Instead off taking a screenshoot or emailing it, write it down.</Text>
                </View>
                <Image source={require('./../../Assets/home-screen/bar.png')} style={styles.borders1} />

                <View style={styles.securityPointView}>
                    <Text style={styles.securityPoint2}>Keep it in a safe place where only you have access to it.</Text>
                </View>
                <Image source={require('./../../Assets/home-screen/bar.png')} style={styles.borders2} />
                <TouchableHighlight>

                    <Text style={styles.reminderText}>Never mind, remind me later</Text>
                </TouchableHighlight>

                <TouchableOpacity style={[styles.centered, styles.BtnContainer]}>
                    <Text style={styles.btnText}>Yes, I wrote it down</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

