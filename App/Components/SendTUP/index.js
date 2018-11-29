import React, { Component } from 'react'
import styles from "./styles"
import {
    View,
    Text,
    Image,
    StatusBar,
    ToastAndroid,
    TouchableOpacity,
    Alert,
    TextInput,
    BackHandler
} from 'react-native'

import { Link, BackButton } from "react-router-native";
import SplashScreen from 'react-native-splash-screen'

import Camera from 'react-native-camera';


export default class SendTup extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onFocusChangeNormal = this.onFocusChangeNormal.bind(this);

       
        this.state={
            isFocused:false,
            isFocusedNormal:false
        }


    }//end of constructor
    onFocusChange() {
        this.setState({ isFocused: true,
            isFocusedNormal:false
         });
    }
    onFocusChangeNormal(){
        this.setState({ isFocusedNormal: true,
            isFocused:false
         });

    }
    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }
    onSubmit() { }
  
    render() {

        return (
            <View style={styles.body}>
                <StatusBar translucent={true} backgroundColor='transparent' />

                {/* <TouchableOpacity style={styles.sandwichIconContainer}>
                    <Image source={require('./../../Assets/home-screen/sidemenu.png')} style={styles.sandwichIcon} />
                </TouchableOpacity> */}
                <Text style={styles.heading}>Sent </Text>

                <Text style={[styles.subHeadTo, styles.bottomBorder]}>To...</Text>

                <Image style={[styles.subHeadQRCode, styles.subHeadQRCodeSize]} source={require('./../../Assets/sent-tups-screen/qr.png')} />

                <Text style={styles.walletCode}>asdqJYQNAGusg63267sj218</Text>

                <View style={[styles.rowView, styles.converterDigit]}>
                    <TextInput onFocus={this.onFocusChange} style={(this.state.isFocused) ? [styles.converterText, styles.cryptoCurrencyValue] : [styles.converterText, styles.normalCurrencyValue]} editable={!this.state.converter} >0.0007</TextInput>
                    <TextInput onFocus={this.onFocusChangeNormal} style={(this.state.isFocusedNormal) ? [styles.converterText, styles.cryptoCurrencyValue] : [styles.converterText, styles.normalCurrencyValue] } editable={this.state.converter}>38.65</TextInput>
                </View>

                    <Image source={require('./../../Assets/sent-tups-screen/convert.png')} style={styles.midConvertBtn} />
                <View style={[styles.rowView, styles.converterSymbolContainer]}>
                    <Text style={(this.state.isFocused) ? [styles.converterSymbols, styles.cryptoCurrencyValue] : [styles.converterSymbols, styles.normalCurrencyValue]}> btc </Text> 
                    <Text style={(this.state.isFocusedNormal) ? [styles.converterSymbols, styles.cryptoCurrencyValue] : [styles.converterSymbols, styles.normalCurrencyValue]} > usd </Text>
                </View>

                <TouchableOpacity  style={[styles.centered, styles.sentBtnContainer]}>
                    <Text style={styles.sentText}>Send</Text>
                </TouchableOpacity>


             
            </View>


        );
    }

}