import './CartScreen.css'
import CartItem from '../components/CartItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartScreen() {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>$Price</p>
        </div>
        <div>Proceed to checkout</div>
      </div>
    </div>
  )
}

export default CartScreen
