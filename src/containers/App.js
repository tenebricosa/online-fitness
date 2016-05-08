import React, { Component } from 'react'
import Intro from '../components/Intro/Intro'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>Привет из App</div>
                <Intro />
            </div>
        )
    }
}