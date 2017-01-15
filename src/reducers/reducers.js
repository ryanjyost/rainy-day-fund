//src/reducers/reducers.js

import {UPDATE_INCOME} from '../actions'

const initialAssumptionsState = {
   income: 0,
}

const assumptionsReducer = function(state=initialAssumptionsState, action){
	switch(action.type){
		case UPDATE_INCOME:
			return Object.assign({}, state, {income: action.income})

		default: return state;
	}
}

export {assumptionsReducer};