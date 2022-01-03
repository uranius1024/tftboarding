import React, { Component } from 'react'
import "../../css/main.css"
import "../../css/responsive.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
export default class SingleContact extends Component {
    render() {
        return (
            <>

                <div className='copyright'>
                    <div className='list-copyright'>
                        <ul className='icon-list'>
                            <li><i><AiFillFacebook /></i></li>
                            <li><i><AiFillTwitterCircle /></i></li>
                            <li><i>
                                <AiFillInstagram /></i></li>
                            <li><i><AiFillGooglePlusCircle /></i></li>
                            <li><i><AiFillGooglePlusCircle /></i></li>
                            <li><i><AiFillGooglePlusCircle /></i></li>
                        </ul>
                        <p>© COPYRIGHTS FOLIO. ALL RIGHTS RESERVED.</p>
                        <p>Designed by BootstrapMade</p>

                    </div>

                </div>
            </>
        )
    }
}
