import Para from "../../components/Para";
import { NavLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Typography from "../../components/Typography";
import styles from "./Stories.module.scss";

const GET_STORIES = gql`
  {
    stories {
      title
      content
    }
  }
`;

const Stories = () => {
  // get data using useQuery hook
  const { loading, error, data } = useQuery(GET_STORIES);
  console.log("****", loading, error, data);
  return (
    <div className={styles.stories}>
      <div className={styles["left-panel"]}>
        <div className={styles.categories}>
          <ul>
            <li className={styles.active}>
              <NavLink to={"/"}>Javascript</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>React</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Vue</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Node</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>MongoDB</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles["story-items"]}>
          <div className={styles.story}>
            <Typography text="Intuitive Explanation of XGBoost" />
            <Para>
              A simple explanation and implementation of the most popular
              machine learning algorithm — XGBoost is a machine-learning
              algorithm that can be compared to a guessing game, similar to...
            </Para>
          </div>
        </div>
      </div>
      <div className={styles["right-panel"]}>
        <h2>Others</h2>
      </div>
    </div>
  );
};

export default Stories;
