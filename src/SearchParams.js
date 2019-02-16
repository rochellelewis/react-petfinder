import React from "react";

class SearchParams extends React.Component {
	state = {
		location: "Albuquerque, NM",
		animal: "",
		breed: ""
	};

	render() {
		return (
			<div className="search-params">
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={this.state.location}
						placeholder="location"
					/>
				</label>
			</div>
		);
	}
}

export default SearchParams;