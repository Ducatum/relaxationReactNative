import React, {Component} from 'react';
import StyleFactory from '../style';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

let theme = StyleFactory.getTheme();

export default class App extends Component {

    onPressText(){
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onPressText()}>
                    <Image style={{width: theme.screenWidth, height: theme.screenHeight}} source={require('../../assets/img/png/wakeup-design-portrait-1-no-status-bar.png')} />
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