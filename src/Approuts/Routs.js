import React, { Component } from 'react'
import {  Route, Routes,} from 'react-router-dom'
import Homepage from '../Pages/HomePages/Homepage'
export default class Routs extends Component {
  render() {
    return (
      <>
        <Routes>
            {/* <Route exact path="/" Component={Homepage}/> */}
            <Route  path="/" element={<Homepage/>}/>
        </Routes>
      </>
    )
  }
}
