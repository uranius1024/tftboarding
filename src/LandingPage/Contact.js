import React, { Component } from 'react'
import "../css/main.css"
import "../css/responsive.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
export default class Contact extends Component {
    render() {
        return (
            <>
                <div className='contact'>
                    <div className='container content-contact'>
                        <div className='row'>
                            <div className='col-md-6 get-touch'>
                                <h2 className='title'> GET IN TOUCH</h2>
                                <div className='text-general text-touch'>
                                    <p>23 Main, Street </p>
                                    <p>New York, United States</p>
                                    <p>+88 01912704287</p>
                                    <p>example@example.com</p>
                                </div>
                            </div>
                            <div className='col-md-6 get-input text-center'>
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-6">

                                            <input type="text" className="form-control form-contact" id="validationCustom01" placeholder="Your name" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            <input type="text" className="form-control your-email form-contact" id="validationCustom01" placeholder="YOUR email" required />
                                            <div className="valid-feedback ">
                                                Looks good!
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-row mt-4 mb-4">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control form-contact" id="validationCustom03" placeholder="Subject" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row mt-4 mb-4">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control form-contact" id="validationCustom03" placeholder="Message" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="col-md-12 form-contact btn btn-dark text-center" type="submit">Submit form</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div >
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
