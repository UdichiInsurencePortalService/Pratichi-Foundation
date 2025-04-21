import React from 'react'
import Navbar from './Header/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Components/Pages/Home/Home'
import Abouts from './Components/Pages/Abouts/Abouts'
import Footer from './Header/Footer/Footer'
import Overview from './Components/Pages/OldAgeHome/Overview/Overview.jsx'
import Facilites from './Components/Pages/OldAgeHome/Facilities/Facilites.jsx'
import Pricing from './Components/Pages/OldAgeHome/Pricing/Pricing.jsx'
import Donation from './Components/Pages/OldAgeHome/Donation/Donation.jsx'
import SanikOverview from './Components/Pages/SanikSchool/Sanik Overview/SanikOverview.jsx'
import Contact from './Header/ContactUs/Contact.jsx'
import SanikFacilities from './Components/Pages/SanikSchool/Facilities/SanikFacilities.jsx'
import SanikFee from './Components/Pages/SanikSchool/Fee/SanikFee.jsx'
import SanikAchievement from './Components/Pages/SanikSchool/Achievement/SanikAchievement.jsx'

const App = () => {
  return (

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Abouts/>}/>
        <Route path = '/overview' element={<Overview/>}/>
        <Route path = '/facilites' element={<Facilites/>}/>
        <Route path = '/pricing' element={<Pricing/>}/>
        <Route path = '/donation' element={<Donation/>}/>

        
        <Route path = '/SanikOverview' element={<SanikOverview/>}/>
        <Route path = '/Sanikfacilities' element={<SanikFacilities/>}/>
        <Route path = '/SanikFee' element={<SanikFee/>}/>
        <Route path = '/SanikAchi' element={<SanikAchievement/>}/>




        <Route path = '/contact' element={<Contact/>}/>





      </Routes>
      <Footer/>
    </>
 )
}

export default App