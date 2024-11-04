import React from 'react'
import netflixLogo from './netflix_logo.png'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand"><img className='logo' src={netflixLogo} alt="Netflix logo" /></a>
                    <div class="d-flex" role="search">
                        <i class="bi bi-person-circle avatar"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
