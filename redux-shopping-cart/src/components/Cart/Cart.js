import React from 'react'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'
import { connect } from 'react-redux'

function Cart({ cart }) {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map(_ => (<CartItem />))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: (1 items)</span>
          <span>$ 15.00</span>
        </div>
        <button className={styles.summary__checkoutBtn}>Proceed to checkout</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart)