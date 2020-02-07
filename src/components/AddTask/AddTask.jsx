import React, {useState} from "react";
import ViewTasks from "../TaskList/TaskList";
import { saveNewTask }  from "../../redux/actions/taskActions";
import {connect} from "react-redux";

const AddTask = ({saveNewTask}) => {


// state for task name and description
const [taskData, setTask] = useState({
    task: "",
    description: ""
})

const {task, description} = taskData;


// state for completed status
const [completed, setIsComplete ] = useState(false);

const [fullTask, setFullTask] = useState("");

// setFullTask({
//     taskName,
//     description
// })



// setting the task name
const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setTask({
        ...taskData,
        [name]: value
    })
}

// setting the completed status
const handleCheckBox = event => {
    event.preventDefault();
    const {checked} = event.target;
    setIsComplete(!completed)
}


const handleSubmit = event => {
event.preventDefault();
saveNewTask({
    task,
    description,
    completed
});
}
    return (
        <div className="task-page">
            <div className="task_form">
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Enter Task Here</label>
    <input type="text" className="form-control" value={task} name="task" onChange={handleChange} />
  </div>
  <div class="form-group">
    <label>Description</label>
    <textarea class="form-control"  rows="3" value={description} name="description" onChange={handleChange}></textarea>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" value={completed} name="completed" onChange={handleCheckBox} />
    <label className="form-check-label">Completed</label>
  </div>
  <button type="submit" className="btn btn-primary">Add Task</button>
</form>
        </div>
        <hr/>
        <ViewTasks />>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
saveNewTask: (task) => dispatch(saveNewTask(task))
    }
}

export default connect(null,mapDispatchToProps)(AddTask);