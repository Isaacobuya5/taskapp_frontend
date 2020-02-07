import React,{useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = (props) => {
    console.log(props)
    const {  toggle, modal } = props;
    // console.log(props)
    // const [currentTask, setCurrentTask] = useState(userTasks);
    
    // const {task, completed} = currentTask;
    // state for task name
// const [taskName, setTask] = useState(task)


// state for completed status
// const [completeStatus, setCompleteStatus ] = useState(completed);

// setting the task name
const handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    // setCurrentTask(value)
}

// setting the completed status
const handleCheckBox = event => {
    event.preventDefault();
    // setCompleteStatus(!completed)
}

return (
     <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit a Task</ModalHeader>
        <ModalBody>
        <form>
  <div className="form-group">
    <label>Task</label>
    <input type="text" className="form-control"  name="taskName" onChange={handleChange} />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" name="completed" onChange={handleCheckBox} />
    <label className="form-check-label">Completed</label>
  </div>
</form>
</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Edit</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
)
}

export default EditTask;