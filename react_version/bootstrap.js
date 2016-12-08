import actions from './actions';

const bootstrap = store =>
	Promise.all([
		store.dispatch(actions.getOneKana(store.getState().kanas))
	])

export default bootstrap;
