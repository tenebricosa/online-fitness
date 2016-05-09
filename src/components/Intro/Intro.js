import React, { Component } from 'react';

import style from './intro.scss';

export default class Intro extends Component {
    render() {
        return <div className={style.hello}>
            <div className={style.another}>Привет из Intro</div>
        </div>
    }
}