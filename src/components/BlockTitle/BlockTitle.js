import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './BlockTitle.scss';

export default class BlockTitle extends Component {
    render() {
        const { isLight } = this.props;

        return(
          <h2 className={classnames(style.title, isLight ? style.light : '')}>{this.props.children}</h2>
        );
    }
}

BlockTitle.propTypes = {
    isLight: PropTypes.bool
}


BlockTitle.defaultProps = {
    isLight: false
}