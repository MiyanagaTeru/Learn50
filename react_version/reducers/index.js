import { combineReducers } from 'redux';
import kanas from './kanas';
import currentKana from './currentKana';

const reducers = combineReducers({
	kanas,
	currentKana
})

export default reducers;