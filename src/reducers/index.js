//src/reducers/index.js

import { combineReducers } from 'redux';

import { assumptionsReducer, expensesReducer } from './reducers';

const appReducer = combineReducers({
    assumptions: assumptionsReducer,
    expenses: expensesReducer,
});


export default appReducer;

