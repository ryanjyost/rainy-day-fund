//src/components/MenuBar.js

import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const Menubar = () => {
  return (
          <ButtonGroup justified>
            <Button className="menu-btn" href="/#/what-is-a-rainy-day-fund">What's an Emergency Fund?</Button>
            <Button className="menu-btn" href="/#/assumptions">Assumptions</Button>
            <Button className="menu-btn" href="/#/expenses">Expenses</Button>
            <Button className="menu-btn" href="/#/savings-plan">Savings Plan</Button>
          </ButtonGroup>
  )
}

export default Menubar;
