import React, { Component } from 'react';

import style from './intro.css';

export default class Intro extends Component {
    render() {
        return <div className={style.hello}>Привет из Intro</div>
    }
}