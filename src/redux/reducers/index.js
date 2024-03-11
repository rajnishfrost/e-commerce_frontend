import changeTheNumber from "./upDown";
import cartData from "./cartData"
import savingAPI from "./savingAPI";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeTheNumber , cartData , savingAPI});

export default rootReducer ;