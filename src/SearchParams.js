import React from "react";
import {ANIMALS} from "petfinder-client";

class SearchParams extends React.Component {
	state = {
		location: "Albuquerque, NM",
		animal: "",
		breed: ""
	};

	// handles input change event - data coming in from search field
	handleLocationChange = event => {
		this.setState({
			location: event.target.value
		})
	};

	handleAnimalChange = event => {
		this.setState({
			animal: event.target.value
		});
	};

	render() {
		return (
			<div className="search-params">
				<label htmlFor="location">
					Location
					<input
						onChange={this.handleLocationChange}
						id="location"
						value={this.state.location}
						placeholder="enter a location..."
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={this.state.animal}
						onChange={this.handleAnimalChange}
						onBlur={this.handleAnimalChange}
					>
						<option />
						{
							ANIMALS.map(animal => (
								<option key={animal} value={animal}>{animal}</option>
							))
						}
					</select>
				</label>
			</div>
		);
	}
}

export default SearchParams;