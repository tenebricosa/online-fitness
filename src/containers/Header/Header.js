import React, { Component } from 'react';

import style from './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={style.wrapper}>
                <div className={style.inner}>
                    <div className={style.name}>Олеся Мальцева</div>
                    <div className={style.phone}> +7 (912) 288 65 55</div>
                </div>
            </header>
        );
    }
}