import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './Point.scss';

export default class Point extends Component {
    render() {
        const {Title, Paragraph, iconClass, containerClass} = this.props;

        return (
            <div className={classnames(style.container, containerClass)}>
                <div className={
                        classnames(style.icon, iconClass)
                    }>
                </div>
                <h3 className={style.title}>{Title}</h3>
                <p className={style.paragraph}>{Paragraph}</p>
            </div>
        );
    }
}

Point.propTypes = {
    Title: PropTypes.string.isRequired,
    Paragraph: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    containerClass: PropTypes.string
}

Point.defaultProps = {
    isCircled: true
}