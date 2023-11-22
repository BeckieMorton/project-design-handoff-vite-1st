import styles from "./NavBar.module.css";
import { Button } from "../../ui/Button/Button";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navBar}>
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
          <a>Events</a>
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
      </nav>
    </div>
  );
};
