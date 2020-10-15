import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import logo from '../../assets/imgs/logo.png';

const Menu = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <>
      <nav className="Menu">
        <ol className="Menu--name">
          <img className="Menu--name__logo" src={logo} alt="" />
          <Link className="Menu--name__title" to="/">
            Ilumno
          </Link>
        </ol>
        <ol className="Menu--items">
          <li>
            <Link to="/login">Main</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Menu;
