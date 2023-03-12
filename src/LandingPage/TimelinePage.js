import React, { Component } from 'react'
import "../css/main.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FcLink, FcLike, FcPicture } from "react-icons/fc"

import { AiOutlineSkype } from "react-icons/ai"
export default class TimelinePage extends Component {
    render() {
        return (
            <div id="Timeline" className='bg-timeline '>
                <div className="section-title text-center mb-5">
                    <h2>Timeline of work</h2>
                </div>
                <div className='container'>
                    <div className='timeline'>
                        <div className='lineTimeline'>
                            <div className='line'></div>
                        </div>
                        <div className='circleBrand'>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className='nav-item img-timeline-spec' ><a className='icon-timeline nav-link active' id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" ><i>
                                    <img className='img-timeline w-100' src='images/ueh-logo.jpg' alt="img" />
                                </i>
                                </a></li>
                                <li className='nav-item' ><a className='icon-timeline nav-link ' id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" ><i>
                                    <img className='img-timeline w-100 circleImg' src='images/cyber.png' alt="img" />
                                </i>
                                </a></li>
                                <li className='nav-item'><a className='icon-timeline nav-link ' id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" ><i>
                                    <img className='img-timeline w-100 ' src='images/vnresource.jpg' alt="img" />
                                </i>
                                </a></li>

                            </ul>

                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className='timeline-content'>
                                    <div className='row'>
                                        <div></div>
                                        <div className='col-md-3 timeline-pic'>
                                            <img className='w-100' src='images/ueh.jpg' alt="img" />
                                        </div>
                                        <div className='col-md-9 timeline-text'>
                                            <p className='text-left text-timeline'>2018 • AUSTIN - 2021 • AUSTIN</p>
                                            <h4 className='text-left'>University Of Economics HCM City</h4>
                                            <p className='text-timeline text-left'>Major: Business Information System</p>
                                            <p className='text-timeline text-left'>Learn Time: 3 Years </p>
                                            <p className='text-timeline text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quasi!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> <div className='timeline-content'>
                                <div className='row'>
                                    <div className='col-md-3 timeline-pic'>
                                        <img className='w-100 ' src='images/cyber.png' alt="img" />
                                    </div>
                                    <div className='col-md-9 '>
                                        <p className='text-timeline text-left'>2021 • JANUARY - 2021 • SEPTEMBER</p>
                                        <h4 className='text-left'>CyberSoft Academy</h4>
                                        <p className='text-timeline text-left'>Course Name: Front-End  Web Develop Course</p>
                                        <p className='text-timeline text-left'>Learn Time: 8 months</p>
                                        <p className='text-timeline text-left'>Gain Knowlegde: HTML/CSS/SCSS/JAVASCRIPT/REACTJS</p>
                                        <p className='text-timeline text-left'>
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                            amet, consectetur adipisicing elit. Explicabo
                                        </p>
                                    </div>
                                </div>
                            </div></div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className='timeline-content'>
                                    <div className='row'>
                                        <div className='col-md-3 timeline-pic'>
                                            <img className='w-100 ' src='images/vnresource.jpg' alt="img" />
                                        </div>
                                        <div className='col-md-9'>
                                            <p className='text-timeline text-left'>2021 • OCTOBER - 2021 • DECEMBER</p>
                                            <h4 className='text-left'>VnResource Company</h4>
                                            <p className='text-timeline text-left'>Position: Application Consultant Intern</p>
                                            <p className='text-timeline text-left'>Working Time: 6 months</p>
                                            <p className='text-timeline text-left'>Gain Knowlegde: Writing Analyzing Documents, Software Consuting Skill
                                            </p>
                                            <p className='text-timeline text-left'>
                                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                                amet, consectetur adipisicing elit. Explicabo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className='timeline-content'>
                        <div className='row'>
                            <div className='col-md-3 timeline-pic'>
                                <img className='w-100' src='images/portfolio/1.jpg' alt="img" />
                            </div>
                            <div className='col-md-9'>
                                <h2>Innovating at Square</h2>
                                <p className='text-timeline'>Today, I'm leading a small, brilliant team of designers that are ushering in the next generation of eCommerce at Square. From retail and restaurants, to digital goods and beyond.</p>
                                <p className='text-timeline'>Today, I' m leading a small, brilliant team of designers that are ushering in the next generation of eCommerce at Square. From retail and restaurants, to digital goods and beyond.</p>
                            </div>
                        </div>
                    </div> */}
                </div >
            </div >
        )
    }
}
