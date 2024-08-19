import React from "react";
import styles from "./style/NavbarItem.module.css"

function NavbarItem({ render, ...props }) {
  if (render) {
    return (
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={props.onClick} href={props.href}>
          {props.label}
        </a>
      </li>
    );
  } else {
    return false;
  }
}

export default NavbarItem;
