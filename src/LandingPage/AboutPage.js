import React, { Component } from 'react'
import Slider from "react-slick";
import { AiFillHtml5, AiFillInstagram, AiFillGooglePlusCircle } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import { SiSimpleanalytics, SiAdobephotoshop } from "react-icons/si"
import { GrReactjs } from "react-icons/gr";

import Typical from "react-typical"
export default class AboutPage extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplayspeed: 100,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

            <div>

                <div id="about" className="paddsection">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 ">
                                <div className="div-img-bg">
                                    <div className="about-img">
                                        <img src="images/newAvatar.jpg" className="img-responsive" alt="me" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-descr">

                                    <p className="p-heading">im a ux /ui designer austin based who loves clean, simple &amp; unique design. i also enjoy crafting brand identities, icons, &amp; ilustration work. </p>
                                    <p className="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="services">
                    <Slider {...settings} className='container pt-5 pb-5'>
                        <div className="services-block">
                            <i>
                                <AiFillHtml5 />
                            </i>
                            <span>HTML5</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i>
                                <DiCss3 />
                            </i>

                            <span>CSS</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i>
                                <DiSass />
                            </i>

                            <span>SASS</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i>
                                <GrReactjs />
                            </i>

                            <span>REACTJS</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i>
                                <SiSimpleanalytics />
                            </i>

                            <span>Analytics</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>
                        <div className="services-block">
                            <i>
                                <SiAdobephotoshop />
                            </i>

                            <span>PHOTOGRAPHY</span>
                            <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                        </div>

                    </Slider>

                </div>

            </div>
        )
    }
}
