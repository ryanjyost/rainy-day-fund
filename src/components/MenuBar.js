//src/components/MenuBar.js

import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Menubar = () => {


  return (
          <ButtonGroup id="menu" justified>
            <Button className="menu-btn" href="/#/rainy-day-fund/what-is-a-rainy-day-fund">What's a Rainy Day Fund?</Button>
            <Button className="menu-btn" href="/#/rainy-day-fund/assumptions">Assumptions</Button>
            <Button className="menu-btn" href="/#/rainy-day-fund/expenses">Expenses</Button>
            <Button className="menu-btn" href="/#/rainy-day-fund/savings-plan">Savings Plan</Button>
          </ButtonGroup>
  )
}

export default Menubar;
