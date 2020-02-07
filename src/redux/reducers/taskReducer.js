import initialState from "../initialState";
import * as types from "../action.types";

// current state of tasks

export const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_SUCCESS:
      return [...action.tasks];
    case types.SAVE_TASK_SUCCESS:
      return [...state, { ...action.task }];
    default:
      return state;
  }
};
