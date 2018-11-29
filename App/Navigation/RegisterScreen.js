import { Navigation } from 'react-native-navigation';

import NoWifiScreen from './../App/Containers/Screens/NoWifiScreen';
import SplashScreenLoader from './../App/Containers/Screens/SplashScreen';

import ConfirmPINScreen from './../App/Containers/Screens/ConfirmPINScreen';

import LoginScreen from './../App/Containers/Screens/LoginScreen'
import RegistrationScreen from './../App/Containers/Screens/RegisterationScreen'
import RegistrationAgeAndGender from './../App/Containers/Screens/Registration-AgeAndGender';
import RegistrationCityAndEmail from './../App/Containers/Screens/Registration-CityAndEmail';
import RegistrationPasswordAndPhoneNumber from './../App/Containers/Screens/Registration-PasswordAndPhoneNumber'
import ForgetPasswordScreen from './../App/Containers/Screens/ForgetPasswordScreen'

import ProfileScreen from './../App/Containers/Screens/ProfileScreen'
import DashboardScreen from './../App/Containers/Screens/DashboardScreen'

import { YellowBox } from 'react-native'





export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
  Navigation.registerComponent('Screen3', () => require('./Screen3').default);

  Navigation.registerComponent('SplashScreen', () => SplashScreenLoader);
  Navigation.registerComponent('ConfirmPINScreen', () => ConfirmPINScreen); //done

  Navigation.registerComponent('LoginScreen', () => LoginScreen); //done
  Navigation.registerComponent('RegistrationScreen', () => RegistrationScreen); //done
  Navigation.registerComponent('AgeAndGender', () => RegistrationAgeAndGender); //done
  Navigation.registerComponent('CityAndEmail', () => RegistrationCityAndEmail);//done
  Navigation.registerComponent('PasswordAndPhoneNumber', () => RegistrationPasswordAndPhoneNumber); //done

  Navigation.registerComponent('ForgetPassword', () => ForgetPasswordScreen);// done


  Navigation.registerComponent('DashboardScreen', DashboardScreen);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);


  YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup since it overrides `init` but doesn\'t implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.',
    'Could not find image',
    'RCTBridge required dispatch_sync',
    'Required dispatch_sync to load constants',
  ]);
}