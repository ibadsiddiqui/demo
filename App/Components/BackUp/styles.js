import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    sandwichIconContainer: {
        margin: width * 0.04,
        position: 'absolute',
        top: width * 0.05,
    },
    sandwichIcon: {
        height: height * 0.035,
        width: width * 0.045,
    },

    heading: {
        color: '#0c3b87',
        fontSize: height * 0.035,
        fontWeight: "bold",
        marginTop: height * 0.115,
        marginLeft: width * 0.1,
        position: 'absolute',
    },
    PINCodeHeaderContainer: {
        alignSelf: 'center',
        position: 'absolute',
        width: width * 0.7,
        top: height * 0.2,

    },
    PINCodeHeaderText: {
        color: 'black',
        fontSize: height * 0.03,
        textAlign: 'center'
    },

    rowView: {
        flexDirection: 'row',
    },

    recoveryPhrase:{
        alignSelf: 'center',
        color: "rgb(122,122,122)",
        fontSize: height * 0.023,
        position: 'absolute',
        position: 'absolute',
        top: height * 0.3,
        textAlign: 'center',
        width: width * 0.8
    },

    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    borders1:{
        width: width,
        height: 8,
        position: 'absolute',
        top: height * 0.465
    },
    borders2:{
        width: width,
        height: 8,
        position: 'absolute',
        top: height * 0.575
    },
    securityHeading: {
        alignSelf: 'center',
        color: '#0c3b87',
        fontSize: height * 0.03,
        fontWeight: "bold",
        marginTop: height * 0.4,
        marginBottom: height * 0.01,
        position: 'absolute',
    },
    securityPointView:{
        marginLeft: width * 0.1,
        top: height * 0.5,
        width: width * 0.8,
        position: 'absolute',
        position: 'absolute',
        alignSelf: 'center',

    },
    securityPoint1:{
        color: "rgb(122,122,122)",
        fontSize: height * 0.02,
    },
    securityPoint2:{
        color: "rgb(122,122,122)",
        fontSize: height * 0.02,
        marginTop: height* 0.11
    },
    btnText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '700'
    },
    BtnContainer: {
        top: height * 0.78,
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },
    reminderText:{
        fontWeight: '700',
        color: 'rgb(6,183,233)',
        fontSize: width * 0.04,
        position: 'absolute',
        top: height * 0.725,
        alignSelf: 'center'


    }
});

export default styles;