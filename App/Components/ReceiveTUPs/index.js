import React, { Component } from 'react'
import styles from "./styles"
import QRCode from 'react-native-qrcode';

import {
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native'

const { width, height } = Dimensions.get('window')


export default class ReceivedTup extends Component {
    constructor() {
        super();
        this.state = {
            publicAddress: ''
        }
    }//end of constructor

    componentWillMount() {
        fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/getPublicAddress', {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + this.props.loginToken
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    publicAddress: response
                })
            })
    }

    render() {
        return (
            <View >
                <Text style={styles.heading}>Received Tups</Text>
                <View style={[styles.qrCodeSize]}>
                    <QRCode
                        value={this.state.publicAddress}
                        size={width * 0.24 + height * 0.12}
                        bgColor='black'
                        fgColor='white'
                    />
                </View>
                <Image source={require('./../../Assets/received-tups-screen/time.png')} style={[styles.txHistory]} />

                <View>

                </View>
                <View style={styles.TupCodeContainer}>
                    <Text style={styles.TupCode}>{this.state.publicAddress}</Text>
                    <Text style={styles.SendFriend}>Have a Friend scan to send you tups</Text>
                </View>
            </View>
        );
    }
}