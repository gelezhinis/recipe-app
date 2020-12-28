import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => (
   <Link to="/recipe-app" className="logo">
      Recepies<span>.</span>
   </Link>
);

export default Logo;
