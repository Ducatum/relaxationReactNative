import React, {Component} from 'react';
import {NavigationFactory} from './navigation';
import {
    StyleSheet,
    View,
    Dimensions,
    StatusBar
} from 'react-native';

let Navigation = NavigationFactory && NavigationFactory.getNavigation();


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <Navigation/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        opacity: 1,
    },
});
