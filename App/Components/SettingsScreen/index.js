import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import styles from "./styles"
import {
    Text,
    View,
    ToastAndroid,
    TouchableOpacity,
    ScrollView,
    Switch
} from 'react-native'
import {Link} from 'react-router-native'
export default class SettingScreen extends React.PureComponent {
    constructor() {
        super();
    }
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Settings</Text>
                </View>
                    <View style={[styles.rowView, styles.menuText]}>
                        <Text style={[styles.notificationText, styles.textBorderStyle, styles.textSizingStyle]}>Notification off/on</Text>
                        <Switch style={styles.switchStyle} />
                    </View>
                    <Link to="ImportPrivateKey" style={[styles.menuText, styles.importPrivateKey, styles.textBorderStyle]}>
                        <Text style={[styles.textSizingStyle]}>Import Wallet Using Private Key</Text>
                    </Link>
                    <Link to="ImportMnemonic" style={[styles.menuText, styles.mnemonic, styles.textBorderStyle]}>
                        <Text style={[styles.textSizingStyle]}>Import Wallet Using Menomonic</Text>
                    </Link>

                    <TouchableOpacity style={[styles.menuText, styles.termsNConditionText, styles.textBorderStyle]}>
                        <Text style={[styles.textSizingStyle]}>Terms & Conditions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.menuText, styles.aboutUSText, styles.textBorderStyle]}>
                        <Text style={[styles.textSizingStyle]}>About us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.menuText, styles.rateUsText, styles.textBorderStyle]}>
                        <Text style={[styles.textSizingStyle]}>Rate Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.menuText, styles.signOutText, styles.textBorderStyle]} onPress={this.props.logout}>
                        <Text style={[styles.textSizingStyle]}>Sign out</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}