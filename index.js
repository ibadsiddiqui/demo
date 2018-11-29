import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation';

import { AppRegistry } from 'react-native';
import App from './App/App';
import { name as appName } from './app.json';


import NoWifiScreen from './App/Containers/Screens/NoWifiScreen';
import SplashScreenLoader from './App/Containers/Screens/SplashScreen';

import ConfirmPINScreen from './App/Containers/Screens/ConfirmPINScreen';

import LoginScreen from './App/Containers/Screens/LoginScreen'
import RegistrationScreen from './App/Containers/Screens/RegisterationScreen'
import RegistrationAgeAndGender from './App/Containers/Screens/Registration-AgeAndGender';
import RegistrationCityAndEmail from './App/Containers/Screens/Registration-CityAndEmail';
import RegistrationPasswordAndPhoneNumber from './App/Containers/Screens/Registration-PasswordAndPhoneNumber'
import ForgetPasswordScreen from './App/Containers/Screens/ForgetPasswordScreen'

import ProfileScreen from './App/Containers/Screens/ProfileScreen'
import DashboardScreen from './App/Containers/Screens/DashboardScreen'

Navigation.registerComponent('SplashScreen', () => SplashScreenLoader);
Navigation.registerComponent('ConfirmPINScreen', () => ConfirmPINScreen); //done

Navigation.registerComponent('Home', () => LoginScreen); //done
Navigation.registerComponent('RegistrationScreen', () => RegistrationScreen); //done
Navigation.registerComponent('AgeAndGender', () => RegistrationAgeAndGender); //done
Navigation.registerComponent('CityAndEmail', () => RegistrationCityAndEmail);//done
Navigation.registerComponent('PasswordAndPhoneNumber', () => RegistrationPasswordAndPhoneNumber); //done

Navigation.registerComponent('ForgetPassword', () => ForgetPasswordScreen);// done

Navigation.registerComponent('Dashboard', () => DashboardScreen);



// Navigation.registerComponent('DashboardScreen', DashboardScreen);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'ConfirmPINScreen',
            }
          },
          {
            component: {
              name: 'SplashScreen',
            }
          },

        ]
      }
    }
  })
})
/** @format */

