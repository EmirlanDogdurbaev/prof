import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
