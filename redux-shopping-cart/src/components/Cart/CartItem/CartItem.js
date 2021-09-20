import React, { useState } from 'react'
import styles from './CartItem.module.css'
import { connect } from 'react-redux'
import { removeFromCart, adjustQuantity } from '../../../redux/Shopping/shopping-actions'

const CartItem = ({ itemData, removeFromCart, adjustQuantity }) => {

  const [input, setInput] = useState(itemData.quantity)
  const onChangeHandler = e => {
    setInput(e.target.value)
    adjustQuantity(itemData.id, e.target.value)
  }

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
          <input min="1" type="number" id="quantity" name="quantity" value={input} onChange={onChangeHandler} />
        </div>
        <button className={styles.actions__deleteItemBtn} onClick={() => removeFromCart(itemData.id)}>
          <svg width="200" height="100">
            <rect width="200" height="100" stroke="yellow" strokeWidth="4" fill="red" />
            {/* <polygon points="200 100 50 0" style="fill:white;stroke:black;stroke-width:3;fill-rule:nonzero;" /> */}
          </svg>
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart()),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value))
  }
}

export default connect(null, mapDispatchToProps)(CartItem)