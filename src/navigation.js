
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './scenes/homeScreen';
import SecondScreen from './scenes/secondScreen';
import WakeUpScreen from './scenes/wakeUpScreen';
import SleepScreen from './scenes/sleepScreen';

export const Navigation = StackNavigator({
    Home: { screen: HomeScreen },
    Second: { screen: SecondScreen},
    Sleep: { screen: SleepScreen },
    WakeUp: { screen: WakeUpScreen },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        swipeEnabled: true,
        lazy: true,
});

let _navigation = null;

export class NavigationFactory {
    static getNavigation() {
        if (!_navigation) {
            _navigation = Navigation;
        }
        return _navigation;
    }
}