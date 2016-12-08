import { combineReducers } from 'redux';
import kanas from './kanas';
import elementStatus from './elementStatus';

const reducers = combineReducers({
	kanas,
	elementStatus
})

export default reducers;