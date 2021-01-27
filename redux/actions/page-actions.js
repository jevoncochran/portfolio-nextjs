export const SET_PAGE_HOME_START = "SET_PAGE_HOME_START";
export const SET_PAGE_HOME_SUCCESS = "SET_PAGE_HOME_SUCCESS";
export const LEAVE_HOME_PAGE_START = "LEAVE_HOME_PAGE_START";
export const LEAVE_HOME_PAGE_SUCCESS = "LEAVE_HOME_PAGE_SUCCESS";

export const activateHome = () => (dispatch) => {
  dispatch({ type: SET_PAGE_HOME_START });
  dispatch({ type: SET_PAGE_HOME_SUCCESS });
};

export const deactivateHome = () => (dispatch) => {
  dispatch({ type: LEAVE_HOME_PAGE_START });
  dispatch({ type: LEAVE_HOME_PAGE_SUCCESS });
};
