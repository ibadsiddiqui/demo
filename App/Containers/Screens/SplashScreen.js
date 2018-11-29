import React from 'react'
import {
    NetInfo,
    View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { goToConfirmPINScreen } from './../../../src/navigation'

// import { goToConfirmPINScreen } from './../../Navigation/AppNavigation'

// import {Navigation} from 'react-native-navigation'
import Loader from './../../Components/Loader'

export default class SplashScreenLoader extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            online: false,
            offline: false,
            isFetching: true
        };
    }
    // Network Check
    componentWillMount() {
        NetInfo.getConnectionInfo().done(
            reach => this.setStatus(reach.type)
        );
        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
        SplashScreen.hide()

    }
    // removes listener  

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    };

    async handleFirstConnectivityChange(connectionInfo) {
        let result = Boolean;

        if (connectionInfo.type == 'wifi' || connectionInfo.type == 'cellular') {
            result = await true;

        } else if (connectionInfo.type == 'unknown')
            await ToastAndroid.showWithGravity('Unkonwn Connection', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        else
            result = await false
        return result
    }


    setStatus(reach) {

        if (reach == 'wifi' || reach == 'cellular') {

            setTimeout(() => {
                this.setState({
                    isFetching: false,
                    offline: false,
                    online: true,
                })
                
                if (this.state.online == true && this.state.offline == false)
                    goToConfirmPINScreen()

            }, 3000);
        } else {
            setTimeout(() => {
                this.setState({
                    isFetching: false,
                    offline: true,
                    online: false,
                })
            }, 3000);
        }
    }

    render() {

        // const Load = <Loader />
        return (
            <View>
                {

                    this.state.isFetching == true && this.state.offline == false && this.state.online == false
                    &&
                    <Loader />
                }
            </View>
        )

    }
}
