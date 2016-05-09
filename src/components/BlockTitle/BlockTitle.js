import React, { Component } from 'react';

import style from './BlockTitle.scss';

export default class BlockTitle extends Component {
    render() {
        return(
          <h2 className={style.title}>{this.props.children}</h2>
        );
    }
}