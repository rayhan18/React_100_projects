import React, { Component } from 'react'
import { Container ,Row,Col,Card ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bday from '../../Assets/Images/bday-541.gif'

export default class Homepage extends Component {

componentDidMount(){
  const uri =""

}

  render() {
    const cards=[
      {
        id:1 ,
        name:'BarthDay Reminder',
        link:'/reminder',
        imageurl: require('../../Assets/Images/bday-541.gif') ,
        pic:'../../Assets/Images/bday-541.gif',
        discreption:' use: / functional component /class component / hook .'
      },
      {
        id:2 ,
        name:'Toure Packeg',
        link:'/tour',
        imageurl: require('../../Assets/Images/international.jpg') ,
        discreption:' use: api / Hooks / awit function.'
      },
      {
        id:3 ,
        name:'BarthDay Reminder',
        link:'',
        pic:'',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      },
      {
        id:4 ,
        name:'BarthDay Reminder',
        link:'',
        pic:'',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      }
    ]
    return (
      <>
      <Container className="mt-5">
        <Row>
        {
              cards.map(item=>{
                return(
          <Col sm={12} md={4} lg={3} className=" d-flex" key={item.id}>
           
                  <Card style={{ width: '18rem' }} >
                    <Link to={item.link}>
                  <Card.Img variant="top" src={item.imageurl}/>
                  {/* <Card.Img variant="top" src={bday}/> */}
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                     {item.discreption}
                    </Card.Text>
                  
                  </Card.Body>
                  </Link>
                </Card>
               
            
         
          </Col>
                )
              })
          }
        </Row>
      </Container>
      </>
    )
  }
}
