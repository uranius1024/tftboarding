import React, { Component } from 'react'
import SingleHeader from './Header'
import SingleContent from './SingleContent'
import SingleContact from './Contact'

export default class SinglePage extends Component {
    render() {
        return (
            <div className='singlepage'>
                <div className='SingleHeader'>
                    <SingleHeader />
                </div>
                <div className='SingleContent'>
                    <SingleContent />
                </div>
                <div className='SingleContact'>
                    <SingleContact />
                </div>
            </div>
        )
    }
}
