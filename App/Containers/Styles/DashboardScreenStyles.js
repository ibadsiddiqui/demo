import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    sandwichIconContainer: {
        margin: width * 0.038,
        top: width * 0.05,
        position: 'absolute',
    },
    sandwichIcon: {
        width: width * 0.045,
        height: height * 0.035,
    },
    lowerNavBar:{
        height: height * 0.08,
        position: 'absolute',
        width: width,
        backgroundColor: 'rgb(20,72,130)',
        flexDirection: 'row',
        bottom: 0,
    },
    lowerNavBarIcons:{
        width: width * 0.0580,
        height: height * 0.03625,
    },
    backupIcons:{
        width: width * 0.05805,
        height: height * 0.03495,
    },
    iconsContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: width * 0.07,
        marginRight: width * 0.07,
        marginTop: width * 0.0325,
        backgroundColor: 'transparent',
    },
    btnPress: {
        backgroundColor: "transparent"
    },
    
});

export default styles;
