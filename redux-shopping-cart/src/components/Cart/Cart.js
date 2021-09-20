import React, { useEffect, useState } from 'react'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'
import { connect } from 'react-redux'

function Cart({ cart }) {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    let items = 0
    let price = 0
    cart.forEach(item => {
      items += item.quantity
      price += item.quantity * item.price
    })
    setTotalPrice(price)
    setTotalItems(items)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map(item => (<CartItem itemData={item} key={item.id} />))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: {totalItems}</span>
          <span>$ {totalPrice}</span>
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