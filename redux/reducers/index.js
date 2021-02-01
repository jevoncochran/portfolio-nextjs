import { combineReducers } from "redux";

import { page } from "./page-reducer";
import { project } from "./project-reducer";
import { nav } from "./nav-reducer";

export default combineReducers({ page, project, nav });
