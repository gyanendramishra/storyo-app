import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ThemeContext, { themes } from "../../context/ThemeContext";
import styles from "../Layout.module.scss";

const PrimaryLayout = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Fragment>
      <div
        className={`${styles.layout} ${
          themeContext.theme === themes.default ? styles.light : styles.dark
        }`}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default PrimaryLayout;
