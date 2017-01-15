import request from 'superagent'

const dataService = store => next => action => {
	next(action);
	switch (action.type) {
		case 'GET_NAMES':
			request
				.get('http://localhost:3000/data.json')
				.end((err, res) => {
					
					if (err) {
						return next({
							type: 'GET_NAMES_FAIL',
							err
						});
					}

					const names = JSON.parse(res.text).names;
					next({
						type: 'GET_NAMES_OK',
						names
					});
				})
			break
		default:
			break;
	}
};

export default dataService