import React from "react";

/*
* The problem that we're solving here using Context is
* we need to read the location, animal and breed from
* SearchParams page and use it to search on the results page.
* */

// React will create a 2 new components for you: a provider and a consumer
// provider will make data available, consumer will read it. regardless of distance.
const SearchContext = React.createContext({
	location: "Albuquerque, NM",
	animal: "",
	breed: "",
	breeds: [],
	handleAnimalChange() {},
	handleBreedChange() {},
	handleLocationChange() {},
	getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;