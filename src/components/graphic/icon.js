'use strict';

import React, {Component} from 'react';

import GClef from './icons/gClef'
import Calculator from './icons/calculator';
import GClefCustom from './icons/gClefCustom'
import SpeachBubble from './icons/speachBubble';


export class Icon extends Component {

    render() {
        // all icon names must be lowercase
        let iconName = this.props.icon && this.props.icon.toLowerCase() ? this.props.icon.toLowerCase() : '';

        switch (iconName) {
            case 'calculator':
                return <Calculator size={this.props.size}/>;
            case 'g-clef':
                return <GClef size={this.props.size}/>;
            case 'g-clef-custom':
                return <GClefCustom size={this.props.size}/>;
            case 'speach-bubble':
                return <SpeachBubble size={this.props.size}/>;

            default:
                console.log('Could not find icon named ' + this.props.icon + ', check for typos');
                return <Calculator size={this.props.size}/>;
        }
    }
}
