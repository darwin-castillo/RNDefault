import React, { Component } from 'react';
import {
    Text,
     AsyncStorage,
    View,
    ImageBackground,
    StyleSheet,
 } from 'react-native';



export  class MainView extends Component{
    constructor(){
        super();
        this.state = {
            content: 'SplashScreen',
            LoggedIn: false,
        }


        this.getAccessToken().then((resp)=>{
            // ToastAndroid.show('Token: '+resp,ToastAndroid.SHORT);

            if(resp==null)
                this.setState({LoggedIn: false});
            else
                this.setState({LoggedIn: true});
        })




    }


    render(){
        return(
            <ImageBackground resizeMode='cover' style={styles.container} /*source={require('./app_movil.png')}*/
            >

                <Text>Splash Screen</Text>
            </ImageBackground>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

}
);