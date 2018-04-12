/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  AsyncStorage,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'IOS: Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Android: Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export var RootStack = StackNavigator(
    {
        Login: {
            screen: LoginView,
            navigationOptions: {
                header: null,

            }
        },
        Main: {
            //  screen: MainView,
            screen: MainView,
            /*navigationOptions:  {
                headerLeft: null }*/
        },

        initialRouteName: 'MainView',


    },

    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
                //  easing: Easing.out(Easing.poly(4)),
                //  timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }

);


export var OptionalStack = StackNavigator(
    {

        Main: {
            //  screen: MainView,
            screen: MainView,
            /*navigationOptions:  {
                headerLeft: null }*/
            navigationOptions: {
                header: null,

            }
        },
        Login: {
            screen: LoginView,
            navigationOptions: {
                header: null,

            }
        },

        BuyProduct: {
            //  screen: MainView,
            screen: BuyProductView,
            /*navigationOptions:  {
                headerLeft: null }*/
        },
        BarcodeScan: {
            //  screen: MainView,
            screen: BarcodeScannerApp,
            /*navigationOptions:  {
                headerLeft: null }*/
        },
        initialRouteName: 'Main',


    },

    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
                //  easing: Easing.out(Easing.poly(4)),
                //  timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }

);
export default class App extends Component<Props> {
  constructor() {
      super();
      this.state = {

      }

  }
  render() {
              return (<RootStack/>);
  }
}


