import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './Section.scss';

export default class Section extends Component {
    render() {
        const {wrapperClass, innerClass} = this.props;

        return (
            <section className={classnames(style.wrapper, wrapperClass)}>
                <div className={classnames(style.inner, innerClass)}>{this.props.children}</div>
            </section>
        );
    }
}

Section.propTypes = {
    wrapperClass: PropTypes.string,
    innerClass: PropTypes.string
}