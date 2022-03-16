import * as React from 'react';
import { Link } from 'gatsby';

import { StyledMenu } from './StyledMenu';

export const Menu = () => (
  <StyledMenu>
    <li>
      <Link to="/film" activeClassName={'active'} partiallyActive={true}>
        Films
      </Link>
    </li>
    <li>
      <Link to="/location" activeClassName={'active'} partiallyActive={true}>
        Locations
      </Link>
    </li>
    <li>
      <Link to="/staff" activeClassName={'active'} partiallyActive={true}>
        Staff
      </Link>
    </li>
  </StyledMenu>
);
