import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles["socal-icons"]}></div>
      <div className={styles.nav}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/privacy-policy">Privacy policy</NavLink>
        <NavLink to="/terms-of-use">Terms of use</NavLink>
      </div>
    </footer>
  );
}
