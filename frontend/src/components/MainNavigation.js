import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation(props) {
  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.navbar}>
          <li>
            <NavLink to="" className={({ isActive }) => isActive ? classes.active : classes.navbar_element} >Home</NavLink>
          </li>
          <li>
            <NavLink to="events" className={({ isActive }) => isActive ? classes.active : classes.navbar_element}>Events</NavLink>
          </li>
          <li>
            <NavLink to="newsletter" className={({ isActive }) => isActive ? classes.active : classes.navbar_element}>Newsletter</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.navbarFunctions}>
        <NewsletterSignup/>
        <span className="material-symbols-outlined"><NavLink to='..' relative='path'>arrow_back</NavLink></span>
        <span className="material-symbols-outlined" onClick={props.onHide}>close</span>
      </div>
    </header>
  );
}

export default MainNavigation;
