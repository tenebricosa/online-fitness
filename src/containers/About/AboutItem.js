import React, { Component, PropTypes } from 'react';

import style from './AboutItem.scss';

export default class About extends Component {
    render() {
        const {Title, Description} = this.props;

        return (
            <li className={style.item}>
                <h3 className={style.title}>{Title}</h3>
                <p className={style.description}>{Description}</p>
            </li>
        );
    }
}

About.propTypes = {
    Title: PropTypes.string,
    Description: PropTypes.string
}