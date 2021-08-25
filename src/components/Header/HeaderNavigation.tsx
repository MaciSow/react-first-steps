import React from "react";
import {NavLink} from "react-router-dom"
import styles from "./HeaderNavigation.module.scss"

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItem__LinkActive} className={styles.navItem__Link} to="/">twitters</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItem__LinkActive} className={styles.navItem__Link} to="/articles">articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItem__LinkActive} className={styles.navItem__Link} to="/notes">notes</NavLink>
            </li>
        </ul>
    </nav>
)

export default HeaderNavigation