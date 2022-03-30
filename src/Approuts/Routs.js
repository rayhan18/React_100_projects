import React, { Component } from 'react'
import {  Route, Routes,} from 'react-router-dom'
import TurePage from '../Pages/TourPage/TurePage'
import Homepage from '../Pages/HomePages/Homepage'
import ReminderPage from '../Pages/ReminderPage/ReminderPage'
import Sidebar from '../Components/SidebarNav/Sidebar'
import UsestateError from '../Components/AdvamceHook/UsestateError'
import HooksPage from '../Pages/HooksPage'
import Loginwithcontext from '../Components/Login/Loginwithcontext'
import MulpolReturns from '../Components/AdvamceHook/UseEffect/MulpolReturns'
export default class Routs extends Component {
  render() {
    return (
      <>
        <Routes>
            {/* <Route exact path="/" Component={Homepage}/> */}
            <Route  path="/" element={<Loginwithcontext/>}/>
            <Route  path="/home" element={<Homepage/>}/>
            <Route  path="/reminder" element={<ReminderPage/>}/>
            <Route  path="/tour" element={<TurePage/>}/>
            <Route  path="/sidebar" element={<Sidebar/>}/>
            <Route  path="/hooks" element={<HooksPage/>}/>
            <Route  path="/userlogin" element={<MulpolReturns/>}/>
        </Routes>
      </>
    )
  }
}
