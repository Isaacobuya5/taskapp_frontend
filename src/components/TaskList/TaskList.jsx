import React, { useState, useEffect } from "react";

import { Table } from "reactstrap";
import ButtonComponent from "../Button/Button";
import EditTask from "../EditTask/EditTask";

import {
  fetchAllTasks,
  deleteAvailableTask
} from "../../redux/actions/taskActions";
import { connect } from "react-redux";

const ViewTasks = props => {
  const { fetchAllTasks, tasks, deleteAvailableTask } = props;

  useEffect(() => {
    fetchAllTasks();
  }, []);

  console.log(tasks);

  // initial state of modal window
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="tasks-list">
      <h4>List of Tasks</h4>
      {tasks.length === 0 ? (
        "Loading..."
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((taskObject, index) => (
              // <div key={index}>{task} {completed} </div>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{taskObject.task}</td>
                <td>{taskObject.description}</td>
                <td>{String(taskObject.completed)}</td>
                <td>
                  <ButtonComponent
                    color="success"
                    displayName="Edit Task"
                    click={toggle}
                    taskObject={taskObject}
                  />
                </td>
                <td>
                  <ButtonComponent
                    color="danger"
                    displayName="Delete Task"
                    click={deleteAvailableTask}
                    taskObject={taskObject}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <EditTask modal={modal} toggle={toggle} />
    </div>
  );
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks()),
    deleteAvailableTask: task => dispatch(deleteAvailableTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTasks);
