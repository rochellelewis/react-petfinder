import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
	reducer,
	compose(
		//thunk allows us to do async actions with redux
		applyMiddleware(thunk),

		//this is just boilerplate pulled from the redux docs
		typeof window === "object" &&
			typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: f => f
	)
);

export default store;
