import {
  SHOW_MOBILE_NAV_START,
  SHOW_MOBILE_NAV_SUCCESS,
  HIDE_MOBILE_NAV_START,
  HIDE_MOBILE_NAV_SUCCESS,
} from "../actions";

const initialState = {
  mobileNavVisibile: false,
  isLoading: false,
};

export const nav = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MOBILE_NAV_START:
      return {
        ...state,
        isLoading: true,
      };
    case SHOW_MOBILE_NAV_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mobileNavVisibile: true,
      };
    case HIDE_MOBILE_NAV_START:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_MOBILE_NAV_SUCCESS:
      return {
        ...state,
        isLoading: true,
        mobileNavVisibile: false,
      };
    default:
      return state;
  }
};
