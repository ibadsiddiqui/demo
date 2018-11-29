import React from 'react'
import {
    ActivityIndicator,
    Alert,
    AsyncStorage,
    BackHandler,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'
// styles
const { width, height } = Dimensions.get('window')

// Route
import { Route, Link, NativeRouter, Switch } from "react-router-native";

// Styles
import styles from './../Styles/DashboardScreenStyles'
import stylesDrawer from './../Styles/DrawerStyles'

//  Component
import HomeScreen from '../../Components/HomeScreen';
import SendTup from '../../Components/SendTUP';
import ReceivedTup from '../../Components/ReceiveTUPs';
import BackUp from '../../Components/BackUp';
import SettingScreen from '../../Components/SettingsScreen';
import ImportPrivateKey from './ImportPrivateKeyScreen';
import ImportMnemonic from './ImportMnemonicScreen'
export default class DashboardScreen extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            routeTo: '/',
            pressStatus: false,
            userToken: null,
            fetchingUserData: null,
            dataFetched: null,
            userCity: '',
            userFullName: '',
        };
        this.openDrawer = this.openDrawer.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this._renderDrawerComponent = this._renderDrawerComponent.bind(this)
        this.logUserOut = this.logUserOut.bind(this)
    }

    componentWillMount() {
        // BackHandler.addEventListener('hardwareBackPress', () => { return true });
        // SplashScreen.hide()
    }

     componentDidMount() {
        this.setState({
            fetchingUserData: false,
            dataFetched: true
        })
        // await this._getToken();

        // fetch('https://tenupwalletapi.azurewebsites.net/api/userprofile/getProfile', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': "Bearer " + this.state.userToken
        //     }
        // })
        //     .then(res => res.json())
        //     .then(response => {
        //         this.setState({
        //             fetchingUserData: false,
        //             dataFetched: true,
        //             userFullName: response.fullname,
        //             userCity: response.city,
        //         })
        //     })
        //     .catch(error => Alert.alert('Error:', JSON.stringify(error)));
    }

    routeTo(place) {
        this.setState({
            routeTo: place,
        })
    }

    async logUserOut() {
        await this._destroySession();
        this.props.navigation.navigate('LoginScreen')
    }
    importKey(){
        this.props.navigation.navigate('ImportPrivateKeyScreen')
    }

    async _getToken() {
        const loginToken = await AsyncStorage.getItem('loginToken')
        if (loginToken !== null)
            this.setState({
                userToken: loginToken
            })
        else {
            this.props.navigation.navigate('LoginScreen')
        }
    }

    async _destroySession() {
        await AsyncStorage.setItem('loginToken', "");
    }


    openDrawer() {
        this.drawer.openDrawer();
    }

    closeMenu() {
        this.drawer.closeDrawer();
    }

    _renderDrawerComponent() {
        return (
            <View style={stylesDrawer.container}>
                <View style={stylesDrawer.upperInfo}>

                    <View style={stylesDrawer.rowView}>
                        <Image source={require('./../../Assets/sidemenu-assets/image.png')} style={stylesDrawer.profileImage} />
                        <Text style={stylesDrawer.userName}>{this.state.userFullName}</Text>
                    </View>

                    <Image source={require('./../../Assets/sidemenu-assets/location.png')} style={stylesDrawer.locationIcon} />

                    <Text style={stylesDrawer.userLocation}>{this.state.userCity}</Text>

                    <TouchableOpacity>
                        <Link to="/" onPress={() => {
                            this.routeTo('/');
                            this.closeMenu()
                        }}>
                            <View style={[stylesDrawer.rowView, stylesDrawer.listStyling]}>
                                <Image source={require(`./../../Assets/sidemenu-assets/home.png`)} style={stylesDrawer.listIcons} />
                                <Text style={[stylesDrawer.colorWhite, stylesDrawer.listText]}>Home</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        this.closeMenu();
                        this.props.navigation.navigate('ProfileScreen')
                    }}>
                        <View style={[stylesDrawer.rowView, stylesDrawer.listStyling]}>
                            <Image source={require(`./../../Assets/sidemenu-assets/profile.png`)} style={stylesDrawer.listIcons} />
                            <Text style={[stylesDrawer.colorWhite, stylesDrawer.listText]}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Link to="/Send" onPress={() => {
                            this.routeTo('/Send');
                            this.closeMenu()
                        }}>
                            <View style={[stylesDrawer.rowView, stylesDrawer.listStyling]} >
                                <Image source={require(`./../../Assets/sidemenu-assets/send.png`)} style={stylesDrawer.listIcons} />
                                <Text style={[stylesDrawer.colorWhite, stylesDrawer.listText]}>Send</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Link to="/Receive" onPress={() => {
                            this.routeTo('/Receive');
                            this.closeMenu()
                        }}>
                            <View style={[stylesDrawer.rowView, stylesDrawer.listStyling]}>
                                <Image source={require(`./../../Assets/sidemenu-assets/received.png`)} style={stylesDrawer.listIcons} />
                                <Text style={[stylesDrawer.colorWhite, stylesDrawer.listText]}>Received</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Link to="/Transactions" onPress={() => {
                            this.routeTo('/Transactions');
                            this.closeMenu()
                        }}>
                            <View style={[stylesDrawer.rowView, stylesDrawer.listStyling]}>
                                <Image source={require(`./../../Assets/sidemenu-assets/transaction.png`)} style={stylesDrawer.listIcons} />
                                <Text style={[stylesDrawer.colorWhite, stylesDrawer.listText]}>Transaction History</Text>
                            </View>
                        </Link>
                    </TouchableOpacity>

                </View>
            </View>
        )

    }


    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar translucent={true} backgroundColor="transparent" /> */}

                {
                    // this.state.fetchingUserData === true && this.state.dataFetched === false
                    // &&
                    // <View style={{ height: height,/* backgroundColor: 'rgba(0,0,0,0.1)'*/ width: width, zIndex: 1, position: 'absolute' }}>
                    //     <ActivityIndicator size="large" color="#0c3b87" style={{ alignSelf: 'center', marginTop: height * 0.47, }} />
                    // </View>

                }


                    {
                        /* // <DrawerLayoutAndroid
                    //     ref={(_drawer) => this.drawer = _drawer}
                    //     drawerWidth={width}
                    //     drawerPosition={DrawerLayoutAndroid.positions.Left}
                    //     renderNavigationView={this._renderDrawerComponent}>
                    //     <TouchableOpacity onPress={this.openDrawer} style={styles.sandwichIconContainer}>
                    //         <Image source={require('./../../Assets/home-screen/sidemenu.png')} style={styles.sandwichIcon} />
                    //     </TouchableOpacity> */}
                        <NativeRouter>
                            <Switch>

                            <Route exact path='/' component={() => <HomeScreen loginToken={this.state.userToken} />} />
                            <Route path='/Send' component={() => <SendTup />} />
                            <Route path='/Receive' component={() => <ReceivedTup loginToken={this.state.userToken} />} />
                            <Route path='/Backup' component={() => <BackUp loginToken={this.state.userToken} />} />
                            <Route path='/Transactions' component={() => <ReceivedTup />} />
                            <Route path='/Settings' component={() => <SettingScreen logout={this.logUserOut} />} />
                            <Route path='/ImportPrivateKey' component={() => <ImportPrivateKey logout={this.logUserOut}/>} />
                            <Route path='/ImportMnemonic' component={() => <ImportMnemonic logout={this.logUserOut} />} />
                            </Switch>

                        </NativeRouter>




                        <View style={styles.lowerNavBar}>

                            <Link to="/Send" onPress={() => this.routeTo('/Send')}>
                                <View style={styles.iconsContainer}>
                                    {
                                        (
                                            this.state.routeTo === '/Send'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/sent_unselect.png')} style={styles.lowerNavBarIcons} />
                                        )
                                        ||
                                        (
                                            this.state.routeTo !== '/Send'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/sent_select.png')} style={styles.lowerNavBarIcons} />
                                        )

                                    }

                                </View>
                            </Link>

                            <Link to="Receive" onPress={() => this.routeTo('/Receive')}>
                                <View style={styles.iconsContainer}>
                                    {
                                        (
                                            this.state.routeTo === '/Receive'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/received_unselect.png')} style={styles.lowerNavBarIcons} />)
                                        ||
                                        (
                                            this.state.routeTo !== '/Receive'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/received_select.png')} style={styles.lowerNavBarIcons} />)

                                    }
                                </View>
                            </Link>

                            <Link to="Transaction" onPress={() => this.routeTo('/Transactions')}>
                                <View style={styles.iconsContainer}>
                                    {
                                        (
                                            this.state.routeTo === '/Transactions'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/transaction_unselect.png')} style={styles.lowerNavBarIcons} />)
                                        ||
                                        (
                                            this.state.routeTo !== '/Transactions'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/transaction_select.png')} style={styles.lowerNavBarIcons} />)

                                    }
                                </View>
                            </Link>

                            <Link to="Backup" onPress={() => this.routeTo('/Backup')}>

                                <View style={styles.iconsContainer}>
                                    {
                                        (
                                            this.state.routeTo === '/Backup'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/backup_unselect.png')} style={styles.lowerNavBarIcons} />)
                                        ||
                                        (
                                            this.state.routeTo !== '/Backup'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/backup_select.png')} style={styles.lowerNavBarIcons} />)

                                    }
                                </View>
                            </Link>

                            <Link to="Settings" onPress={() => this.routeTo('/Setting')}>

                                <View style={styles.iconsContainer}>
                                    {
                                        (
                                            this.state.routeTo === '/Setting'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/setting_unselect.png')} style={styles.lowerNavBarIcons} />)
                                        ||
                                        (
                                            this.state.routeTo !== '/Setting'
                                            &&
                                            <Image source={require('./../../Assets/Bottam_tab-assets/setting_select.png')} style={styles.lowerNavBarIcons} />)

                                    }
                                </View>
                            </Link>
                        </View>
                    {/* // </DrawerLayoutAndroid> */}
            </View>

        )
    }
}
