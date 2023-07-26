import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import NavigationStyles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={NavigationStyles.navigation_links}>
          <li className={NavigationStyles.navigation_link}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? NavigationStyles.navigation__ink_active : NavigationStyles.link
              }>
              Home
            </NavLink>
          </li>
          <li className={NavigationStyles.navigation_link}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? NavigationStyles.navigation__ink_active : NavigationStyles.link
              }>
              About
            </NavLink>
          </li>
          <li className={NavigationStyles.navigation_link}>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? NavigationStyles.navigation__ink_active : NavigationStyles.link
              }>
              Team
            </NavLink>
          </li>
          <li className={NavigationStyles.navigation_link}>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? NavigationStyles.navigation__ink_active : NavigationStyles.link
              }>
              Shop
            </NavLink>
          </li>
          <li className={NavigationStyles.navigation_link}>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive ? NavigationStyles.navigation__ink_active : NavigationStyles.link
              }>
              Pages
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/team" />
        <Route path="/shop" />
        <Route path="/pages" />
      </Routes>
    </div>
  );
};

export default Navigation;
