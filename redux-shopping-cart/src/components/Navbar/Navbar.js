import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { connect } from 'react-redux'

function Navbar({ cart }) {

  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    let count = 0
    cart.forEach(item => {
      count += item.quantity
    })
    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img className={styles.cart__image}
            src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE="
            alt="image of shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)