import React, { Component } from 'react';
import {Text} from 'react-native';



export  class LoginView extends Component{
    constructor(){
        super();
        this.state = {
            content: 'Login'
        }
    }

    render(){
        return(//Todo: add component here
            <Text>{this.state.content}</Text>
        );
    }



}