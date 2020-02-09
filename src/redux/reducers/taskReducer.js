import initialState from "../initialState";
import * as types from "../action.types";

// current state of tasks

export const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_SUCCESS:
      return [...action.tasks];
    case types.SAVE_TASK_SUCCESS:
      return [...state, { ...action.task }];
    case types.DELETE_TASK_SUCCESS:
      return state.filter(task => task._id !== action.task._id);
    case types.MARK_TASK_COMPLETED:
      return state.map(task =>
        task._id === action.task._id ? action.task : task
      );
    default:
      return state;
  }
};
