import React, { Component } from 'react'
import AboutPage from './AboutPage'
import Header from './Header'
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import BlogPage from './BlogPage'
import Contact from './Contact'
// import "../css/landingPage.css"

import Portfolio1 from './Portfolio1'
import TimelinePage from './TimelinePage'
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

                <div id="Timeline">
                    <TimelinePage />
                </div>
                {/* <div id="BlogPage">
                    <BlogPage />
                </div> */}
                <div id="Contact">
                    <Contact />
                </div>

                {/* <div id="Portfolio1">
                    <Portfolio />
                </div> */}
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
