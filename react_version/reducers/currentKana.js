const currentKana = (state = {}, action) => {
	switch (action.type) {
		case 'GET_ONE_KANA':
			return action.kanas[Math.floor(Math.random() * action.kanas.length)];
		default:
			return state;
	}
};

export default currentKana;