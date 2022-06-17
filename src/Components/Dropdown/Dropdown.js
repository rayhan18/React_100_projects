import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import logo from '../../Assets/Images/international.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Dropdown() {
 const [Dropdown ,setDropdown] = useState(false)
 const [Dropdown2 ,setDropdown2] = useState(false)
 const [Dropdown3 ,setDropdown3] = useState(false)
 const [Dropdown4 ,setDropdown4] = useState(false)
 const [Dropdown5 ,setDropdown5] = useState(false)
 const [textchange ,settextchange] = useState('Follow')

const handeler =(seDropdown)=>{
    seDropdown(setItem=> !setItem)
}
const btnhandeler =(e)=>{
    settextchange('following' )
    e.target.style.color='white'
    e.target.style.background='green'
}
   


  return (
    <Container>
        <Row>
            <Col sm={12} md={3} lg={3}>
            <div style={{background:'#bcddbc9e',padding:'20px',}}>
            <h2 onClick={()=>handeler(setDropdown)}>Dropsown 1</h2>
            {
                Dropdown &&(
                    <ul>
                    <li>Item-1</li>
                    <li>Item-2</li>
                    <li>Item-3</li>
                    <li>Item-4</li>
                </ul>
                )
            }
           
            <h2  onClick={()=>handeler(setDropdown2)}>Dropsown 2</h2>
           {
            Dropdown2 &&(
                <ul>
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>
                <li>Item-4</li>
            </ul>
            )
           }
           
            <h2  onClick={()=>handeler(setDropdown3)}>Dropsown 3</h2>
            {
                Dropdown3 &&(
                    <ul>
                    <li>Item-1</li>
                    <li>Item-2</li>
                    <li>Item-3</li>
                    <li>Item-4</li>
                </ul>
                )
            }
           
            <h2  onClick={()=>handeler(setDropdown4)}>Dropsown 4</h2>
            {
              Dropdown4  &&(
            <ul>
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>
                <li>Item-4</li>
            </ul>
                )
            }
            <p>Need hear css design</p>
        </div>
            </Col>
            <Col sm={12} md={9} lg={9} className="mt-5">
                <h2> Change btn text</h2>
                 <Button onClick={btnhandeler} variant="outline-secondary"> 
                 {textchange}
                 </Button>

               <div className='border p-5 bg-warning'>
               <p className="">click img </p><hr/>
               <img  onClick={()=>handeler(setDropdown5)} style={{width:'50px'}} src={logo} />
                {Dropdown5 &&(
                    <ul  className=" bg-light w-25 ">
                    <li className="mt-3">Item-1</li>
                    <li>Item-2</li>
                    <li>Item-3</li>
                    <li>Item-4</li>
                    </ul>
                )}
                
               </div>
            </Col>
        </Row>
      
    </Container>
  )
}
