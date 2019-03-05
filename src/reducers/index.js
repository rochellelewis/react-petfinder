import {combineReducers} from "redux";
import location from './location';

// combineReducers is a convenience function from Redux so you don't have to write your own root reducer.
export default combineReducers({
	location
});