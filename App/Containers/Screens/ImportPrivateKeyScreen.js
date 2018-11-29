import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import styles from "./styles"
import {
    Text,
    View,
    ToastAndroid,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native'

export default class ImportPrivateKey extends React.PureComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            privateKey: ''
        }
    }
    componentDidMount() {
        SplashScreen.hide()
    }
    
    onSubmit() {

        fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/importPrivKey', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + this.state.userToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                privKey: this.state.privateKey
            })
        })
            .then(res => res.json())
            .then(response => {
                var result = JSON.stringify(response)
                if(result == "Success"){
                    ToastAndroid.show('Wallet restored', ToastAndroid.SHORT )
                } else if(result == "Private key already imported") {
                    ToastAndroid.show('Private key already imported', ToastAndroid.SHORT )
                } else if (result == "Wallet does not exist") {
                    ToastAndroid.show('Wallet does not exist', ToastAndroid.SHORT)
                } else {
                    ToastAndroid.show('Private key is invalid', ToastAndroid.SHORT)
                }
            })
            .catch(error => Alert.alert('Error:', JSON.stringify(error)));

    }
    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Import Wallet Using Private Key</Text>
                </View>
                <TextInput placeholder="Please Enter Your Private Key" value={this.state.privateKey} onChangeText={text => this.setState({ privateKey: text })} style={[styles.textBorderStyle, styles.textSizingStyle]} />
                <Image source={require('./../../Assets/profile-screen/bar.png')} style={styles.lowerBorder} />
                <TouchableOpacity style={[styles.centered, styles.importBtnContainer]}
                    onPress={this.onSubmit} >
                    <Text style={styles.importText}>Import</Text>
                </TouchableOpacity>
            </View>
        );
    }
}