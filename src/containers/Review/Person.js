import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './Person.scss';

export default class Person extends Component {
    render() {
        const {Name, Job, Opinion, Photo} = this.props;

        return (
            <li className={style.wrapper}>
                <div className={classnames(style.photo, Photo)}></div>
                <div className={style.content}>
                    <h3 className={style.name}>{Name}</h3>
                    <div className={style.job}>{Job}</div>
                    <p className={style.opinion}>{Opinion}</p>
                </div>
            </li>
        );
    }
}

Person.Proptypes = {
    Name: PropTypes.string.isRequired,
    Job: PropTypes.string.isRequired,
    Opinion: PropTypes.string.isRequired,
    Photo: PropTypes.string.isRequired
}