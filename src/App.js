import React, { Component } from 'react';

import Intro from './containers/Intro/Intro';
import Goals from './containers/Goals/Goals';

import style from './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Intro />
                <Goals />
            </div>
        );
    }
}