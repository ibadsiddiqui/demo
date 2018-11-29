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

export default class ImportMnemonic extends React.PureComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            Mnemonic: '',
        }
    }
    componentDidMount() {
        SplashScreen.hide()
    }

    onSubmit() {

        fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/RestoreWallet', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + this.state.userToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                seedPhrase: this.state.Mnemonic
            })
        })
            .then(res => res.json())
            .then(response => {
                if(response == true || response == 'true'){
                    ToastAndroid.show('Wallet restored', ToastAndroid.SHORT )
                } else {
                    ToastAndroid.show('Wallet could not be restored', ToastAndroid.SHORT )
                }
            })
            .catch(error => Alert.alert('Error:', JSON.stringify(error)));
    }
    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Import Wallet Using Mnemonic</Text>
                </View>
                <TextInput placeholder="Please Enter The Mnemonic" value={this.state.privateKey} onChangeText={text => this.setState({ Mnemonic: text })} style={[styles.textBorderStyle, styles.textSizingStyle]} />
                <Image source={require('./../../Assets/profile-screen/bar.png')} style={styles.lowerBorder} />
                <TouchableOpacity style={[styles.centered, styles.importBtnContainer]}
                    onPress={this.onSubmit} >
                    <Text style={styles.importText}>Import</Text>
                </TouchableOpacity>
            </View>
        );
    }
}