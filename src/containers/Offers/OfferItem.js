import React, { Component, PropTypes } from 'react';

import style from './OfferItem.scss';

export default class OfferItem extends Component {
    render() {
        const {Title, Price, Description} = this.props;

        return (
            <li className={style.offer}>
                <h3 className={style.header}>{Title}</h3>
                <div className={style.body}>
                    <div className={style.price}>{Price} &#x20BD;</div>
                    <ul className={style.list}>
                        {Description.map((row) => (
                            <li className={style.item} key={row}>{row}</li>
                        ))}
                    </ul>
                </div>
            </li>
        );
    }
}

OfferItem.Proptypes = {
    Title: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Description: PropTypes.arrayOf(PropTypes.string.isRequired)
}