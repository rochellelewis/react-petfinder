export default function locationReducer(state = 'Albuquerque, NM', action) {

	if (action.type === "SET_LOCATION") {
		return action.payload;
	} else {
		return state;
	}

}

//A sample test for this reducer
/*
test("locationReducer", () => {
	expect(locationReducer("Albuquerque, NM", {type: "SET_LOCATION", payload: "San Francisco, CA"})).toBe("San Francisco");
});
*/