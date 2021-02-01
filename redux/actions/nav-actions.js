export const SHOW_MOBILE_NAV_START = "SHOW_MOBILE_NAV_START";
export const SHOW_MOBILE_NAV_SUCCESS = "SHOW_MOBILE_NAV_SUCCESS";
export const HIDE_MOBILE_NAV_START = "HIDE_MOBILE_NAV_START";
export const HIDE_MOBILE_NAV_SUCCESS = "HIDE_MOBILE_NAV_SUCCESS";

export const showMobileNav = () => (dispatch) => {
  dispatch({ type: SHOW_MOBILE_NAV_START });
  dispatch({ type: SHOW_MOBILE_NAV_SUCCESS });
};

export const hideMobileNav = () => (dispatch) => {
  dispatch({ type: HIDE_MOBILE_NAV_START });
  dispatch({ type: HIDE_MOBILE_NAV_SUCCESS });
};
