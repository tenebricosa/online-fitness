import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import Section from '../../components/Section/Section';
import Point from '../../components/Point/Point';

import style from './Advantages.scss';

export default class Advantages extends Component {
    render() {
        return (
            <Section wrapperClass={style.wrapper}>
                <BlockTitle isLight={true}>Самые гибкие условия</BlockTitle>
                <div className={style.points}>
                    <div className={style.points}>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                    </div>
                </div>
                <div className={style.points}>
                    <div className={style.points}>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                        <Point Title='Здоровье'
                               Paragraph='Я не готовлю к соревнованиям.
                                    Професиональный спорт часто
                                    приносит ущерб для здоровья.
                                    Я делаю акцент на фитнесе
                                    для оздоровления.'
                               iconClass={style.health}/>
                    </div>
                </div>
            </Section>
        );
    }
}