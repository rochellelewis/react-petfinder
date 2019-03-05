import {combineReducers} from "redux";
import location from './location';
import animal from "./animal";
import breed from "./breed";
import breeds from  "./breeds";

// combineReducers is a convenience function from Redux so you don't have to write your own root reducer.
export default combineReducers({
	location,
	animal,
	breed,
	breeds
});