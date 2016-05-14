import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';

import style from './Goals.scss';

export default class Goals extends Component {
    render() {
        return (
            <section className={style.wrapper}>
                <BlockTitle>Мы вместе поставим цель</BlockTitle>
                <div className={style.goal}></div>
            </section>
        );
    }
}