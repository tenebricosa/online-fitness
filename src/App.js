import React, { Component } from 'react';

import Header from './containers/Header/Header';
import Intro from './containers/Intro/Intro';
import Goals from './containers/Goals/Goals';
import About from './containers/About/About';
import Advantages from './containers/Advantages/Advantages';
import Review from './containers/Review/Review';
import Offers from './containers/Offers/Offers';
import Request from './containers/Request/Request';

import style from './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Header />
                <Intro />
                <Goals />
                <About />
                <Advantages />
                <Review />
                <Offers />
                <Request />
            </div>
        );
    }
}