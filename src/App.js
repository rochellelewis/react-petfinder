import React from "react";
import {render} from 'react-dom';
import {Router, Link} from "@reach/router";
import pf from "petfinder-client";
import {Provider} from "./SearchContext";
import Results from './Results';
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
	// this constructor is here for context
	constructor (props) {
		super(props);

		this.state = {
			location: "Albuquerque, NM",
			animal: "",
			breed: "",
			breeds: [],
			handleAnimalChange: this.handleAnimalChange,
			handleBreedChange: this.handleBreedChange,
			handleLocationChange: this.handleLocationChange,
			getBreeds: this.getBreeds
		};
	}

	// handles input change event - data coming in from search field
	handleLocationChange = event => {
		this.setState({
			location: event.target.value
		})
	};

	// def use arrow fns w/ event handling! For optmization! (bind is too expensive!)
	handleAnimalChange = event => {
		this.setState({
			animal: event.target.value,
			breed: ""
		}, this.getBreeds);
	};

	handleBreedChange = event => {
		this.setState({
			breed: event.target.value
		});
	};

	getBreeds() {
		if(this.state.animal) {
			petfinder.breed.list({animal: this.state.animal})
				.then(data => {
					if(
						data.petfinder &&
						data.petfinder.breeds &&
						Array.isArray(data.petfinder.breeds.breed)
					) {
						this.setState({
							breeds: data.petfinder.breeds.breed
						})
					} else {
						this.setState({breeds: []});
					}
				})
		} else {
			this.setState({breeds: []});
		}
	}

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
