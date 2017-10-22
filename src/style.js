
import {StyleSheet, Dimensions, Platform} from 'react-native';

export class DefaultTheme {

    screenPadding = 16;

    constructor(){

        this.screenWidth = Dimensions.get('window').width;
        this.screenHeight = Dimensions.get('window').height;

        this.styleSheet = StyleSheet.create({

            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingLeft: this.screenPadding,
                paddingRight: this.screenPadding,
                paddingTop: 0,
                paddingBottom: 0
            }

        });
    }
}

let theme = null;
export default class StyleFactory{

    static getTheme(){
        if(!theme){
            theme = new DefaultTheme();
        }
        return theme;
    }
}

