import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import Results from "./Results";
import SearchParams from "./SearchParams";

import { Provider } from "react-redux";
import store from "./store";

//parcel will dynamically separate Details in to a separate bundle. just a test.
const LoadableDetails = Loadable({
	loader: () => import("./Details"),
	loading() {
		return <h1>loading split component...</h1>;
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
						<Results path="/" />
						<LoadableDetails path="/details/:id" />
						<SearchParams path="/search-params" />
					</Router>
				</Provider>
			</div>
		);
	}
}

//render code
render(<App />, document.getElementById("root"));
