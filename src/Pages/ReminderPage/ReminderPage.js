import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BarthdayReminder from '../../Components/Reminder/BarthdayReminder'

export default class ReminderPage extends Component {
    constructor(){
      super()
      this.state={
        Title:"Reminder Page",
        discreption:" use: / functional component /class component / hook"
      }
    }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center alignItem-center">
            <Col className="text-center">
            <h1>{this.state.Title}</h1>
            <p>{this.state.discreption}</p>
              <BarthdayReminder/>
            </Col>
          </Row>
        </Container>
         
      </>
    )
  }
}
