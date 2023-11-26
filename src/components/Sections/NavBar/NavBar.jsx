import styles from "./NavBar.module.css";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navigation}>
          <ul>
            <li>
              <Button buttonName="Flow Yoga" />
            </li>
            <li>
              <a>Our Classes</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <Link to={`/events`}>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <Button buttonName="Join!" />
            </li>
            <li>
              <Button buttonName="Log in" />
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.burgerMenu}>
        <img src="./assets/header-frame.png" />
      </div>
    </div>
  );
};
