import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import Section from '../../components/Section/Section';
import Person from './Person';

import style from './Review.scss';

export default class Review extends Component {
    render() {
        return (
            <Section>
                <BlockTitle>Кто-то уже попробовал</BlockTitle>
                <input type='radio' className={style.input} name='slides' id='radio-1' defaultChecked={true}/>
                <input type='radio' className={style.input} name='slides' id='radio-2' />
                <ul className={style['person-list']}>
                    <Person Name='Женя'
                            Job='Системный аналитик'
                            Opinion='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.'
                            Photo={style['client-1']}/>
                    <Person Name='Настя'
                            Job='Программист'
                            Opinion='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.'
                            Photo={style['client-2']}/>
                </ul>
                <div className={style.slider}>
                    <label className={style.label} for='radio-1' id='label-1'/>
                    <label className={style.label} for='radio-2' id='label-2'/>
                </div>
            </Section>
        );
    }
}