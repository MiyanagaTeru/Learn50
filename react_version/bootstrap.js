import actions from './actions';

const bootstrap = store =>
	Promise.all([
		store.dispatch(actions.getOneKana())
	])

export default bootstrap;
