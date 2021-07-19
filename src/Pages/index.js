import React, { useState } from 'react'
import { Router } from 'react-router'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Header from '../Components/HeaderBg'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>

            
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <Header />
            
        </>
    )
}



export default Home
