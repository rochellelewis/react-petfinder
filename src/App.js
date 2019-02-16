import React from "react";
import {render} from 'react-dom';
import {Router} from "@reach/router";
import Results from './Results';
import Details from "./Details";
import {Link} from "@reach/router";
import SearchParams from "./SearchParams";

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Link to={"/"}>Adopt Me!</Link>
				</header>
				<Router>
					<Results path="/" />
					<Details path="/details/:id" />
					<SearchParams path="/search-params" />
				</Router>
			</div>
		);
	}
}

//render code
render(<App />, document.getElementById("root"));
