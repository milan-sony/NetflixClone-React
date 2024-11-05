import React from 'react'
import './RowCards.css'
import poster from './poster.jpg'
function RowCards() {
    return (
        <div className='container-fluid'>
            <div className='container mb-5'>
                <h1 className='head-text'>Movie list</h1>
                <div className='card-row'>
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                    <img src={poster} alt="poster" />
                </div>
            </div>
        </div>
    )
}

export default RowCards
