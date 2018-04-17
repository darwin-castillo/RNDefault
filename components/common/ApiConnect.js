import {Component} from 'react'
import {
    Alert,
    AsyncStorage,
    NativeModules,
    Platform,
} from "react-native";
import {StorageConnect} from "./StorageConnect";
import {Dialogs} from "./AlertMessage";
const RNFetchssl = NativeModules.RNFetchssl;


export var apiUrl = "https://club.zippyttech.com:8080/api/";
let Response = "";
export var Bearer = "";

const platf = Platform.select({
    ios: 1,
    android: 2,
});




export const ApiConnect = {

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: Bearer
    },

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
        let Url = apiUrl + endpoint;

        return (
            this.searchKey('access_token').then((resp) => {
                let heads = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                };

                console.log('there is access_token ' + resp);
                if (resp != null && !('Authorization' in heads))
                    heads.Authorization = "Bearer " + resp;

                console.log('el body es ' + payload);

                if (platf === 1){
                    return this.FetchingData(method, endpoint, payload)
                        .then((resolve) => resolve.json())
                        .then((resolveJson) => {
                                console.log(JSON.stringify(resolveJson));
                                return resolveJson
                            }
                        );
            }
            else if(platf === 2){
                    if (method === 'post')
                        return NativeModules.RNFetchssl.post(Url,
                            payload, this.headers);
                    else if (method === 'get')
                        return NativeModules.RNFetchssl.get(Url, this.headers);
                    else if (method === 'put')
                        return NativeModules.RNFetchssl.put(Url,
                            payload, this.headers);
                    else if (method === 'delete')
                        return NativeModules.RNFetchssl.delete(Url, this.headers);

                }

                }
            )); // end RETURN
    },


    FetchingData(method: string, endpoint: string, payload: any): Promise<Response> {
let Url = apiUrl + endpoint;

            return fetch(Url, {
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


    },

}


export default ApiConnect;