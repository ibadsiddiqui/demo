import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    backIconContainer: {
        margin: width * 0.038,
        top: width * 0.05,
        position: 'absolute',
    },
    backIcon: {
        width: width * 0.045,
        height: height * 0.035,
    },
    container: {
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    heading: {
        marginTop: height * 0.115,
        marginLeft: width * 0.1,
        color: '#0c3b87',
        fontSize: height * 0.035,
        fontWeight: "bold",
        position: 'absolute'
    },

    profileImage: {
        width: width * 0.4,
        height: height * 0.2,
        position: 'absolute',
        marginTop: height * 0.2,
        alignSelf: 'center'
    },
    usernameText: {
        top: height * 0.4,
        alignSelf: 'center',
        position: 'absolute',
        fontSize: height * 0.03,
        fontWeight: 'bold'
    },
    lowerBorder: {
        width: width * 0.8,
        height: 10,
        // position: 'absolute',
        alignSelf: 'center',
        top: height * 0.01,


    },

    userInfo: {
        position: 'absolute',
        marginLeft: width * 0.1,

    },
    greyColor: {
        color: 'rgb(123,123,123)',
        fontSize: height * 0.018,
    },

    userEmailPlaceholder: {
        top: height * 0.5
    },

    userCityPlaceholder: {
        top: height * 0.525
    },
    userCityText: {
        top: height * 0.005,
        fontSize: height * 0.0225
    },
    userPhoneNumberPlaceholder: {
        top: height * 0.55
    },
    userText: {
        top: height * 0.005,
        fontSize: height * 0.0225,
        borderColor: 'transparent',
        borderWidth: 0,

    },

    locationPin: {
        width: width * 0.05,
        height: height * 0.03,
        // position: 'absolute',
        //  right: width * 0.0005,
        position: 'absolute',
        left: width * 0.6,
        top: height * 0.025
    },
    saveText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },
    saveBtnContainer: {
        position: 'absolute',
        top: height * 0.9,
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowView: {
        flexDirection: 'row',
    }
});

export default styles;