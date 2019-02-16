import React from "react";

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
			</div>
		);
	}
}

export default SearchParams;