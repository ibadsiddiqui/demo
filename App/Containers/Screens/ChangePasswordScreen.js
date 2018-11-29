import React from "react";
import { Button, Card } from 'react-native-elements'

import {
    View,
    Text,
    Alert,
    TextInput,
    AsyncStorage
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'


export default class ChangePasswordScreen extends React.PureComponent {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            oldPassword:'',
            newPassword:''
        }
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    async onSubmit() {
        const token = await AsyncStorage.getItem('loginToken')

        fetch('https://tenupwalletapi.azurewebsites.net/api/userprofile/changePassword',{
            method: 'POST', // or 'PUT'
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + token

            },
            body:JSON.stringify({
                oldPassword:this.state.oldPassword,
                newPassword:this.state.newPassword
            }),
        }).then(res=>res.json()).then(response=>{
            Alert.alert('Response',JSON.stringify(response))
        });
     }
    render() {
        return (
            <View>
                <Card title='Update Password' >
                    <Text>Old Password</Text>
                    <TextInput 
                        onChangeText={(text) => { this.setState({ oldPassword: text }) }} />
                    <Text>New Password</Text>
                    <TextInput 
                        onChangeText={(text) => { this.setState({ newPassword: text }) }} /> 
                    <Button
                        backgroundColor='#03A9F4'
                        title='changePassword'
                        onPress={this.onSubmit} />
                </Card>
            </View>
        )
    }
}