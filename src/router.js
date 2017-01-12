//src/router.js

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'
import WhatIsARainyDayFund from './components/WhatIsARainyDayFund'
import Assumptions from './components/Assumptions'
import Expenses from './components/Expenses'
import SavingsPlan from './components/SavingsPlan'

const Root = () => {
	return(
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Landing} />
				<Route path="what-is-a-rainy-day-fund" component={WhatIsARainyDayFund} />
				<Route path="assumptions" component={Assumptions} />
				<Route path="expenses" component={Expenses} />
				<Route path="savings-plan" component={SavingsPlan} />
			</Route>
		</Router>
	)
}

export default Root;