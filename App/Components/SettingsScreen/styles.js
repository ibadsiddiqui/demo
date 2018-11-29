import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    heading: {
        marginTop: height * 0.115,
        marginLeft: width * 0.1,
        color: '#0c3b87',
        fontSize: height * 0.035,
        fontWeight: "bold",
        position: 'absolute'
    },

    subContainer: {
        width: width
    },
    textBorderStyle: {
        borderBottomColor: 'rgb(223,223,223)',
        borderWidth: 2.5,
        borderColor: 'transparent',
        position: 'absolute',
        width: width,
    },
    textSizingStyle: {
        paddingLeft: width * 0.1,
        paddingBottom: width * 0.04,

        fontSize: height * 0.0229,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    notificationText: {
        top: height * 0.215,
    },
    importPrivateKey:{
        top: height * 0.3015,

    },
mnemonic:{
  //  top: height * 0.3015,
    top: height * 0.3875,

},
    termsNConditionText:{
     
        top: height * 0.4735,

    },
    aboutUSText:{
   
        top: height * 0.5595,

    },
    rateUsText:{
       // top: height * 0.4735,
        top: height * 0.6455,

    },
    signOutText:{
        top: height * 0.7315,

    },
    menuText: {
        marginTop: height * 0.01,
    },
    lowerBorder: {
        width: width * 10,
        height: 5,
        alignSelf: 'center',
        top: height * 0.115,
        position: 'relative'
    },
    rowView: {
        flexDirection: 'row'
    },
    switchStyle: {
        top: height * 0.2075,
        right: width * 0.01,
        position: 'absolute',
    },
    termsNCondition: {
        marginTop: height * 0.15,
    }

});
export default styles;