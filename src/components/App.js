//src/components/App.js

import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const App = ({children}) =>  {
    return (

        <Grid>
	          <Row>
	            {children}
	          </Row>
	    </Grid>

    );
  }

export default App;
