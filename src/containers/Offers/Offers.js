import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import OfferItem from './OfferItem';

import style from './Offers.scss';

export default class Offers extends Component {
    render() {
        return (
            <Section wrapperClass={style.wrapper}>
                <BlockTitle>Выбери свой план</BlockTitle>
                <ul className={style.list}>
                    <OfferItem Title='Программа тренировок'
                               Price='5 500'
                               Description={['Подробный список упражнений на месяц', 'Часовая консультация по Скайпу']} />
                    <OfferItem Title='Фитнес меню'
                               Price='4 000'
                               Description={['Ежедневный рацион на месяц', 'Индивидуальный подход']} />

                    <OfferItem Title='Онлайн тренировка'
                               Price='3 500'
                               Description={['Одна тренировка по Скайпу', 'Индивидуальный подбор упражнений']} />
                </ul>
                <Button />
            </Section>
        );
    }
}