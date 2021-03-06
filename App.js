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
import {NavigationView} from './views/NavigationView'
import {LoginView} from './views/LoginView'
import {MainView} from './views/MainView'
import {Example} from './components/common/spinnerexp'
import {StackNavigator} from 'react-navigation'

const instructions = Platform.select({
  ios: 'IOS: Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Android: Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export var RootStack = StackNavigator(
    {
        Main: {
            //  screen: MainView,
            screen: MainView,
            navigationOptions:  {
                headerLeft: null,
                header:null}
        },

        Login: {
            screen: LoginView,
            navigationOptions: {
                header: null,
                headerLeft: null,

            }
        },

       Navigation: {
            //  screen: MainView,
            screen: NavigationView,
             navigationOptions:  {
                headerLeft: null,
                 headerLeft: null,
             }
        },


       Example: {
            //  screen: MainView,
            screen: Example,
            navigationOptions:  {
                headerLeft: null,
                headerLeft: null,
            }
        },
        initialRouteName: 'NavigationView',


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


