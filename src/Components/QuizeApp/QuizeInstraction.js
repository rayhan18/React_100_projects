import React from 'react'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { AiOutlinePicRight } from "react-icons/ai";
import {Link} from 'react-router-dom'

 const QuizeInstraction = () => {
    const dicstyle={
        width:'75%',
        border:'3px solid green',
        alignItem:'center',
        justifycontent:'center'

    }
  return (
    <>
  <Container className='w-50 justify-content-center border mt-3'>
      <Helmet><title> Quize Instraction</title></Helmet>

      <div >
         <h2 className='text-center border p-3 mt-2'>How to play the Game</h2>
         <p> Ensure you read this gide form start to end</p>
         <ul>
            <li>The game has duration 15 minuts and ends as soon as your time elapes</li>
            <li>Each game consits of 15 question</li>
            <li>Evry question contains 4 options
            <img src=""/>
            </li>
           
            <li>SElect the best options which the best answar question by clicking it
            <img src=""/>
            </li>
            <li>Each game to lifelines namely</li>
              <ul>
                <li> 2 50-50 chance</li>
                <li>5 hints</li>
              </ul>
              <li>
                selecting a 50-50 lifeline by clicking the icon 
                <span><AiOutlinePicRight/></span>
                    will remove  2 wrong answer , living the curect answar and one wrong answer
                    <img src=""/>
              </li>
              <li>
                Feel free to quit the game any time in that case your squer will be revaled after words.
              </li>
              <li>the timer start as soon as game lods</li>
              <li>let's do this if you think you have got hat it taks?</li>
         </ul>
        <div><hr/>
            <Link to="/">No take me back</Link>
            <Link to="/play/quize" className='float-end'>Okey let's do this!</Link>
        </div>
        <hr/>
      </div>
  </Container>
    </>
  )
}
export default QuizeInstraction;