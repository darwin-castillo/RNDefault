import React, { Component } from 'react';
import {
    Text,
     AsyncStorage,
 } from 'react-native';



export  class BaseView extends Component{
    constructor(){
        super();
        this.state = {
            content: 'SplashScreen',
            LoggedIn: false,
        }

        setTimeout(
        this.getAccessToken().then((resp)=>{
            // ToastAndroid.show('Token: '+resp,ToastAndroid.SHORT);

            if(resp==null)
                this.setState({LoggedIn: false});
            else
                this.setState({LoggedIn: true});
        })

    ,2000);


    }


    render(){
        return(
            <Text>{this.state.content}</Text>
        );
    }

    /*** Other Methods ** /
     *
     */

        getAccessToken():Promise<Response>{
        return( AsyncStorage.getItem('access_token').then((value)=>{
            return value;
        }))

    }


}