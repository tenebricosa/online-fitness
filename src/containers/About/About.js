import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import Section from '../../components/Section/Section';
import AboutItem from './AboutItem';

import style from './About.scss';

export default class About extends Component {
    render() {
        return (
            <Section innerClass={style.wrapper}>
                <BlockTitle>Мне можно доверять</BlockTitle>
                <ul className={style.list}>
                    <AboutItem Title='Опытность'
                               Description='Я работаю на протяжении 15 лет и мной остались довольны более 1500 клиентов.' />
                    <AboutItem Title='Опытность'
                               Description='Я работаю на протяжении 15 лет и мной остались довольны более 1500 клиентов.' />
                    <AboutItem Title='Опытность'
                               Description='Я работаю на протяжении 15 лет и мной остались довольны более 1500 клиентов.' />
                    <AboutItem Title='Опытность'
                               Description='Одна строка.' />
                    <AboutItem Title='Опытность'
                               Description='Одна строка.' />
                    <AboutItem Title='Опытность'
                               Description='Я работаю на протяжении 15 лет и мной остались довольны более 1500 клиентов.' />
                </ul>
            </Section>
        );
    }
}