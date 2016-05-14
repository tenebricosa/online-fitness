import React, {Component} from 'react';

import style from './Button.scss';

export default class Button extends Component {
    render() {
        return(
            <button className={style.button}>
                <span className={style.label}>Связаться со мной</span>
            </button>
        )
    }
}