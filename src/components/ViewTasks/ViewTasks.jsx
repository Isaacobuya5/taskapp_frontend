import React, {useState, useEffect} from "react";
import {Table} from "reactstrap";

import { fetchAllTasks } from "../../redux/actions/taskActions";
import {connect} from "react-redux";

import ButtonComponent from "../Button/Button";
import EditTask from "../EditTask/EditTask";

const ViewTasks = ({fetchAllTasks, tasks}) => {

    // initial state of modal window
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

useEffect(() => {
    fetchAllTasks();
}, [])

return (
    <div className="tasks-list">
    <h4>List of Tasks</h4>
    {tasks.length === 0 ? "No tasks available" :
    <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Completed</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
    {tasks.map(({task, completed}, index) => (
        // <div key={index}>{task} {completed} </div>
        <tr key={index}>
    <th scope="row">{index + 1}</th>
    <td>{task}</td>
    <td>{String(completed)}</td>
    <td><ButtonComponent color="success" displayName="Edit Task" click={toggle}/></td>
    <td><ButtonComponent color="danger" displayName="Delete Task"/></td>
            </tr>
    ))}
    </tbody>
    </Table>
    
    }
    <EditTask modal={modal} toggle={toggle} />
    </div>
)


}

const mapStateToProps = ({tasks}) => {
    return {
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
fetchAllTasks: () => dispatch(fetchAllTasks())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewTasks);