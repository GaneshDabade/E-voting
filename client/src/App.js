import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import ProfileRegister from './components/ProfileRegister'
import NewPoll from './components/NewPoll'
import PollingStation from './components/PollingStation'

import './App.css'

export default function App() {
    return (
        <>
        <Router>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element ={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route exact path="/home" element={ <HomePage/> } />
                    <Route path ="/profileregister" element={<ProfileRegister/>}/>
                    <Route path="/newpoll" element={<NewPoll/>}/>
                    <Route path="/PollingStation" element={<PollingStation/>}/>
                </Routes>
        </Router>
        </>
    )
}
