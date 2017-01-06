//src/router.js

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'

const Root = () => {
	return(
		<Router history={hashHistory}>
			<Route path="/" component={App} />
		</Router>
	)
}

export default Root;