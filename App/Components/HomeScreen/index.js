import React from 'react'
import {
    View,
    Image,
    Dimensions,
    Text,
    ActivityIndicator,
    Alert,
} from 'react-native'
// styles
import styles from './styles'
const { height, width } = Dimensions.get('window')


// components

import TUPInfo from './components/TUPInfo';
import Transactions from './components/Transactions'

export default class HomeScreen extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            dataFetched: false,
            fetchingUserData: true,
            address: null
        }

    }

    // componentWillMount() {
    //     fetch('https://tenupwalletapi.azurewebsites.net/api/Wallet/getPublicAddress', {
    //         method: "GET",
    //         headers: {
    //             'Authorization': "Bearer " + this.props.loginToken
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(response => {
    //             this.setState({
    //                 fetchingUserData: false,
    //                 dataFetched: true,
    //                 publicAddress: response
    //             })
    //         })
    // }

    render() {
        return (

            <View>

                {
                    this.state.fetchingUserData === true && this.state.dataFetched === false
                    &&
                    <View style={{ height: height,/* backgroundColor: 'rgba(0,0,0,0.1)'*/ width: width, zIndex: 1, position: 'absolute' }}>
                        <ActivityIndicator size="large" color="#0c3b87" style={{ alignSelf: 'center', marginTop: height * 0.47, }} />
                    </View>

                }
                {
                    this.state.fetchingUserData === false && this.state.dataFetched
                    &&
                    <View>
                        <Text style={styles.heading}>Home</Text>

                        <View style={[styles.Container, styles.MarginTopScreenTupWalletTex]}>
                            <Text style={styles.walletAddress}>Your current tup wallet address</Text>
                        </View>

                        {/* <TUPInfo publicAddress={this.state.publicAddress} tokenForBalance={this.props.loginToken} /> */}
                        <Text style={styles.tableHeading}>Transaction log</Text>

                        {/* <Transactions /> */}
                    </View>
                }
            </View>

        )
    }
}

