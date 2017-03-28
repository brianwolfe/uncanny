import React, { PropTypes } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand> Uncanny </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
