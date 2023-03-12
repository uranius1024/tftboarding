import React, { Component } from 'react'
import "../css/main.css"
import { Link } from 'react-router-dom'
import SinglePage from './SinglePage/SinglePage'
export default class BlogPage extends Component {
    render() {
        return (

            <div id="blog">
                <div id="content-blog" className='container'>
                    <h1 className='title'>Journal</h1>

                    <div className="row pt-5">
                        <div className="col-md-4 col-sm-6">
                            <div >
                                <img src="images/blog-post-1.jpg" className="card-img-top" alt />
                                <div className="card-body">

                                    <h5 className="card-title "><Link className='text-dark' to="/singlepage">SO LETS MAKE THE MOST IS BEAUTIFUL</Link></h5>
                                    <p className="card-text">card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div  >
                                <img src="images/blog-post-2.jpg" className="card-img-top" alt />
                                <div className="card-body">
                                    <h5 className="card-title "><Link className='text-dark' to="/singlepage">SO LETS MAKE THE MOST IS BEAUTIFUL</Link></h5>
                                    <p className="card-text">card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div >
                                <img src="images/blog-post-3.jpg" className="card-img-top" alt />
                                <div className="card-body">
                                    <h5 className="card-title "><Link className='text-dark' to="/singlepage">SO LETS MAKE THE MOST IS BEAUTIFUL</Link></h5>
                                    <p className="card-text">card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
