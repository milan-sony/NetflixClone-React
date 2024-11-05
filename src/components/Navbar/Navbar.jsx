import React from 'react'
import netflixLogo from './netflix_logo.png'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar nav-bar">
                <div className="container-fluid">
                    <a className="navbar-brand"><img className='logo' src={netflixLogo} alt="Netflix logo" /></a>
                    <div className="d-flex" role="search">
                        <i className="bi bi-person-circle avatar"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
