import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from 'react-loadable';
import NavBar from "./NavBar";

import {Provider} from "react-redux";
import store from "./store";

//parcel will dynamically separate Details in to a separate bundle
const LoadableDetails = Loadable({
	loader: () => import("./Details"),
	loading() {
		return <h1>loading split component...</h1>
	}
});

//you can make these loadables into a higher order component if u wanted to....
const LoadableResults = Loadable({
	loader: () => import("./Results"),
	loading() {
		return <h1>loading split component...</h1>
	}
});

const LoadableSearchParams = Loadable({
	loader: () => import("./SearchParams"),
	loading() {
		return <h1>loading split component...</h1>
	}
});

class App extends React.Component {

	render() {
		return (
			<div>
				<NavBar />
				<Provider store={store}>
					{/* Anything inside of Provider can access the context using the exported Consumer */}
					<Router>
						<LoadableResults path="/" />
						<LoadableDetails path="/details/:id" />
						<LoadableSearchParams path="/search-params" />
					</Router>
				</Provider>
			</div>
		);
	}
}

//render code
render(<App />, document.getElementById("root"));
