import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class App extends Component {

    onPressText(){
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onPressText()}>
                    <Text style={{color: 'black'}}>SecondScreen...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});