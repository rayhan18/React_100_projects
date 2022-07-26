import React ,{useState} from 'react'
import { Card,Button, Container, Row, Col } from 'react-bootstrap'
import Update from './Update'


export default function TodoCard({taskObj ,index,deleteTask ,updateArray}) {
    const [modal, setModal] = useState(false);

    const handleDelet=()=>{
        deleteTask(index)
    }
    const toggle=()=>{
        setModal(!modal)
       }
     const updateTask=(obj)=>{
        updateArray(obj ,index)
     }
     
  return (
    <div >
        <Container>
             <Row>
                <Col className='mb-3 d-flex'>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{taskObj.taskName}</Card.Title>
                        <Card.Text>
                        {taskObj.discreption}
                        </Card.Text>
                        <Button onClick={handleDelet} variant="dangar">Delete</Button>
                        <Button onClick={()=> setModal(true)}  variant="primary">update</Button>
                    </Card.Body>
                    </Card>
                </Col>
             </Row>
        </Container>
       
       <Update modal={modal} toggle={toggle} updateTask={updateTask} taskobj={taskObj} />
    </div>
  )
}
