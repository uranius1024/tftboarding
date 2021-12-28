import React, { Component } from 'react';
import "../css/main.css"
export default class Header extends Component {
    render() {
        return (
            <div className='header row'>
                <div className='container'>
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    </div>
                    <ul className="nav-menu list-menu text-general">
                        <li><a href="#header" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About</a></li>
                        <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                        <li><a href="#journal" className="smoothScroll">Blog</a></li>
                        <li><a href="#contact" className="smoothScroll">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
