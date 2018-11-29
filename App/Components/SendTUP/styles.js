import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    sandwichIconContainer: {
        margin: width * 0.038,
        top: width * 0.05,
        position: 'absolute',
    },
    
    sandwichIcon: {
        width: width * 0.045,
        height: height * 0.035,
    },
    backIcon: {
        width: width * 0.045,
        height: height * 0.035,
        margin: width * 0.038,
        top: width * 0.05,
        position: 'absolute'
    },
    backgroundImage: {
        backgroundColor: 'white',
        top: 0, left: 0, bottom: 0, right: 0

    },

    rowView: {
        flexDirection: 'row',

    },
    bottomBorder: {
        borderBottomColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 1,
        width: width / 1.7,
    },
    sentBtnContainer: {
        marginTop: height * 0.6,
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },
    sentText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    converterDigit: {
        alignSelf: 'center',
        marginTop: height * 0.402,
       position: 'absolute',
    },
    currencyValue: {
        justifyContent: 'center',
        paddingTop: 0.1,

    },
    cryptoCurrencyValue: {
        color: '#08bfdb',
        fontWeight: 'bold',
    },
    cryptoCurrencyText: {
        color: '#08bfdb',
        fontSize: 20,
        paddingRight: width * 0.24,
    },
    normalCurrencyValue: {
        color: 'rgb(115, 115, 115)',
        fontWeight: 'bold',
    },
    normalCurrencyText: {

        fontSize: 20,
        color: 'rgb(115, 115, 115)'
        //   paddingRight: width * 0.24,
    },
    converterText: {
        marginLeft: width * 0.065,
        marginRight: width * 0.065,
        fontSize: height * 0.03,
        borderBottomColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 2,
        // padding: 0
        width: width * 0.25,
        textAlign: 'center'

    },
    centerImage: {
        marginLeft: width / 2,
        marginTop: 2,
        width: 50,
        height: 50,
    },
    subHeadTo: {
        marginTop: height * 0.23,
        marginLeft: width * 0.1,
        fontSize: height * 0.028,
        fontWeight: 'bold',
        position: 'absolute',
        color: '#0c3b87',
    },
    subHeadQRCode: {
        marginTop: height * 0.2,
        marginLeft: width * 0.75,
        position: 'absolute',
    },
    subHeadQRCodeSize: {
        width: 80,
        height: 80,

    },

    heading: {
        marginTop: height * 0.115,
        marginLeft: width * 0.1,
        color: '#0c3b87',
        fontSize: height * 0.035,
        fontWeight: "bold",
        position: 'absolute'
    },
    walletCode: {
        marginTop: height * 0.28,
        marginLeft: width * 0.1,
        fontSize: height * 0.023,
        position: 'absolute',
        fontWeight: 'bold',
        color: 'rgb(115, 115, 115)	',
    },
    midConvertBtn:{
        position: 'relative',
        width: width * 0.1,
        height: height * 0.035,
        top: height * 0.43,
     
        alignSelf: 'center',
        zIndex:-1

    },
    converterBtn: {
        width: width * 0.1,
  
        alignSelf: 'center'
    },
    converterSymbolContainer: {
        alignSelf: 'center',
        marginTop: height * 0.494,
        position: 'absolute',
    },
    converterSymbols: {
        marginLeft: width * 0.065,
        marginRight: width * 0.065,
        fontSize: height * 0.03,
        width: width * 0.25,
        textAlign: 'center'

    },
});

export default styles;