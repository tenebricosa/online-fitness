import React, {Component} from 'react';

import style from './Button.scss';

export default class Button extends Component {
    render() {
        return(
            <a className={style.button} href="#request">
                <span className={style.label}>Связаться со мной</span>
            </a>
        )
    }
}