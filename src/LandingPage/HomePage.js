import React, { Component } from 'react'
import "../css/main.css"
import Typical from "react-typical"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <div className='bg-homepage'>
                </div>
                <div className='text-homepage'>
                    <Typical className='title'
                        steps={["I'M", 1000, "I'M FREELANCER", 1000, "I'M DESIGNER", 1000, "I'M PHOTOGRAPHY", 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
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
