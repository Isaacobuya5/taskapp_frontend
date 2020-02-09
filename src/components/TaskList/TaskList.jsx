import React, { useState, useEffect } from "react";

import { Table, Button } from "reactstrap";
import ButtonComponent from "../Button/Button";
import EditTask from "../EditTask/EditTask";

import {
  fetchAllTasks,
  deleteAvailableTask,
  markTask
} from "../../redux/actions/taskActions";
import { getAllTasks } from "../../api/taskApi";
import { connect } from "react-redux";

const ViewTasks = props => {
  const { fetchAllTasks, tasks, deleteAvailableTask, markTask } = props;

  const [availableTasks, setAvailableTasks] = useState(tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      getAllTasks()
        .then(response => {
          console.log(response);
          setAvailableTasks(response);
        })
        .catch(error => console.log(error));
    }
  }, [tasks]);

  console.log(tasks);

  // initial state of modal window
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="tasks-list">
      <h4>List of Tasks</h4>
      {availableTasks.length === 0 ? (
        "Loading..."
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Mark Uncomplete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {availableTasks.map((taskObject, index) => (
              // <div key={index}>{task} {completed} </div>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{taskObject.task}</td>
                <td>{taskObject.description}</td>
                <td>{String(taskObject.completed)}</td>
                <td>
                  {String(taskObject.completed) === "false" ? (
                    <ButtonComponent
                      color="success"
                      displayName="Mark Complete"
                      mark={markTask}
                      taskObject={taskObject}
                    />
                  ) : (
                    "Completed"
                  )}
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

const completedTasksFirst = tasks => {
  return tasks.sort((a, b) => {
    if (a.completed === b.completed) {
      return 0;
    } else if (b.completed > a.completed) {
      return 1;
    } else {
      return -1;
    }
  });
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks: completedTasksFirst(tasks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks()),
    deleteAvailableTask: task => dispatch(deleteAvailableTask(task)),
    markTask: task => dispatch(markTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTasks);
