import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from "./SearchBox";

import {connect} from "react-redux";

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

// this is a class component
class Results extends React.Component {
	// calling the parent component's constructor - passed in props from Pet.
	// this overrides the default constructor from the React.Component
	constructor(props) {
		super(props);

		//define initial state
		this.state = {
			pets: []
		};
	}

	// this is a lifecycle method. renders to the DOM first,
	// then calls this method after the DOM mounted. called once per component
	componentDidMount() {
		this.search();
	}

	search = () => {
		petfinder.pet
			.find({
				output: "full",
				location: this.props.location,
				animal: this.props.animal,
				breed: this.props.breed
			})
			.then(data => {
				let pets;

				// check if data is there
				if (data.petfinder.pets && data.petfinder.pets.pet) {
					if (Array.isArray(data.petfinder.pets.pet)) {
						pets = data.petfinder.pets.pet;
					} else {
						pets = [data.petfinder.pets.pet];
					}
				} else {
					pets = [];
				}

				// store pets into the state declared on line 21
				this.setState({
					pets
				});
			});
	};

	render() {
		//JSX version React.createElement
		return (
			<div className="search">
				<SearchBox search={this.search} />
				{/* transforming the pets array into pets components */}
				{this.state.pets.map(pet => {
					// account for multiple breed values and join if necs.
					let breed;
					if (Array.isArray(pet.breeds.breed)) {
						breed = pet.breeds.breed.join(", ");
					} else {
						breed = pet.breeds.breed;
					}

					// output data on screen
					return (
						<Pet
							key={pet.id}
							animal={pet.animal}
							name={pet.name}
							breed={breed}
							media={pet.media}
							location={`${pet.contact.city}, ${pet.contact.state}`}
							id={pet.id}
						/>
					);
				})}
			</div>
		);
	}
}

// pass the state from Redux store into the props of the component.
const mapStateToProps = ({location, breed, animal}) => ({
	location,
	animal,
	breed
});

//inject location from store into props of ResultsWithContext
export default connect(mapStateToProps)(Results);
