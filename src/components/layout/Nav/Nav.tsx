import { SignOut } from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export type NavItem = {
  path: string;
  name: string;
  icon: React.ReactElement;
};

type NavProps = {
  items: NavItem[];
  onLogout: () => void;
};

const Nav = ({ items, onLogout }: NavProps) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map(({ path, name, icon }) => (
          <li key={path} className="nav__item">
            <NavLink to={path} className="nav__link">
              {React.cloneElement(icon, { className: "nav__icon" })}
              <p className="nav__text">{name}</p>
            </NavLink>
          </li>
        ))}
        <li className="nav__item nav__item--reverse">
          <button onClick={onLogout} className="nav__link">
            <SignOut className="nav__icon" />
            <p className="nav__text">Выход</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
