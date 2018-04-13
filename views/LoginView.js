import React, { Component } from 'react';
import {Text,
        TextInput,
        Modal,
        TouchableHighlight,
        ImageBackground,
        View,
        Button,
        StyleSheet,
} from 'react-native';
import PopoverTooltip from 'react-native-popover-tooltip';



export  class LoginView extends Component{
    constructor(){
        super();
        this.state = {
            content: 'Login',

            user: '',
            password: '',
            modalVisible: false,
            isLoading: true,
            mesg: 'nada',
            spinnerVisible: false,
            inputs: {
                user: '',
                password: '',
            },
            tooltip_msg_pass: '',
            tooltip_msg_usr: '',
            focus_pass: false,
            focus_usr: false,
            spinnerMessage: '',
            overlayDialogColor: '', // color font to dialogs

            userName: '',
        }
    }

    render(){
        return(
            <ImageBackground resizeMode='cover' style={styles.container}>

                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >

                    <View style={styles.modalText}>
                        <View style={styles.modalText}>
                            <Text>{this.state.mesg}</Text>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal">
                            </Button>
                        </View>
                    </View>
                </Modal>


                <PopoverTooltip
                    ref='tooltip_usr'
                    buttonComponent={
                        <TextInput
                            style={[styles.logginInputs,
                                {
                                    height: 40,
                                    borderWidth: 0,
                                    alignSelf: 'stretch',
                                    color: 'white',

                                }]}
                            placeholderTextColor="white"
                            onChangeText={(user) => this.setState({user})}
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordTextInput.focus()}
                            /* const user = Object.assign({}, this.state.inputs, {user: username });
                             this.setState({ user });*/
                            underlineColorAndroid="white"
                            value={this.state.user}
                            placeholder={'Usuario'}
                            ref={(input) => this.userTextInput = input}
                        />

                    }

                    items={[
                        {
                            label: this.state.tooltip_msg_usr,
                            onPress: () => {
                            }
                        }

                    ]}
                    // animationType='timing'
                    // using the default timing animation
                />

                <PopoverTooltip
                    ref='tooltip_pass'
                    buttonComponent={
                        <TextInput
                            style={[styles.logginInputs,
                                {
                                    height: 40,
                                    borderWidth: 0,
                                    alignSelf: 'stretch',
                                    color: 'white',
                                }]}
                            placeholderTextColor="white"
                            onChangeText={(password) => this.setState({password})}
                            placeholder={'Contraseña'}
                            value={this.state.password}
                            secureTextEntry={true}
                            returnKeyType="send"
                            onSubmitEditing={this.Login.bind(this)}
                            ref={(input) => this.passwordTextInput = input}
                        />

                    }

                    items={[
                        {
                            label: this.state.tooltip_msg_pass,
                            onPress: () => {
                            }
                        }

                    ]}
                    // animationType='timing'
                    // using the default timing animation
                />
                <TouchableHighlight
                    style={styles.submit}
                    onPress={() => this.Login() /*this.AlternativeLogin()*/}
                    underlayColor='#fff'>
                    <Text style={[styles.submitText]}>INGRESAR</Text>
                </TouchableHighlight>

            </ImageBackground>
        );
    }

    Login(){

        if (this.validateInputs()) {

        }
    }
    closeModal() {
        this.setState({modalVisible: false});
    }


    validateInputs(): boolean {
        var ms_pass = '';
        var ms_usr = '';
        if (this.state.password == null || this.state.password == '') {
            ms_pass = 'Debe ingresar la contraseña para iniciar sesion';
            this.setState({tooltip_msg_pass: ms_pass});
            this.refs['tooltip_pass'].toggle();
            if (this.passwordTextInput != null)
                this.passwordTextInput.focus();

            return false;
        }
        else if (this.state.password.length < 6) {
            ms_pass = 'La contraseña debe ser mayor a 6 caracteres';
            this.setState({tooltip_msg_pass: ms_pass});
            this.refs['tooltip_pass'].toggle();
            if (this.passwordTextInput != null)
                this.passwordTextInput.focus();
            return false;
        }
        else if (this.state.user == null || this.state.user == '') {
            ms_usr = 'Debe ingresar el usuario para iniciar sesion';
            this.setState({tooltip_msg_usr: ms_usr});
            this.refs['tooltip_usr'].toggle();
            if (this.userTextInput != null)
                this.userTextInput.focus();
            return false;
        }

        return true;

    }



}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#0f120b',
    },
    img: {
        width: 300,
        height: 300,
        marginBottom: 10
    },
    backgroundIm: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover'
    },
    modalText: {
        paddingTop: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    logginInputs: {
        textAlign: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        /* borderColor: '#ffff000',*/

    },

    submit: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#68a0cf00',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});