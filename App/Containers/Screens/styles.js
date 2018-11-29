import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    heading: {
        marginTop: height * 0.115,
        marginLeft: width * 0.1,
        color: '#0c3b87',
        fontSize: height * 0.03,
        fontWeight: "bold",
        position: 'absolute'
    },

    textBorderStyle: {
        // borderBottomColor: 'rgb(223,223,223)',
        // borderWidth: 2.5,
        borderColor: 'transparent',
        position: 'absolute',
        top: height * 0.25,
        left: width * 0.05,
        width: width * 0.8,
    },
    textSizingStyle: {
        paddingLeft: width * 0.1,
        // paddingBottom: width * 0.04,
        fontSize: height * 0.0229,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    lowerBorder: {
        width: width * 0.7,
        height: 10,
        // position: 'absolute',
        alignSelf: 'center',
        top: height * 0.295,
    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    importBtnContainer: {
        position: 'absolute',
        top: height * 0.325,
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },
    importText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },
});
export default styles;