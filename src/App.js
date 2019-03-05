import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import pf from "petfinder-client";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import NavBar from "./NavBar";
import { Provider } from "./SearchContext";

import {Provider as ReduxProvider} from "react-redux";
import store from "./store";

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

class App extends React.Component {
	// this constructor is here for context
	constructor(props) {
		super(props);

		this.state = {
			animal: "",
			breed: "",
			breeds: [],
			handleAnimalChange: this.handleAnimalChange,
			handleBreedChange: this.handleBreedChange,
			getBreeds: this.getBreeds
		};
	}

	// def use arrow fns w/ event handling! For optmization! (bind is too expensive!)
	handleAnimalChange = event => {
		this.setState(
			{
				animal: event.target.value,
				breed: ""
			},
			this.getBreeds
		);
	};

	handleBreedChange = event => {
		this.setState({
			breed: event.target.value
		});
	};

	getBreeds() {
		if (this.state.animal) {
			petfinder.breed.list({ animal: this.state.animal }).then(data => {
				if (
					data.petfinder &&
					data.petfinder.breeds &&
					Array.isArray(data.petfinder.breeds.breed)
				) {
					this.setState({
						breeds: data.petfinder.breeds.breed
					});
				} else {
					this.setState({ breeds: [] });
				}
			});
		} else {
			this.setState({ breeds: [] });
		}
	}

	render() {
		return (
			<div>
				<NavBar />
				<ReduxProvider store={store}>
					{/* Anything inside of Provider can access the context using the exported Consumer */}
					<Provider value={this.state}>
						<Router>
							<Results path="/" />
							<Details path="/details/:id" />
							<SearchParams path="/search-params" />
						</Router>
					</Provider>
				</ReduxProvider>
			</div>
		);
	}
}

//render code
render(<App />, document.getElementById("root"));
