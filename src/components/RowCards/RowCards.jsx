import React from 'react'
import './RowCards.css'
import netflixLogo from './netflix_logo.png'

function RowCards() {
    return (
        <div className='container-fluid'>
            <div className='container mb-5'>
                    <h1 className='mb-5 head-text'>Movie list</h1>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className="card new-cards">
                            <img src={netflixLogo} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn1">Watch</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="card new-cards">
                            <img src={netflixLogo} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn1">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowCards
