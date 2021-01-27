import {
  SET_PAGE_HOME_START,
  SET_PAGE_HOME_SUCCESS,
  LEAVE_HOME_PAGE_START,
  LEAVE_HOME_PAGE_SUCCESS,
} from "../actions";

const initialState = {
  onHomePage: true,
  isLoading: false,
};

export const page = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_HOME_START:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PAGE_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onHomePage: true,
      };
    case LEAVE_HOME_PAGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case LEAVE_HOME_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onHomePage: false,
      };
    default:
      return state;
  }
};
