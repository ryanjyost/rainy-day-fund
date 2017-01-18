//src/reducers/reducers.js

import * as types from '../actions';

//=================================
// Assumptions Reducer
//=================================

const initialAssumptionsState = {
	  incomeSources: 1,
	  income: 0,
	  initialSavings: 0
};

const assumptionsReducer = function(state=initialAssumptionsState, action){
	switch(action.type){
		case types.UPDATE_INCOME_SOURCES:
			return Object.assign({}, state, {incomeSources: action.sources})

		case types.UPDATE_INCOME:
			return Object.assign({}, state, {income: action.income})

		case types.UPDATE_SAVINGS:
			return Object.assign({}, state, {initialSavings: action.savings})

		default: return state;
	}
}

export {assumptionsReducer};