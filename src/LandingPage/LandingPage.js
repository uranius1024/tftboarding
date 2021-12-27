import React, { Component } from 'react'
import Header from './Header'
import HomePage from './HomePage'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomePage />
            </div>
        )
    }
}
