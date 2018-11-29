import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    Alert
} from 'react-native'
import styles from './styles'

import QRCode from 'react-native-qrcode';

const { width, height } = Dimensions.get('window')


export default class TUPInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null
        }
    }

    componentWillMount() {
        fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/Details', {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + this.props.tokenForBalance,
            }
        })
        .then( res => res.json())
        .then( response =>
            this.setState({
                balance: parseInt(response.tup).toFixed(8)
            })
        )
    }

    render() {
        return (
            <View>
                <View style={[styles.Container, styles.MarginTopScreenTupAddress]}>
                    <Text style={styles.TupCode}>{this.props.publicAddress}</Text>
                </View>
                <View style={[styles.qrCodeSize]}>
                    <QRCode
                        value={this.props.publicAddress}
                        size={width * 0.1 + height * 0.1}
                        bgColor='black'
                        fgColor='white'
                    />
                </View>
                <View style={styles.rowView}>
                    <View style={[styles.tupInfoContainer, styles.TupInfoMargin]}>
                        <Text style={styles.tupInfoTUPstyle}>TUPs</Text>
                        <Text style={styles.tupInfoTupCurrency}>{this.state.balance}</Text>
                        <Text style={styles.tupInfoUSDCurrency}>$0</Text>
                    </View>
                </View>
            </View>

        )
    }
}
