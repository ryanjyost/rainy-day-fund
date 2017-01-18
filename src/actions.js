//src/actions.js

//=============================================
// Assumptions
//=============================================

export const UPDATE_INCOME_SOURCES = 'UPDATE_INCOME_SOURCES';
export const UPDATE_INCOME = 'UPDATE_INCOME';
export const UPDATE_SAVINGS = 'UPDATE_SAVINGS';

//action creators
export const updateIncomeSources = (sources) => {
	return {type: UPDATE_INCOME_SOURCES , sources}
}

export const updateIncome = (income) => {
	return {type: UPDATE_INCOME, income}
}

export const updateSavings = (savings) => {
	return {type: UPDATE_SAVINGS, savings}
}