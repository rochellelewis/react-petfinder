import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, compose(
	//thunk allows us to do async actions with redux
	applyMiddleware(thunk),
	typeof window === "object" &&
	typeof window.devToolsExtension !== "undefined"
		? window.devToolsExtension()
		: f => f
	)
);

export default store;
