import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles["nav-link"], isActive ? styles.active : ""].join(" ")
            }
          >
            Головна
          </NavLink>
        </li>
		  <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              [styles["nav-link"], isActive ? styles.active : ""].join(" ")
            }
          >
            Магазин
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              [styles["nav-link"], isActive ? styles.active : ""].join(" ")
            }
          >
            Контакти
          </NavLink>
        </li>
		  <li>
          <NavLink
            to="/payments-rule"
            className={({ isActive }) =>
              [styles["nav-link"], isActive ? styles.active : ""].join(" ")
            }
          >
            Правила оплати
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
