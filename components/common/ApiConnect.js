import {Component} from 'react'
import {
    Alert, AsyncStorage,
    NativeModules, Platform,
    Promise as reject,
    Promise as resolve, ToastAndroid
} from "react-native";
import {StorageConnect} from "./StorageConnect";
import {Dialogs} from "./AlertMessage";


export var apiUrl = "https://club.zippyttech.com:8080/api/";
let Response = "";
export var Bearer = "";

const platf = Platform.select({
    ios: 1,
    android: 2,
});




export const ApiConnect = {

    getStorageByKey(key) {
        this.searchKey(key).then((resp) => {

            if (resp !== null) {
                Bearer = "Bearer " + resp;

            }

        });

    },
    searchKey(key): Promise<Response> {

        return (AsyncStorage.getItem(key).then((value) => {
            return value;
        }));
    },

    RequestApi(method: string, endpoint: string, payload: any): Promise<Response> {
        this.getStorageByKey('access_token');
       // endpoint = apiUrl + endpoint;
        method = method.toLowerCase();


        return (
            this.searchKey('access_token').then((resp) => {
                    let heads = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache',
                    };

                    console.log('there is access_token '+resp);
                    if(resp!=null && !('Authorization' in heads))
                        heads.Authorization = "Bearer " + resp;

                    console.log('el body es '+payload);
                       return  this.FetchingData(method,endpoint,payload)
                           .then((resolve)=> resolve.json())
                           .then( (resolveJson) =>{
                               console.log(JSON.stringify(resolveJson));
                               return resolveJson
                               }

                           );


                }
            )); // end RETURN
    },


    FetchingData(method: string, endpoint: string, payload: any): Promise<Response> {

        if (platf === 1){
            return fetch(apiUrl + endpoint, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    Authorization: Bearer
                },
                body: payload,

            }).then((response) => {

                console.log('response url ' + (apiUrl + endpoint))
                return response;
            }).catch((reason) => {
                console.log('There has been a problem with your fetch operation: ' + reason.message);
                // ADD THIS THROW error
                throw reason;
            })
    }
    else if(platf === 2){
            Dialogs.SimpleAlert('aja','Pruebe con fetchssl mijo');
        }
    },

}


export default ApiConnect;