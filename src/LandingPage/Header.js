import React, { Component, useEffect } from 'react';
import "../css/main.css"
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { FaAlignRight } from 'react-icons/fa';
import { SiFacebook } from "react-icons/si";
import { FcLink, FcLike, FcPicture } from "react-icons/fc"

import { AiOutlineSkype } from "react-icons/ai"
export default class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isShowResponsiveMenu: false,
        }
    };
    isShowResponsiveMenu = () => {
        this.setState({ isShowResponsiveMenu: !this.state.isShowResponsiveMenu })
    }
    componentDidMount = () => {
        let defaultScrollPosition = 0;
        window.onscroll = () => {
            let currentScrollPosition = window.pageYOffset;
            if ((currentScrollPosition - defaultScrollPosition) > 500) {
                document.getElementsByClassName("header")[0].style.top = "0px";
            } else {
                document.getElementsByClassName("header")[0].style.top = "-75px";
            }
        }
    }

    render() {

        let headerMenuClassName = 'header';
        return (
            <div className={headerMenuClassName}>
                <div className='container'>
                    <div className="logo">
                        <a href="index.html"><img className='w-100' src="images/signature.png" alt="logo" /></a>
                    </div>
                    <div className='navBar nav-menu-after'>
                        <button onClick={this.isShowResponsiveMenu}>
                            <AiOutlineMenu />
                        </button>
                        <ul className={this.state.isShowResponsiveMenu ? "links show-nav" : "links"}>
                            <li><a href="#header" className="smoothScroll"><Link
                                activeClass="active"
                                to="HomePage"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={600}
                            >
                                Home
                            </Link></a></li>
                            <li><a href="#about" className="smoothScroll"><Link
                                activeClass="active"
                                to="AboutPage"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={600}
                            >
                                About
                            </Link></a></li>
                            <li><a href="#portfolio" className="smoothScroll"><Link
                                activeClass="active"
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={600}
                            >
                                Portfolio
                            </Link></a></li>
                            <li><a href="#journal" className="smoothScroll"><Link
                                activeClass="active"
                                to="BlogPage"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={600}
                            >
                                Blog
                            </Link></a></li>
                            <li><a href="#timeline" className="smoothScroll"><Link
                                activeClass="active"
                                to="Timeline"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={600}
                            >
                                Contact
                            </Link></a></li>
                        </ul>
                    </div>
                    <ul className="nav-menu list-menu text-general">
                        <li><a href="#header" className="smoothScroll"><Link
                            activeClass="active"
                            to="HomePage"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            Home
                        </Link></a></li>
                        <li><a href="#about" className="smoothScroll"><Link
                            activeClass="active"
                            to="AboutPage"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            About
                        </Link></a></li>
                        <li><a href="#portfolio" className="smoothScroll"><Link
                            activeClass="active"
                            to="Portfolio"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            Portfolio
                        </Link></a></li>
                        <li><a href="#journal" className="smoothScroll"><Link
                            activeClass="active"
                            to="Timeline"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            Timeline
                        </Link></a></li>

                        <li><a href="#contact" className="smoothScroll"><Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            Contact
                        </Link></a></li>
                    </ul>
                    <div className='list-clear'></div>
                    {/* <div className='timeline'>
                        <div className='lineTimeline'>
                            <div className='line'></div>
                        </div>
                        <div className='circleBrand'>
                            <ul>
                                <li><a className='icon-timeline'><i>
                                    <SiFacebook />
                                </i>
                                </a></li>
                                <li><a className='icon-timeline'><i>
                                    <FcLink />
                                </i>
                                </a></li> <li><a className='icon-timeline'><i>
                                    <AiOutlineSkype />
                                </i>
                                </a></li> <li><a className='icon-timeline'><i>
                                    <FcLike />
                                </i>
                                </a></li> <li><a className='icon-timeline'><i>
                                    <FcPicture />
                                </i>
                                </a></li>




                            </ul>
                        </div>
                    </div> */}
                    {/* <ul className="nav-menu-after text-general ">
                        <li><a href="#header" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About</a></li>
                        <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                        <li><a href="#journal" className="smoothScroll">Blog</a></li>
                        <li><a href="#contact" className="smoothScroll">Contact</a></li>
                    </ul> */}

                </div>
            </div>
        )
    }
}
