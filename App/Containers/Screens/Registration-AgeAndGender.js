import React from 'react'
import {
    AsyncStorage,
    BackHandler,
    Image,
    Picker,
    StatusBar,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    TouchableHighlight,
    DatePickerIOS,
    View,
    AlertIOS,
    Platform

} from 'react-native'
import styles from "./../Styles/Registration-AgeAndGenderStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Components/SignUpHeader'
import DatePicker from './../../Components/Date-Picker'


export default class RegistrationAgeAndGender extends React.PureComponent {
    constructor() {
        super();
        this.changeGenderPickertState = this.changeGenderPickertState.bind(this);
        this.changeDatePickerState = this.changeDatePickerState.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setAge = this.setAge.bind(this);
        this.moveToCityAndEmail = this.moveToCityAndEmail.bind(this)

        this.state = {
            age: "Select Your age",
            gender: 'Male',
            currentDate: Date,
            genderPickerRender: false,
            datePickerRender: false,
            date: new Date()

        }
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ date: newDate })
    }
    changeDatePickerState() {
        this.setState({
            datePickerRender: true
            
        })
    }
    changeGenderPickertState() {
        this.setState({
            genderPickerRender: true
        })
    }
    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.pop());

        var currentDate = new Date();
        var m = currentDate.getMonth();
        var d = currentDate.getDay();
        var y = currentDate.getFullYear();
        currentDate = new Date(y, m, d);
        this.setState({
            currentDate: currentDate,
        })
    }

    setAge(text) {
        
            this.setState({
                age: (this.state.currentDate.getFullYear()-text.getFullYear()).toString(),
            datePickerRender:false

            });

        }
      
      
    

    setGender(text) {

        this.setState({
            gender: text,
            genderPickerRender: false
        });
    }

    async moveToCityAndEmail() {
        await AsyncStorage.setItem('gender', this.state.gender)
        await AsyncStorage.setItem('age', this.state.age)
        var InputDate = new Date(this.state.age)

        if (this.state.gender !== '' && this.state.age !== '') {


            if ((Number)(this.state.age)< 18) {
                ToastAndroid.showWithGravity('Minimum age requirement 18', ToastAndroid.SHORT, ToastAndroid.BOTTOM);

            }
            else {
                this.props.navigation.push('CityAndEmail')

            }
        } else {
            ToastAndroid.showWithGravity('Please Enter Your Age And Gender', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }

    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {/* Header */}
                <SignUpHeader />


                {/* Body */}
                <View style={styles.container}>
                    {/* <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        /> */}
                    {this.state.datePickerRender != false
                        &&
                        <DatePickerIOS
                            style={styles.datePickerStyle}
                            date={this.state.date}
                            mode="date"
                            placeholder={this.state.age}
                            // format="YYYY-MM-DD"
                            onDateChange={(text)=> this.setAge(text)}
                        // date={this.state.date}
                        // confirmBtnText="Confirm"
                        // cancelBtnText="Cancel"
                        // onDateChange={(date) => { this.setState({ age: date }); }}
                        />
                    }

                    <View style={styles.rowView}>
                        {this.state.datePickerRender == false
                            &&
                            <TouchableHighlight style={styles.ageIconStyle} onPress={this.changeDatePickerState}>
                                <View>
                                    <Image source={require('./../../Assets/signup-screen/age.png')} style={styles.ageIcon} />
                                    <Text style={styles.genderInput}>{this.state.age}</Text>
                                </View>
                            </TouchableHighlight>
                        }
                    </View>
                    <View style={styles.rowView}>
                        {this.state.genderPickerRender == false
                            &&
                            <TouchableHighlight style={styles.genderIconStyle} onPress={this.changeGenderPickertState}>
                                <View>
                                    <Image source={require('./../../Assets/signup-screen/gender.png')} style={styles.genderIcon} />
                                    <Text style={styles.genderInput}>{this.state.gender}</Text>
                                </View>
                            </TouchableHighlight>
                        }

                        {/* {this.state.pickerRender == false
                            &&
                            <Text
                                style={styles.textInput}
                                onPress={this.changePickertState}
                            ></Text>
                        } */}
                        {this.state.genderPickerRender != false
                            &&
                            <Picker

                                selectedValue={this.state.gender}
                                style={styles.pickerInput}
                                onValueChange={(itemValue) => this.setGender(itemValue)}
                                itemStyle={{ color: 'white' }}
                                itemTextStyle={{ fontSize: 18, }}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        }

                    </View>


                </View>
                {this.state.genderPickerRender == false
                    &&
                    <TouchableOpacity style={[styles.centered, styles.nextBtnContainer]} >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                }
                {/* Footer */}
            </View>
        )
    }
}
