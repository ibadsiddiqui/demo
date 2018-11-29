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
    qrCodeSize: {
        width: width * 0.45,
        height: height * 0.45,
        position: 'absolute',
        marginTop: height * 0.18,
        alignSelf: 'center'
    },
    txHistory: {
        width: width * 0.07,
        height: height * 0.035,
        top: height * 0.1225,
        right:width * 0.05,
        position: 'absolute'
    },

    TupCodeContainer: {
        marginTop: height * 0.45,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center'
    },
    TupCode: {
        color: '#499FDB',
        fontWeight: 'bold',
        // marginTop: height / (3.3),
        fontSize: width * 0.04
    },
    SendFriend: {
        fontSize: width * 0.045
    }
});

export default styles;