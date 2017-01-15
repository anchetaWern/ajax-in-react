import {
	combineReducers
} from 'redux';
import names from './names';
import status from './status';

const nameList = combineReducers({
	status,
	names
});

export default nameList;