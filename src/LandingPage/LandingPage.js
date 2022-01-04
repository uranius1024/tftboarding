import React, { Component } from 'react'
import AboutPage from './AboutPage'
import Header from './Header'
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import BlogPage from './BlogPage'
import Contact from './Contact'
import "../css/landingPage.css"

import Portfolio1 from './Portfolio1'
export default class LandingPage extends Component {
    render() {
        return (
            <div className='LandingPage'>
                <div id="Header">
                    <Header />
                </div>
                <div id="HomePage">
                    <HomePage />
                </div>
                <div id="AboutPage">
                    <AboutPage />
                </div>
                <div id="Portfolio">
                    <Portfolio1 />
                </div>
                {/* <div id="BlogPage">
                    <BlogPage />
                </div> */}
                <div id="Contact">
                    <Contact />
                </div>


                {/* <Header />
                <HomePage />
                <AboutPage />
                <Portfolio />
                <BlogPage />
                <Contact /> */}
            </div>
        )
    }
}
