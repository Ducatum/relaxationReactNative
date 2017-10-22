import React, {Component} from 'react';
import StyleFactory from '../style';
import VideoPlayer from 'react-native-video-player';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
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
                    <Text style={{color: 'black'}}>Tillbaka till menyn</Text>
                    <VideoPlayer
                        video={{ uri: '../../assets/video/mp4/PC211067.mp4' }}
                        videoWidth={theme.screenWidth}
                        videoHeight={theme.screenWidth}
                    />
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