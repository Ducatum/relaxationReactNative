import React, {Component} from 'react';
import StyleFactory from '../style';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

let theme = StyleFactory.getTheme();

export default class App extends Component {

    onPressText(){
        this.props.navigation.navigate("Second");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', flex: 1}}>
                    <Image style={{width: theme.screenWidth, height: theme.screenHeight, opacity: 0.3}}
                           source={require("../../assets/img/png/frontPage.png")} resizeMode={"cover"}/>
                </View>
                <View style={styles.menuItemView}>
                    <TouchableOpacity onPress={() => this.onPressText()}>
                        <Text style={{color: 'black'}}>Introduktion</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItemView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("WakeUp")}>
                        <Text style={{color: 'black'}}>Program vakna</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItemView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Sleep")}>
                        <Text style={{color: 'black'}}>Program somna</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItemView}>
                    <TouchableOpacity onPress={() => this.onPressText()}>
                        <Text style={{color: 'black'}}>Inställningar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItemView}>
                    <TouchableOpacity onPress={() => this.onPressText()}>
                        <Text style={{color: 'black'}}>Om oss</Text>
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
        backgroundColor: 'black',
    },
    menuItemView: {
        margin: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 35,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 9,
        shadowRadius: 5,
        shadowColor: 'rgba(77, 128, 248, 0.2)',
    }
});