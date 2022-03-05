import React, { Component } from 'react'
import {  Route, Routes,} from 'react-router-dom'
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
        </Routes>
      </>
    )
  }
}
