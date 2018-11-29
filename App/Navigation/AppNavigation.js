import { Navigation } from 'react-native-navigation'

export const goToLoginScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'LoginScreen',
      children: [
        {
          component: {
            name: 'LoginScreen',
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
      ],
    }
  }
})

export const goToConfirmPINScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'ConfirmPINScreen',
      children: [
        {
          component: {
            name: 'ConfirmPINScreen',
            options: {
              topBar: {
                visible: false
              }
            }
          },
        }
      ],
    }
  }
})

export const goToSPlashScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'SplashScreen',
      children: [
        {
          component: {
            name: 'SplashScreen',
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
      ],
    }
  }
})
