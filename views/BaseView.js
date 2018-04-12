import React, { Component } from 'react';
import {Text} from 'react-native';



export  class BaseView extends Component{
    constructor(){
        super();
        this.state = {
           content: 'New Component'
        }
    }

    render(){
        return(//Todo: add component here
            <Text>{this.state.content}</Text>
        );
    }



}
