const elementStatus = (state = {}, action) => {
	switch (action.type) {
		case 'FLIP_CARD':
			const oldStatus = state[`${action.card}Flipped`] || false;
			return {
				...state,
				[`${action.card}Flipped`]: !oldStatus
			};
		default:
			return state;
	}
};

export default elementStatus;
