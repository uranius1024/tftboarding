import React, { Component } from 'react'
import "../css/main.css"
import "../css/responsive.css"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
export default class Contact extends Component {
    render() {
        return (
            <>
                <div className='contact'>
                    <div className='container content-contact'>
                        <div className='row'>
                            <div className='col-md-4 get-touch'>
                                <h2 className='title'> GET IN TOUCH</h2>
                                <div className='text-general text-touch'>
                                    <p>Pho Co Dieu, Street </p>
                                    <p>HCMC, VietNam</p>
                                    <p>082 668 7722</p>
                                    <p>luongtrongq@gmail.com</p>
                                </div>
                            </div>
                            <div className='col-md-8 get-input text-center'>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.688121491676!2d106.65488871480066!3d10.758502092333728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eed8ac091f5%3A0x191f077fc4789490!2zUGjDsyBDxqEgxJBp4buBdSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1sen!2s!4v1641281516684!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />



                                {/* <form className="needs-validation" noValidate>
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
                                </form> */}

                            </div>

                        </div>
                    </div>
                </div >
                <div className='copyright'>
                    <div className='list-copyright'>
                        <ul className='icon-list'>

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
