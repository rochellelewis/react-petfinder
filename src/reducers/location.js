export default function locationReducer(state = 'Albuquerque, NM', action) {

	if (action.type === "SET_LOCATION") {
		return action.payload;
	} else {
		return state;
	}

}