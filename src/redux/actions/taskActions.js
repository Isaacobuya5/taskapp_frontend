import * as types from "../action.types";
import {
  getAllTasks,
  addingNewTask,
  deleteTask,
  editTask
} from "../../api/taskApi";

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

// mark task as completed
export function markTaskComplete(task) {
  return {
    type: types.MARK_TASK_COMPLETED,
    task
  };
}

// update task optimistic
export function markTaskOptimistic(task) {
  return {
    type: types.MARK_TASK_COMPLETED,
    task
  };
}

// thunk for fetching added tasks
export const fetchAllTasks = () => {
  return function(dispatch) {
    getAllTasks()
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

// update / mark task
export function markTask(task) {
  return function(dispatch) {
    dispatch(markTaskOptimistic(task));
    return editTask(task)
      .then(() => console.log("succesful"))
      .catch(error => {
        console.log(error);
      });
  };
}
