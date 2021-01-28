import { SET_PROJECT_START, SET_PROJECT_SUCCESS } from "../actions";

const initialState = {
  project: null,
  isLoading: false,
};

export const project = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        project: action.payload,
      };
    default:
      return state;
  }
};
