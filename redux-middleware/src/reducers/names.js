export default function listReducer (state = [], action) {
	if (action.type === 'GET_NAMES_OK') {
		return action.names;
	}
	return state;
}