import React from 'react'
import styles from './CartItem.module.css'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../redux/Shopping/shopping-actions'

const CartItem = ({ itemData, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.title}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>$ {itemData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__quantity}>
          <label htmlFor="quantity">Quantity</label>
          <input min="1" type="number" id="quantity" value={itemData.quantity} />
        </div>
        <button className={styles.actions__deleteItemBtn} onClick={() => removeFromCart(itemData.id)}>
          <svg width="200" height="100">
            <rect width="200" height="100" stroke="yellow" stroke-width="4" fill="red" />
            {/* <polygon points="200 100 50 0" style="fill:white;stroke:black;stroke-width:3;fill-rule:nonzero;" /> */}
          </svg>
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart())
  }
}

export default connect(null, mapDispatchToProps)(CartItem)