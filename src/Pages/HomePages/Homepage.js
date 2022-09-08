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
        name:'Side bar',
        link:'/sidebar',
        imageurl:'https://picsum.photos/id/1015/1000/600/',
        discreption:' Some quick example text to build on the card title and make up the bulk of .'
      },
      {
        id:4 ,
        name:'Images galary',
        link:'/image-gallery',
        imageurl:'https://picsum.photos/id/1019/1000/600/',
        discreption:' Use image gallery packege  .'
      },
      {
        id:5 ,
        name:'Password generator',
        link:'/password-generator',
        imageurl:'https://picsum.photos/id/1015/1000/600/',
        discreption:' Use Father icon, React toastify.'
      },
      {
        id:6 ,
        name:'Dropdown',
        link:'/dropdown',
        imageurl:'https://picsum.photos/id/1015/1000/600/',
        discreption:' Dropdown item with Hooks .'
      },
      {
        id:7 ,
        name:'Todo list',
        link:'/todos',
        imageurl:'',
        discreption:'Todo list .'
      },
      {
        id:8 ,
        name:'Quize App',
        link:'/quize-app',
        imageurl:"https://media.istockphoto.com/vectors/quiz-time-flat-vector-lettering-vector-id1171765499?k=20&m=1171765499&s=612x612&w=0&h=s99INCuNzJXmLMh7LYOQZGUfCMPgvabUcqI0xGDQKSY=",
        discreption:'Quize App.'
      },
      {
        id:9,
        name:'Movi app',
        link:'/movihomepage',
        imageurl:"https://media.istockphoto.com/vectors/quiz-time-flat-vector-lettering-vector-id1171765499?k=20&m=1171765499&s=612x612&w=0&h=s99INCuNzJXmLMh7LYOQZGUfCMPgvabUcqI0xGDQKSY=",
        discreption:'Movi app with api.'
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
           
                  <Card style={{ width: '18rem' }} className="mb-3">
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
