import React, {Component} from 'react';
import { Icon } from '../components/graphic/icon';
import StyleFactory from '../style';
import Sound from 'react-native-sound';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
let theme = StyleFactory.getTheme();

export default class App extends Component {

    whoosh;
    whoosh2;

    constructor(){
        super();
        this.state = {musicPlaying: false, music2: false};
        this.whoosh = new Sound('rodrigoamarante.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + this.whoosh.getDuration() + 'number of channels: ' + this.whoosh.getNumberOfChannels());
        });

        this.whoosh2 = new Sound('smwpowerup.wav', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + this.whoosh.getDuration() + 'number of channels: ' + this.whoosh.getNumberOfChannels());
        });
    }

    onPressText(){
        this.props.navigation.goBack();
    }

    onPlayMusic(){
        this.state.musicPlaying ? this.whoosh.pause() : this.whoosh.play();
        this.setState({musicPlaying: !this.state.musicPlaying});
    }

    onPlay2(){
        this.state.music2 ? this.whoosh2.pause() : this.whoosh2.play();
        this.setState({music2: !this.state.music2});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <Image style={{width: theme.screenWidth}} resizeMode='contain' source={require('../../assets/img/png/yoga-position.png')} />
                </View>
                <View style={{paddingLeft: 40, paddingRight: 40, flex: 1, flexDirection: 'row',
                    width: theme.screenWidth, justifyContent: 'space-between',
                    alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.onPlayMusic()}>
                        <Icon icon={'g-clef-custom'} size={80}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onPlay2()}>
                        <Icon icon={'speach-bubble'} size={80}/>
                    </TouchableOpacity>
                </View>
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