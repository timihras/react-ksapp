import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div className="content-container">
    <div><Link to="/customers">Stranke</Link></div>
    <div><Link to="/pets">Varovanci</Link></div>
  </div>
);

export default MainMenu;