import React from 'react'
//https://www.youtube.com/watch?v=tYA1n_oTloY&list=PLEVTJcDnFDm9lpEEHTftRa9JSRV4jY_p9&index=3

import './quize.css'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'

export default function Quizeapp() {
    
  return (
    <>
    <Container fluid={true} className='bgImg'>
      <Helmet>
        <title>Quize app</title>
      </Helmet>
    <Container >
         
         <div className='text-center'>
             <img src="https://media.istockphoto.com/vectors/quiz-time-flat-vector-lettering-vector-id1171765499?k=20&m=1171765499&s=612x612&w=0&h=s99INCuNzJXmLMh7LYOQZGUfCMPgvabUcqI0xGDQKSY=" />
         </div>
         <div  className='text-center'>  
         <div  className='m-3'>


         <Link to="/play/instraction">
             <Button variant='warning w-25'>Play</Button>
             </Link>
         </div>
         <div  className='mx-3'>
          
            <Button  variant='success' className='mx-3'>Longin</Button>
            
             <Button  className='mx-3'>Signup</Button>
         </div>
         <br/><br/><br/> <br/><br/><br/> <br/>
         </div>
       </Container> 
    </Container>
       
    </>
  )
}
