import React from "react";
import {ANIMALS} from "petfinder-client";
import {Consumer} from "./SearchContext";

class SearchBox extends React.Component {

	render() {
		return (
			<Consumer>
				{/* context is the state from App */}
				{context => (
					<div className="search-params">
						<label htmlFor="location">
							Location
							<input
								onChange={context.handleLocationChange}
								id="location"
								value={context.location}
								placeholder="enter a location..."
							/>
						</label>
						<label htmlFor="animal">
							Animal
							<select
								id="animal"
								value={context.animal}
								onChange={context.handleAnimalChange}
								onBlur={context.handleAnimalChange}
							>
								<option value="">All Animals</option>

								{
									ANIMALS.map(animal => (
										<option key={animal} value={animal}>{animal}</option>
									))
								}
							</select>
						</label>
						<label htmlFor="breed">
							Breed
							<select
								id="breed"
								value={context.breed}
								onChange={context.handleBreedChange}
								onBlur={context.handleBreedChange}
								disabled={context.breeds.length === 0}
							>
								<option value="">All Breeds</option>

								{context.breeds.map(breed => (
									<option key={breed} value={breed}>{breed}</option>
								))}
							</select>
						</label>
						<button>Submit</button>
					</div>
				)};
			</Consumer>
		);
	}
}

export default SearchBox;