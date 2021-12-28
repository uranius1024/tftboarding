import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (

            <>
                <div id="portfolio" className="text-center paddsection">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Portfolio</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="portfolio-list">
                                    <ul className="nav nav-pills mb-3 justify-content-center" id="portfolio-filters" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#all" role="tab" aria-controls="pills-home" aria-selected="true">all</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#illu" role="tab" aria-controls="pills-profile" aria-selected="false">branding</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pill" role="tab" aria-controls="pills-contact" aria-selected="false">mockups</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pilill" role="tab" aria-controls="pills-contact" aria-selected="false">ui kits</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pilill" role="tab" aria-controls="pills-contact" aria-selected="false">web design</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pilill" role="tab" aria-controls="pills-contact" aria-selected="false">photography</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="pills-home-tab">..
                                        <div className="portfolio-container container">
                                            <div className='row'>
                                                <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/1.jpg">
                                                        <img src="images/portfolio/1.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/2.jpg">
                                                        <img src="images/portfolio/2.jpg" alt="img" />
                                                    </a>
                                                </div> <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/3.jpg">
                                                        <img src="images/portfolio/3.jpg" alt="img" />
                                                    </a>
                                                </div> <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/4.jpg">
                                                        <img src="images/portfolio/4.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/5.jpg">
                                                        <img src="images/portfolio/5.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="col-4 port-image">
                                                    <a className="popup-img" href="images/portfolio/6.jpg">
                                                        <img src="images/portfolio/6.jpg" alt="img" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="illu" role="tabpanel" aria-labelledby="pills-profile-tab">...illu</div>
                                    <div className="tab-pane fade" id="pill" role="tabpanel" aria-labelledby="pills-contact-tab">...pill</div>
                                    <div className="tab-pane fade" id="pilill" role="tabpanel" aria-labelledby="pills-contact-tab">...pillpilill</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
