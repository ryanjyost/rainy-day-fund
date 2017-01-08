//src/components/Assumptions.js

import React from 'react';
import { FormGroup, Row, ControlLabel, FormControl, Button } from 'react-bootstrap';

import {formatDollarValues} from '../helpers'

const Assumptions = () => {
	return (
		<div id="Assumptions">
			<FormGroup id="assumptions-form">
				<Row className="assumption">
						<ControlLabel className="control-label">
							<h4>Which of the following best applies to you?</h4>
						</ControlLabel>
						<FormControl componentClass="select" id="select-income-src">
				        	<option value="1" selected>Single, one source of income</option>
				        	<option value="2">Single, two solid sources of income</option>
				        	<option value="2">Married, we both have income</option>
				        	<option value="1">Married, only one of us has income</option>
				        </FormControl>
			     </Row>


			    <Row className="assumption">
					<ControlLabel className="control-label" >
						<h4>How much do you earn, <a href="http://www.investopedia.com/terms/a/aftertaxincome.asp" target="_blank">after-tax</a>, a month?</h4>
					</ControlLabel>

					<div className="input-cont">
						<span className="dollar-sign">$</span>
						<FormControl //Income input
				          	id="income"
				          	className="dollar-input"
				          	defaultValue={formatDollarValues(1000)}
				          	type="text"
				          	maxLength="7"
				          	onChange={(e)=>
				          		e.target.value = formatDollarValues((e.target.value).replace(",",""))
				          	}
				        />
			        </div>
			    </Row>

			    <Row className="assumption">
					<ControlLabel className="control-label" >
						<h4>How much do you have in savings?</h4>
					</ControlLabel>

					<div className="input-cont">
					<span className="dollar-sign">$</span>
						<FormControl //Savings input
				          	id="initialSavings"
				          	className="dollar-input"
				          	defaultValue={formatDollarValues(1000)}
				          	type="text"
				          	maxLength="7"
				          	onChange={(e)=>
				          		e.target.value = formatDollarValues((e.target.value).replace(",",""))
				          	}
				        />
			        </div>
			    </Row>
			</FormGroup>

			<Button className="nav-btn" href="/#/expenses" block>
				Next Step: Add up your monthly expenses
			</Button>
		</div>
	)
}

export default Assumptions;
