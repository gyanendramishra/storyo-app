import { NavLink } from "react-router-dom";
import Navigation from "../../components/Navigation";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to={"/"}>
        <span>S</span>t<span>o</span>ry<span>o</span>
      </NavLink>
      <Navigation />
    </header>
  );
}
