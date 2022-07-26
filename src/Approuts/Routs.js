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
import ImageGallary from '../Components/ImgGallary/ImgGallary'
import PasswordGenarator from '../Components/PasswordGenerator/PasswordGenarator'
import Dropdown from '../Components/Dropdown/Dropdown'
import TodoList from '../Components/TodoList/TodoList'

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
            <Route  path="/multipol-return" element={<MulpolReturns/>}/>
            <Route  path="/image-gallery" element={<ImageGallary/>}/>
            <Route  path="/password-generator" element={<PasswordGenarator/>}/>
            <Route  path="/dropdown" element={<Dropdown/>}/>
            <Route  path="/todos" element={<TodoList/>}/>
        </Routes>
      </>
    )
  }
}
