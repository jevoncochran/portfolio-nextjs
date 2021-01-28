import { combineReducers } from "redux";

import { page } from "./page-reducer";
import { project } from "./project-reducer";

export default combineReducers({ page, project });
