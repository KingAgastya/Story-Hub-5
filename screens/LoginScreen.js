import React from 'react'
import {Text, View, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import *as firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state({
            emailId : "",
            password : ""
        })
    }

    login =async(emailId, password)=>{
        if(emailId && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(emailId, password)
                if(response){
                    this.props.navigation.navigate("Write")
                }
            }
            catch(error){
                switch(error.code){
                    case "auth/user-not-found" :
                        Alert.alert("User doesn't exist")
                    break
                    
                    case "auth/invalid-email" : 
                        Alert.alert("Incorrect email or Password")
                    break
                }
            }
        }
        else{
            Alert.alert("Please enter your email Id and password")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {{alginItems : 'center', marginTop : 20}}>
                <View style = {styles.container}>
                    <View>
                        <TextInput style = {styles.loginBox}
                        placeholder = "Email Id"
                        keyboardType = "email-address"
                        onChangeText = {(text)=>{
                            this.setState({
                                emailId : text
                            })
                        }}/>
                        <TextInput style = {styles.loginBox}
                        placeholder = "Password"
                        onChangeText = {(text)=>{
                            this.setState({
                                password : text
                            })
                        }}/>
                    </View>
                    <View>
                        <TouchableOpacity style = {{height : 30, width : 90, borderWidth : 1, backgroundColor : "#00ffff", marginTop : 20, paddingTop : 20, borderRadius : 7}}
                        onPress = {() =>{
                            this.login(this.state.emailId, this.state.password)
                        }}>
                            <Text style = {{textAlign : 'center'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,

    },
    loginBox : {
        padding : 1,
        borderWidth : 3,
        borderHeight : 10,
        width : 50,
        height : 30,
        alignItems : "center",
        marginTop : 200, 
        marginBottom : 200, 
        marginLeft : 50, 
        marginRight : 50, 
    }
})