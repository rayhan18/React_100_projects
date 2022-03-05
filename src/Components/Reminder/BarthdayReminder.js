import React, { useState } from 'react'
import Data from '../Reminder/Data'
import List from '../Reminder/List'
import {Container ,Row} from'react-bootstrap'

function BarthdayReminder() {
  const [people, setPeople] = useState(Data)
  return (
    <Container className="">
      <Row className='mx-auto'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </Row>
    </Container>
  )
}

export default BarthdayReminder

