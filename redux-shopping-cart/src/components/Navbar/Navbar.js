import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="{styles.nacbar__cart"></div>
      </Link>

    </div>
  )
}
