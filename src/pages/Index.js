import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ProductInformation from '../components/ProductInformation'
import ContactUs from './ContactUs'

function Index() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/AboutUs' element={<AboutUs />} />
                <Route exact path='/ProductInformation' element={<ProductInformation />} />
                <Route exact path='/ContactUs' element={<ContactUs />} />
            </Routes>
        </Router>
    )
}

export default Index
