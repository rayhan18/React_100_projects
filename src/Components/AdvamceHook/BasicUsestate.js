import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const BasicUsestate =()=> {

   const [title,setTitle]= useState('Random Title')

   const hendelClick=()=>{
       if(title === "Ramdom Title"){
           setTitle('Hello World')
       }else{
           setTitle('Ramdom Title')
       }
   }
  return (
    <div className='container text-center bg-light'>
        <h1>basicUsestate</h1>
         <h3>{title}</h3>
         <Button type="button" onClick={hendelClick}> Change</Button>
        <hr/>

        </div>
  )
}
export default  BasicUsestate;