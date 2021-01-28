export const SET_PROJECT_START = "SET_PROJECT_START";
export const SET_PROJECT_SUCCESS = "SET_PROJECT_SUCCESS";

export const setProject = (project) => (dispatch) => {
  dispatch({ type: SET_PROJECT_START });
  dispatch({ type: SET_PROJECT_SUCCESS, payload: project });
};
