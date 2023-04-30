import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import ThemeContext, { themes } from "../../context/ThemeContext";
import styles from "../Layout.module.scss";

const SecondaryLayout = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Fragment>
      <div
        className={`relative overflow-hidden bg-white ${
          themeContext.theme === themes.default ? styles.light : styles.dark
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <MainHeader />
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10">
            <Outlet />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default SecondaryLayout;
