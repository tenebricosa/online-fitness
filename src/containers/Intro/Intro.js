import React, { Component } from 'react';

import Button from '../../components/Button/Button';

import style from './Intro.scss';

export default class Intro extends Component {
    render() {
        return (
            <section className={style.wrapper}>
                <h1 className={style.title}>Твой<br/>личный<br/>фитнес-тренер</h1>
                <p className={style.about}>
                    На протяжении пятнцадцати лет я составляю
                    индивидуальные программы тренировок
                    и меню здорового питания.<br/>
                    Я помогаю сбрасывать вес, проходить реабилитацию
                    и просто держать себя в тонусе.<br/>
                    Теперь вы получаете уникальную возможность
                    получать консультации и проходить тренировки онлайн.
                </p>
                <Button />
            </section>
        );
    }
}