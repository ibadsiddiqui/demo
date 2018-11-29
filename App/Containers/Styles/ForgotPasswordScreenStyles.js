import {StyleSheet,Dimensions} from 'react-native'

const {width,height}= Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: height
    },
    headingText: {
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: 'normal',
        marginLeft: width * 0.02,
        marginTop: height * 0.01
    },
    headingContainer: {

        borderLeftColor: 'rgb(23, 191, 228)',
        borderLeftWidth: width * 0.006,
        borderRadius: 1,
        height: height * 0.06,
        marginLeft: width * 0.13,
        marginTop: height * 0.13,
    },
    subtitle: {
        marginLeft: width * 0.13,
        marginTop: height * 0.025,
    },

    subtitleText: {
        color: 'rgb(128,165,218)',
        fontSize: width * 0.035
    },
    container: {
        marginTop: width * 0.2,
        alignItems: 'center',

    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        marginTop: height*0.1,
        width: width * 0.33,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 8
    },
    rowView: {
        flexDirection: 'row',
    },
    forgetText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },
    IconStyle:{
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
        marginRight: -10,
        paddingBottom: 25,
        width: 45,
        height: 40,
    },
    textInput: {
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: 'transparent',
        borderWidth: 2,
        width: width * 0.7,
        paddingBottom: -10,
        marginBottom: 10,
        marginTop: -12,
        fontSize: height*0.02,
        textAlign: 'justify',
        color: "white",
        textDecorationLine: 'none'
    },
}
);

export default styles;