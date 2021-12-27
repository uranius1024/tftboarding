import React, { Component } from 'react';
import "../css/main.css"
export default class Header extends Component {
    render() {
        return (
            <div className='HeadOutLine'>
                <div className='InterOutLine container'>
                    <div className='row'>
                        <div className='HeadLogo col-md-6'>
                            <img src='../images/logo.png' />
                        </div>
                        <div className='HeadMenu col-md-6'>
                            <ul className='HeadList textGeneral'>
                                <li>
                                    <a href='#'>Home</a></li>
                                <li>
                                    <a href='#'>About</a></li>
                                <li>
                                    <a href='#'>Portfolio</a></li>
                                <li>
                                    <a href='#'>Blog</a></li>
                                <li>
                                    <a href='#'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
