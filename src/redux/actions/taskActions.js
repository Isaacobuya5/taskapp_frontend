import * as types from "../action.types";
import { getAllMembers, addingNewTask, deleteTask } from "../../api/taskApi";

export const fetchAllTasksAction = tasks => {
  return {
    type: types.FETCH_TASKS_SUCCESS,
    tasks
  };
};

// save a task
export const saveNewTaskAction = task => {
  return {
    type: types.SAVE_TASK_SUCCESS,
    task
  };
};

export function deleteTaskAction(task) {
  return {
    type: types.DELETE_TASK_SUCCESS,
    task
  };
}

// thunk for fetching added tasks
export const fetchAllTasks = () => {
  return function(dispatch) {
    getAllMembers()
      .then(response => {
        dispatch(fetchAllTasksAction(response));
      })
      .catch(error => console.log(error));
  };
};

// thunk for adding a new task
export function saveNewTask(task) {
  return function(dispatch) {
    return addingNewTask(task)
      .then(() => {
        dispatch(saveNewTaskAction(task));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// thunk for deleting a task
export function deleteAvailableTask(task) {
  return function(dispatch) {
    dispatch(deleteTaskAction(task));
    return deleteTask(task._id)
      .then(() => console.log("successfully deleted"))
      .catch(error => console.log(error));
  };
}
