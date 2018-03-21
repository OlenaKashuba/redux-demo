const favs = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_FAV':
			return state.concat(action.result);
		default:
			return state;
	}
};

export default favs;