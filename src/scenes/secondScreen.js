import React, {Component} from 'react';
import { Icon } from '../components/graphic/icon';
import StyleFactory from '../style';
import Sound from 'react-native-sound';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Slider,
} from 'react-native';
let theme = StyleFactory.getTheme();

export default class App extends Component {

    whoosh;
    whoosh2;
    imageBundles;
    currentPicNr = 0;

    constructor(){
        super();

        this.imageBundles = [require('../../assets/img/png/yoga-position-1.png'), require('../../assets/img/png/yoga-position-2.png'),
            require('../../assets/img/png/yoga-position-3.png'), require('../../assets/img/png/yoga-position-4.png')];

        this.state = {
            musicPlaying: false,
            music2: false,
            volume: 0.5,
            currentPic: this.imageBundles[0],
        };

        setInterval( () => {
            this.currentPicNr =  (this.currentPicNr + 1) % 4;
            this.setState({currentPic: this.imageBundles[this.currentPicNr]});
            }, 5000);

        this.whoosh = new Sound('rodrigoamarante.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + this.whoosh.getDuration() + 'number of channels: ' + this.whoosh.getNumberOfChannels());
        });

        this.whoosh2 = new Sound('juicy.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        const iconSize = 50;
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.descriptionText}>{text[this.currentPicNr]}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image style={{width: theme.screenWidth}} resizeMode='contain' source={this.state.currentPic} />
                </View>
                <View style={{flex: 1, flexDirection: 'row', width: theme.screenWidth}}>
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => this.onPlayMusic()}>
                            <Icon icon={'g-clef-custom'} size={iconSize}/>
                        </TouchableOpacity>
                        <Slider
                            style={{ width: iconSize * 2.5}}
                            thumbTintColor={'black'}
                            maximumTrackTintColor={'black'}
                            step={0.01}
                            minimumValue={0}
                            maximumValue={1}
                            value={this.state.volume}
                            onValueChange={val => this.whoosh.setVolume(val)}
                            //onSlidingComplete={ val => this.getVal(val)}
                        />
                    </View>
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => this.onPlay2()}>
                            <Icon icon={'speech-bubble'} size={iconSize}/>
                        </TouchableOpacity>
                        <Slider
                            style={{ width: iconSize * 2.5 }}
                            thumbTintColor={'black'}
                            maximumTrackTintColor={'black'}
                            step={0.01}
                            minimumValue={0}
                            maximumValue={1}
                            value={this.state.volume}
                            onValueChange={val => this.whoosh2.setVolume(val)}
                            //onSlidingComplete={ val => this.getVal(val)}
                        />
                    </View>
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
    descriptionText: {
        fontSize: 12,
    }
});

const text = ['Ligg på rygg, lägg händerna på magen å bli medveten om din andning och hur kroppen känns idag\n' +
'andas in och ut genom näsan \n' +
'tänk dig att andningen går in genom näsan följer ryggraden ner till magen\n' +
'känn rörelsen av andningen \n' +
'magen höjer sig vid inandning och sänker sig vid utandning\n' +
'var medveten om andningen under hela passet\n', 'böj höger ben\n' +
'ta tag om knät med båda händerna \n' +
'tryck knät mot bröstet \n' +
'andas några djupa andetag \n', 'vinkla knät åt höger sida \n' +
'tryck ner det mot madrassen\n' +
'å andas djupt \n', 'för tillbaka knät mot bröstet\n' +
'håll om det och tryck det ner mot bröstet \n'];