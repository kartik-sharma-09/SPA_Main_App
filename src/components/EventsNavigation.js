import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            
            <NavLink
              to="/events"
              className={({ isactive }) =>
                isactive ? classes.active : undefined
              }
              end
            >
          All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isactive }) =>
                isactive ? classes.active : undefined
              }
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
