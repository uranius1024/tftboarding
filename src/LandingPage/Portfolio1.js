import React, { useState } from 'react'
import { Modal, Button, Radio } from 'antd';
import "../css/main.css";

export default function Portfolio1() {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);


    return (
        <div>
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
                                {/* <div className="portfolio-list">
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
                                </div> */}
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="portfolio-container container">
                                            <div className='row'>
                                                <div className="col-md-4 col-sm-6 port-image">
                                                    <div className='previewProject'>
                                                        <img src="images/portfolio/OanTuXi.png" alt="img" />
                                                    </div>
                                                    <Button className='btn-preview' type="" onClick={() => setVisible(true)}>
                                                        Preview Project
                                                    </Button>
                                                    <Modal
                                                        title=""
                                                        centered
                                                        visible={visible}
                                                        onOk={() => setVisible(false)}
                                                        onCancel={() => setVisible(false)}
                                                        width={1000}
                                                    >
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <img className='w-100' src="images/portfolio/OanTuXi.png" alt="img" />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <h5>OanTuXi Web</h5>
                                                                <p>This project is built by HTML5, CSS3, REACTJS</p>
                                                                <p>The Captions workspace consists of the Text panel (including the Transcript and Captions tabs). You auto-transcribe your video in the Transcript tab, and then generate your captions, which you can edit in the Captions tab and in the Program Monitor. Captions have their own track on the timeline. Stylize your captions with the design tools in the Essential Graphics panel.</p>

                                                            </div>

                                                        </div>
                                                    </Modal>
                                                </div>
                                                <div className="col-md-4 col-sm-6 port-image">
                                                    <div className='previewProject'>
                                                        <img src="images/portfolio/BookingFilm.png" alt="img" />
                                                    </div>
                                                    <Button className='btn-preview' type="" onClick={() => setVisible1(true)}>
                                                        Preview Project
                                                    </Button>
                                                    <Modal
                                                        title=""
                                                        centered
                                                        visible={visible1}
                                                        onOk={() => setVisible1(false)}
                                                        onCancel={() => setVisible1(false)}
                                                        width={1000}
                                                    >
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <img className='w-100' src="images/portfolio/BookingFilm.png" alt="img" />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <h5>BookingFilm Web</h5>
                                                                <p>This project is built by HTML5, CSS3, REACTJS</p>
                                                                <p>The Captions workspace consists of the Text panel (including the Transcript and Captions tabs). You auto-transcribe your video in the Transcript tab, and then generate your captions, which you can edit in the Captions tab and in the Program Monitor. Captions have their own track on the timeline. Stylize your captions with the design tools in the Essential Graphics panel.</p>

                                                            </div>

                                                        </div>
                                                    </Modal>
                                                </div>
                                                <div className="col-md-4 col-sm-6 port-image">
                                                    <div className='previewProject'>
                                                        <img className='' src="images/portfolio/WebBookShare.png" alt="img" />
                                                    </div>
                                                    <Button className='btn-preview' type="" onClick={() => setVisible2(true)}>
                                                        Preview Project
                                                    </Button>
                                                    <Modal
                                                        title=""
                                                        centered
                                                        visible={visible2}
                                                        onOk={() => setVisible2(false)}
                                                        onCancel={() => setVisible2(false)}
                                                        width={1000}
                                                    >
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <img className='w-100 ' src="images/portfolio/WebBookShare.png" alt="img" />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <h5>SaleBook Web</h5>
                                                                <p>This project is built by HTML5, CSS3, REACTJS</p>
                                                                <p>The Captions workspace consists of the Text panel (including the Transcript and Captions tabs). You auto-transcribe your video in the Transcript tab, and then generate your captions, which you can edit in the Captions tab and in the Program Monitor. Captions have their own track on the timeline. Stylize your captions with the design tools in the Essential Graphics panel.</p>


                                                            </div>

                                                        </div>
                                                    </Modal>
                                                </div>




                                            </div>

                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="illu" role="tabpanel" aria-labelledby="pills-profile-tab"> </div>
                                    <div className="tab-pane fade" id="pill" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    </div>
                                    <div className="tab-pane fade" id="pilill" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
