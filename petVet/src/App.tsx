import React from 'react'
import {Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import Homepage from './pages/Homepage'
import CreateCommunity from './components/community/CreateCommunity'
import AskQuestion from './components/community/AskQuestion'
import ParticularCommunity from './components/community/ParticularCommunity'
import { DefaultNavbar } from './components/DefaultNavbar'
import CommunityHomepage from './pages/Community/CommunityHomepage'
import CommunityShowcase from './pages/Community/CommunityShowcase'



const App = () => {
  return (
    <Router>
      <DefaultNavbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/community' element={<CommunityHomepage/>} />

        {/* COMMUNITY ROUTES */}
        <Route path="/community-showcase" element={<CommunityShowcase/>}/>
        <Route path='/community/create-a-community' element={<CreateCommunity/>} />
        <Route path='/community/ask-a-question' element={<AskQuestion/>} />
      </Routes>

    </Router>

    )
}

export default App