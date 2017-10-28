'use strict';

import React, {Component} from 'react';
import Svg, {
    G,
    Rect
} from 'react-native-svg';

export default class Icon extends Component {
    render() {
        let width = this.props.size ? this.props.size * 17 / 100 : 17;
        let height = this.props.size ? this.props.size * 23 / 100 : 23;
        let viewBox = this.props.size ? '0 0 ' + width + ' ' + height : '0 0 17 23';

        let scale = this.props.size ? this.props.size / 100 : 1;

        return (
            <Svg width={width} height={height} viewBox={viewBox}>
                <G fill="none" fill-rule="evenodd" transform={{scale: scale, x: .5 * scale, y: .5 * scale}}>
                    <Rect width="15" height="19.981" y=".5" stroke="#FFF" stroke-width="1.1" rx="2.2"/>
                    <G fill="#FFF" transform={{x: 3, y: 9.5}}>
                        <Rect width="2.143" height="2.222" x=".214" y=".778" rx="1"/>
                        <Rect width="2.143" height="2.222" x=".214" y="5.111" rx="1"/>
                        <Rect width="2.143" height="2.222" x="3.429" y=".778" rx="1"/>
                        <Rect width="2.143" height="2.222" x="3.429" y="5.111" rx="1"/>
                        <Rect width="2.143" height="2.222" x="6.643" y=".778" rx="1"/>
                        <Rect width="2.143" height="2.222" x="6.643" y="5.111" rx="1"/>
                    </G>
                    <Rect width="8.571" height="3.333" x="3.214" y="4.333" fill="#FFF" rx="1"/>
                </G>
            </Svg>
        );
    }
}