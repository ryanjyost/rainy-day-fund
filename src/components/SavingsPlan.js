//src/components/SavingsPlan.js

import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import {formatDollarValues, calcTotalExpenses} from '../helpers'


const SavingsPlan = ({assumptions, expenses, monthlySavings, handleUpdateMonthlySavings}) =>  {
        // if(assumptions.income === 0 || calcTotalExpenses(expenses) === 0){
        //     return (
        //         <div>
        //             <h3 className="warning-text">
        //                 {assumptions.income === 0 ? `You need to input your income on the Assumptions tab!` : '' }
        //             </h3>
        //             <h3 className="warning-text">
        //                 {calcTotalExpenses(expenses) === 0 ? `You need to tally up your expenses on the Expenses tab!` : '' }
        //             </h3>
        //         </div>
        //     )
        // }
        // else{

            const   rawInitialSavings = Number(assumptions.initialSavings),
                    rawMonthlyExpenses = calcTotalExpenses(expenses),
                    incomeSources = Number(assumptions.incomeSources),
                    initialSavings = formatDollarValues(assumptions.initialSavings),
                    monthsOfExpenses = Number(6/incomeSources),
                    monthlyExpenses = formatDollarValues(rawMonthlyExpenses),
                    rawSavingsGoal = monthsOfExpenses*rawMonthlyExpenses,
                    savingsGoal = formatDollarValues(monthsOfExpenses*rawMonthlyExpenses),
                    savingsDeficit = formatDollarValues(rawSavingsGoal - rawInitialSavings);

            return (
                <div id="SavingsPlan">
                    <h1>Savings Plan</h1>

                    <h3>You have <strong>{incomeSources}</strong> {incomeSources === 1 ? 'source' : 'sources'} of income, so you'll want your emergency fund to cover <strong>{monthsOfExpenses}</strong> months of expenses.</h3>{' '}<br/>

                    <h3>Based on your monthly expenses of <strong>${monthlyExpenses}</strong>, your savings goal is <strong>${savingsGoal}</strong>.</h3>{' '}<br/>

                    <h3>Because you <strong>{rawInitialSavings > 0 ? `already have $${initialSavings}` : `don't have anything saved yet`}</strong>  in your emergency fund, you need to save {rawInitialSavings > 0 ? 'an additional' : ''} <strong>${savingsDeficit}</strong> to reach your goal.</h3>{' '}<br/>


                    <h3> If you save </h3>
                    <div className="input-cont">
                            <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>
                            <FormControl
                                id="monthlySavings"
                                className="dollar-input"
                                defaultValue={formatDollarValues(50)}
                                type="text"
                                maxLength="7"
                                onChange={(e)=>
                                    e.target.value = formatDollarValues((e.target.value).replace(",",""))
                                }
                            />
                    </div>
                    <h3> a.k.a. </h3>
                    <div className="input-cont" id="percent-income-cont">
                            <FormControl
                                id="percent-of-income"
                                className="dollar-input"
                                defaultValue={5}
                                type="text"
                                maxLength="3"
                                onChange={(e)=>
                                    e.target.value = formatDollarValues((e.target.value).replace(",",""))
                                }
                            />
                            <InputGroup.Addon className="dollar-sign">%</InputGroup.Addon>
                    </div>
                    <h3> of your income </h3>
                    <h3> every month, you'll have a fully-funded emergency fund in {' '}</h3>

                    <h3><strong> {Math.ceil(800/50)} {' '} months.</strong></h3>



                </div>
            )
        //}
}

export default SavingsPlan;
