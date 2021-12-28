import React, { Component } from 'react'
import AboutPage from './AboutPage'
import Header from './Header'
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import BlogPage from './BlogPage'
export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header />
                <HomePage />
                <AboutPage />
                <Portfolio />
                <BlogPage />
            </>
        )
    }
}
