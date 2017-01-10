//src/components/Expense.js

import React from 'react';
import {FormControl, InputGroup } from 'react-bootstrap';
import {formatDollarValues} from '../helpers'


const Expense = () =>  {
    return (
        <li className="expense-item">

            <FormControl
                className="expense-name"
                type="text"
                placeholder="Expense item"
            />

            <InputGroup className="expense-amt-group">
                <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>

                <FormControl
                    className="expense-amt"
                    type="text"
                    defaultValue={formatDollarValues(100)}
                    onChange={(e)=>
                        e.target.value = formatDollarValues((e.target.value).replace(",",""))
                    }
                />
            </InputGroup>

        </li>
    );
}

export default Expense;
