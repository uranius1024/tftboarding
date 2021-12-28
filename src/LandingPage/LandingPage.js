import React, { Component } from 'react'
import AboutPage from './AboutPage'
import Header from './Header'
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import BlogPage from './BlogPage'
import Contact from './Contact'
export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header />
                <HomePage />
                <AboutPage />
                <Portfolio />
                <BlogPage />
                <Contact />
            </>
        )
    }
}
