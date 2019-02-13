//these components are akin to classes. This is a function component
import React from "react";

export const Pet = props => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed)
	]);
};

export default Pet;