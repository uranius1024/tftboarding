import React, { Component } from 'react'
import "../css/main.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <div className='bg-homepage'>
                </div>
                <div className='text-homepage'>
                    <h1 className='title'>I'M FREELANCER</h1>
                    <h5 className='subtitle'>Designer, Developeur, Photographer</h5>
                    <ul className='list-icon'>
                        <li><i><AiFillFacebook /></i></li>
                        <li><i><AiFillTwitterCircle /></i></li>
                        <li><i>
                            <AiFillInstagram /></i></li>
                        <li><i><AiFillGooglePlusCircle /></i></li>
                        <li><i><AiFillGooglePlusCircle /></i></li>
                        <li><i><AiFillGooglePlusCircle /></i></li>
                    </ul>
                </div>
            </div>

        )
    }
}
