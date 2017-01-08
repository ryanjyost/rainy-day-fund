//src/components/App.js

import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import MenuBar from './MenuBar';

const App = ({children}) =>  {
    const child = children.props.route.component.name;
    return (

        <Grid id="App">
	          {child === "Landing" ? null :  <Row id="MenuBar"><MenuBar/></Row> }
	          <Row>{children}</Row>
	    </Grid>

    );
  }

export default App;
