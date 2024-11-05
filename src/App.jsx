import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowCards from './components/RowCards/RowCards'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Banner />
            <RowCards />
        </div>
    )
}

export default App
