import React, { Component } from 'react'
import { Container ,Row,Col,Card ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class Homepage extends Component {



  render() {
    const cards=[
      {
        id:1 ,
        name:'BarthDay Reminder',
        link:'',
        img:'',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      },
      {
        id:2 ,
        name:'BarthDay Reminder',
        link:'',
        img:'',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      },
      {
        id:3 ,
        name:'BarthDay Reminder',
        link:'',
        img:'',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      },
      {
        id:4 ,
        name:'BarthDay Reminder',
        link:'',
        img:'',
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
                  <Card.Img variant="top" src="holder.js/100px180" />
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
