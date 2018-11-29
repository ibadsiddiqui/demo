import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: height
    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        marginTop: width * 0.11,
        alignItems: 'center',
    },


    nextBtnContainer: {
        marginTop: 20,
        width: width * 0.33,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },

    nextText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },

    genderPickerStyle: {
        height: height * 0.1,
        width: width * 0.1,
        color: 'white',
        position: 'absolute',
        paddingLeft: width * 0.7,
        marginLeft: width * 0.085,
        marginTop: -(width * 0.04),
    },
    genderInput:{
        marginTop: -(width * 0.05),
        marginLeft: width * 0.0975,
        fontSize: width * 0.04,
        color: 'white',

    },
    dateInput:{
        marginTop: -(width * 0.05),
        marginLeft: width * 0.0975,
        fontSize: width * 0.04,
        color: 'white',

    },
    rowView: {
        flexDirection: 'row',
        marginTop: width * 0.04
    },


    textInput: {
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: 'transparent',
        borderWidth: 2,
        width: width * 0.7,
        paddingBottom: -10,
        marginBottom: 10,
        marginTop: -12,
        fontSize: 15,
        textAlign: 'justify',
        color: "white",
        textDecorationLine: 'none'
    },
    pickerInput: {
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: 'transparent',
        //borderWidth: 2,
        width: width * 0.7,
        paddingBottom: -10,
        marginBottom: 10,
        marginTop: -12,
        fontSize: 15,
        textAlign: 'justify',
        color: "white",
        textDecorationLine: 'none'
    },

    ageIcon: {
        width: 25,
        height: 30,
    },
    genderIcon: {

        width: 25,
        height: 30,
    },
    ageIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
        marginRight: -10,
        paddingBottom: 25,
        width: width*0.8,
        height: 40,
    },
    genderIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
         marginLeft: width*0.01,
        paddingBottom: 25,
        width: width*0.8,
        height: 40,
    },
    datePickerStyle:{
        width:width,
        backgroundColor:"white",
        color: '#0000ff'
    }

});

export default styles;
