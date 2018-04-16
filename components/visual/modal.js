import React, { Component } from 'react';
import {Text,
        Modal,
        Button,
        View} from 'react-native';



export  class ModalComponent extends Component{
    constructor(){
        super();
        this.state = {
            content: 'New Component'
        }
    }

    render(){
        return(

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

        );
    }



}
