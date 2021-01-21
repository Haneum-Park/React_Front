import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      {/* <Link to="/"></Link> */}
      {/* <Link></Link> */}
    </div>
  );
}

export default Header;