import React, { Component } from 'react';
import  Spinner  from 'react-native-spinkit';



export  class SpinnerComponent extends Component{
    constructor(){
        super();
        this.state = {
            content: 'New Component'
        }
    }



    render(){
        return(
            <Spinner
                style={styles.spinner}
                isVisible={this.props.visible}
                size={this.state.size} type={type}
                color={this.state.color}/>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35400',
    },

    spinner: {
        marginBottom: 50
    },

    btn: {
        marginTop: 20
    },

    text: {
        color: "white"
    }
});
