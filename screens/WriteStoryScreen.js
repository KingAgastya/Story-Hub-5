import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import {Header} from 'react-native-elements'
import db from "../config"

export default class WriteStoryScreen extends React.Component(){

    constructor(){
        super()
        this.state = {
            bookAuthor : '',
            bookTitle : '',
            bookStory : ''
        }
    }

    submitStory =()=>{
        db.collection("stories").doc("Story").add({
            "Author" : this.state.bookAuthor,
            "Story" : this.state.bookStory,
            "Title" : this.state.bookTitle
        })
        var confirmMessage = "Story Submitted"
        ToastAndroid.show(confirmMessage, ToastAndroid.SHORT)

    }

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container}
                    behavior = "padding" enable>
                <View>
                    <View style = {styles.container}>
                        <Text>Write Story</Text>
                    </View>

                    <View style = {styles.inputView}>
                        <TextInput style = {styles.inputBox}
                        placeholder = "Name of story"
                        onChangeText = {(text) => {this.setState({bookTitle : text})}}
                        />

                        <TextInput style = {styles.inputBox}
                        placeholder = "Name of Author"
                        onChangeText = {(text) => {this.setState({bookAuthor : text})}}
                        />

                        <TextInput style = {styles.inputBox}
                        placeholder = "Story"
                        onChangeText = {(text) => {this.setState({bookStory : text})}}
                        />
                    </View>

                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.submitStory}
                        >
                            <Text style = {styles.submitButtonText}>Submit</Text>

                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    inputView : {
        flexDirection : "row",
        margin : 20
    },
    inputBox : {
        width : 200,
        height : 40,
        borderWidth : 1.5,
        borderRightWidth : 0,
        fontSize : 20
    },
    submitButton:{
        backgroundColor : "#00ffff",
        width : 100,
        height :50
    },
    submitButtonText:{
        color : "#CDA432",
        fontSize : 20,
        fontWeight : 'bold',
        padding : 10,
        textAlign : "center"
    }
})