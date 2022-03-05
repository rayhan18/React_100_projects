import React, { Component } from 'react'
import {  Route, Routes,} from 'react-router-dom'
import TurePage from '../Pages/TourPage/TurePage'
import Homepage from '../Pages/HomePages/Homepage'
import ReminderPage from '../Pages/ReminderPage/ReminderPage'
export default class Routs extends Component {
  render() {
    return (
      <>
        <Routes>
            {/* <Route exact path="/" Component={Homepage}/> */}
            <Route  path="/" element={<Homepage/>}/>
            <Route  path="/reminder" element={<ReminderPage/>}/>
            <Route  path="/tour" element={<TurePage/>}/>
        </Routes>
      </>
    )
  }
}
