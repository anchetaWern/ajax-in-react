const status = (state = false, action) => {
	switch (action.type) {
		case 'GET_NAMES':
			return true;
		case 'GET_NAMES_OK':
			return false;
		case 'GET_NAMES_FAIL':
			return false;
		default:
			return state;
	}
}

export default status;