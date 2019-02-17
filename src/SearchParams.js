import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
	// navigate to results view on submit, /search-params route
	handleSearchSubmit() {
		navigate(`${process.env.PUBLIC_URL}/`);
	}

	render() {
		return (
			<div className="search-route">
				<SearchBox search={this.handleSearchSubmit} />
			</div>
		);
	}
}

export default SearchParams;
