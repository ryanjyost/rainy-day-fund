//Landing.js

import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Landing = () =>  {
    return (
        <Grid id="Landing" className="container-fluid">
          <Jumbotron id="landing-jumbotron">
            <h1>Welcome to the Rainy Day Fund App</h1>
            <h6>This is a simple practice app meant to help users understand the purpose of a rainy day fund, a.k.a. an <a href="http://www.investopedia.com/terms/e/emergency_fund.asp" target="_blank">emergency fund</a> and illustrate how to establish one. It's NOT personal financial advice and should NOT be considered as such. This is absolutely NOT a substitute for the advice of a licensed professional! <strong>Illustrative purposes only!</strong></h6>
            <Button href="/#/what-is-a-rainy-day-fund" className="nav-btn">I understand - take me to the app</Button>
          </Jumbotron>
        </Grid>
    );
  }

export default Landing;