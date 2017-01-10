//src/components/Expenses.js

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Expense from './Expense'
import TotalExpenses from './TotalExpenses'

const Expenses = () =>  {
    return (
            <div id="Expenses">
                <h4 id="expense-header">What are your monthly expenses?</h4>

                <Button id="add-expense-btn" block>
                  Add an expense
                </Button>

                <ul id="expense-list">
                  <Expense/>
                  <Expense/>
                  <Expense/>
                </ul>

                <TotalExpenses/><br/>

                <Button className="nav-btn" href="/#/savings-plan" block>
                	Next Step: Savings Plan
                </Button>

            </div>
    );
}

export default Expenses;
