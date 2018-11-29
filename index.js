// import { Platform } from 'react-native'
// import { Navigation } from 'react-native-navigation';

// import { AppRegistry } from 'react-native';
// import App from './App/App';
// import { name as appName } from './app.json';



// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     stack: {
//       children: [{
//         component: {
//           name: 'SplashScreen',
//         }
//       }],
//   options: {
//     topBar: {
//       title: 'Top bar Title'
//     },
//     visible: false
//   }
//     }
//   })

// });
/** @format */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
    options: {
      visible: false
    }
  });
});