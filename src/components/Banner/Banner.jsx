import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='container-fluid banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='movie-name'>Movie Name</h1>
                        <div className='row btns-div'>
                            <div className='col-lg-4'>
                            <button className='btn btn1'>Play</button>
                            </div>
                            <div className='col-lg-4'>
                            <button className='btn btn2'>My list</button>
                            </div>
                        </div>
                        <p className='movie-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea nemo aperiam laudantium nostrum nam facilis impedit, voluptatibus tenetur. Perspiciatis commodi est perferendis culpa debitis voluptatem fugit! Debitis, et quam!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
