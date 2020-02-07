import * as types from "../action.types";
import { getAllMembers, addingNewTask } from "../../api/taskApi";

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
