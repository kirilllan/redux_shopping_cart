import React from 'react'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        <CartItem />
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
