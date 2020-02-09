import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTasks } from "../../redux/actions/taskActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = props => {
  const { toggle, modal, fetchAllTasks, tasks } = props;

  const [availableTasks, setAvailableTasks] = useState(tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      fetchAllTasks();
    }
  }, []);

  const [markTask, setMarkTask] = useState({
    taskName: "",
    description: ""
  });

  const { taskName, description } = markTask;

  console.log(taskName);

  const [completed, setCompleted] = useState(false);

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setMarkTask({
      ...markTask,
      [name]: value
    });
  };

  // setting the completed status
  const handleCheckBox = event => {
    event.preventDefault();
    setCompleted(!completed);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`${taskName} ${description} ${completed}`);
  };

  console.log(tasks);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit a Task</ModalHeader>
      <ModalBody>
        {tasks.length === 0 ? (
          "No tasks to mark"
        ) : (
          <form>
            <div className="form-group col-sm-12 col-md-5">
              <label>Task</label>
              <select
                className="form-control"
                name="taskName"
                value={taskName}
                onChange={handleChange}
              >
                {tasks.map(({ taskName, description }, index) => (
                  <option key={index} value={`${taskName} ${description}`}>
                    {description} - {taskName}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="completed"
                onChange={handleCheckBox}
              />
              <label className="form-check-label">Completed</label>
            </div>
          </form>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Edit
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.filter(task => !task.completed)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: () => dispatch(fetchAllTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
