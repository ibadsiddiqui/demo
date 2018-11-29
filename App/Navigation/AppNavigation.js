// import { StackNavigator } from 'react-navigation'
// import NoWifiScreen from './../Containers/Screens/NoWifiScreen';
// import SplashScreenLoader from './../Containers/Screens/SplashScreen';

// import ConfirmPINScreen from '../Containers/Screens/ConfirmPINScreen';

// import LoginScreen from './../Containers/Screens/LoginScreen'
// import RegistrationScreen from './../Containers/Screens/RegisterationScreen'
// import RegistrationAgeAndGender from './../Containers/Screens/Registration-AgeAndGender';
// import RegistrationCityAndEmail from './../Containers/Screens/Registration-CityAndEmail';
// import RegistrationPasswordAndPhoneNumber from './../Containers/Screens/Registration-PasswordAndPhoneNumber'
// import ForgetPasswordScreen from './../Containers/Screens/ForgetPasswordScreen'

// import ProfileScreen from './../Containers/Screens/ProfileScreen'
// import DashboardScreen from './../Containers/Screens/DashboardScreen'



// // Manifest of possible screens
// const PrimaryNav = StackNavigator({
//   SplashScreen: { screen: SplashScreenLoader },
//   NoWifiScreen: { screen: NoWifiScreen },

//   ConfirmPINScreen: {
//     screen: ConfirmPINScreen,
//     headerLeft: null
//   },

//   LoginScreen: { screen: LoginScreen },
//   ForgetPasswordScreen: { screen: ForgetPasswordScreen },
//   RegistrationScreen: { screen: RegistrationScreen },
//   AgeAndGender: { screen: RegistrationAgeAndGender },
//   CityAndEmail: { screen: RegistrationCityAndEmail },
//   PasswordAndPhoneNumber: { screen: RegistrationPasswordAndPhoneNumber },

//   // dashboard and profile screen
//   DashboardScreen: { screen: DashboardScreen },
//   ProfileScreen: { screen: ProfileScreen },

//   // ChangePassswordScreen: { screen: ChangePasswordScreen }
// }, {
//     // Default config for all screens
//     headerMode: 'none',
//     initialRouteName: 'SplashScreen',
//     navigationOptions: {
//       // options for navigation will come here
//     }
//   }
// );


// export default PrimaryNav
import { Navigation } from 'react-native-navigation'

export const goToConfirmPINScreen = (componentId) => Navigation.push(componentId, {
  component: {
    name: 'ConfirmPINScreen',
  }
});