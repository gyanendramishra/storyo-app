import { useContext, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { securityActions } from "../../store/slices/SecuritySlice";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { toggleTheme } = useContext(ThemeContext);
  const { token } = useAppSelector((security) => security.security);

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(securityActions.logout());
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/stories">Stories</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Write a new</NavLink>
        </li>
        <li>
          <NavLink
            to="https://www.youtube.com/@SoftwareDevelopmentwithG-cz8eb"
            target="_blank"
          >
            Youtube
          </NavLink>
        </li>
        {token ? (
          <li>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/" onClick={toggleTheme}>
            Switch theme
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
