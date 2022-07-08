import React from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { GiftedChat } from "react-native-gifted-chat";

import Fire from "../Fire";


export default class Chatscreen extends React.Component {

    state = {
        message: []
    }

    get user(){
        return{
            _id: Fire.uid,
            name: this.navigation.state.params.name
        }
    }

    componentDidMount(){
        Fire.get(message => {
            this.setState(previous => {
                message: GiftedChat.append(previous.message, message)
            })
        })
    }

    componentWillUnmount(){
        Fire.off();
    }
    render(){

        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />

        return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>
    }
}

