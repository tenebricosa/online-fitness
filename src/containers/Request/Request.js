import React, { Component } from 'react';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';

//import style from './Request.scss';

export default class Request extends Component {
    render() {
        return (
            <Section>
                <BlockTitle>Пора заняться собой</BlockTitle>
                <Button />
            </Section>
        );
    }
}