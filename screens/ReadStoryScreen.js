import React from 'react';
import {SearchBar} from 'react-native-elements';
import React from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native';
import db from '../config'

export default class ReadStoryScreen extends React.Component(){

    constructor(){
        super()
        this.state = {
            allStories : [],
            dataSource : []
        }
    }

    retrieveStories =()=>{
        try{
            var allStories = []
            var stories = db.collection("stories").get()
            .then((querySnapshot) =>{
                querySnapshot.forEach((doc) =>{
                    allStories.push(doc.data())
                })
                this.setState({allStories})
            })
        }
        catch(error){
            console.log(error)
        }
    }

    componentDidMount(){
        this.retrieveStories()
    }

    render(){
        return(
            <View>
                <FlatList data = {this.state.allStories}
                renderItem = {({item}) => {
                <View style = {styles.itemContainer}>
                    <Text>Title : {item.title}</Text>
                    <Text>Author : {item.author}</Text>
                </View>}}
                keyExtractor = {(item, index) => index.toString()}/>
                <SearchBar
                    placeholder = "Search"
                    onChangeText = {this.updateSearch}
                    value = {search}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    inputBox : {
        width : 200,
        height : 40,
        borderWidth : 1.5,
        borderRightWidth : 0,
        fontSize : 20
    },
    itemContainer : {
        height : 80,
        width : "100%",
        borderColor : "#00ffff",
        borderWidth : 3,
        justifyContent : "center",
        alignSelf : "center"
    }
})