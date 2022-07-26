import React,{useState} from 'react'
import { Button, Modal, ModalHeader,Input, ModalBody, ModalFooter,Form ,FormGroup ,Label} from 'reactstrap';

export default function Modals({modal,toggle ,save}) {
    const [taskName, setTaskName] = useState('');
    const [discreption, setDescription] = useState('');


const handelChange=(e)=>{
 const {name ,value}=e.target
 if(name === 'taskName'){
    setTaskName(value)
 }else{
    setDescription(value)
 }
}
    const handleSave=()=>{
        let taskobj= {}
        taskobj["taskName"] = taskName
        taskobj["discreption"] = discreption
        save(taskobj)
        
    }
  return (
    <div>
     <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Todo </ModalHeader>
        <ModalBody>
         <Form>
         <FormGroup>
    <Label for="task name">
      Name
    </Label>
    <Input
      id="exampleEmail"
      name="taskName"
      placeholder="with a placeholder"
      type="text"
      value={taskName}
      onChange={handelChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="discreption"
      type="textarea"
      value={discreption}
      onChange={handelChange}
    />
  </FormGroup>

         </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
