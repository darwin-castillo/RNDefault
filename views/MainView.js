import React, { Component } from 'react';
import {
    Text,
     AsyncStorage,
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
            if(resp==null)
                this.setState({LoggedIn: false});
            else
                this.setState({LoggedIn: true});
        })

    setTimeout(() => {
            if(this.state.LoggedIn){
                this.props.navigation.navigate('Navigation');
            }
            else{
                this.props.navigation.navigate('Login');
            }
        }, 3000);

    }


    render(){
        return(
            <ImageBackground resizeMode='cover' style={styles.container}source={require('./../assets/images/splash_example.gif')}
            >
                <Text style={{color:'#fff'}}>Splash Screen</Text>
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
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#000',
        justifyContent:'center'
    },

}
);