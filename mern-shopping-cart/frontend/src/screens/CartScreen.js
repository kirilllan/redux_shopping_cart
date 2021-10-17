import './CartScreen.css'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions'

function CartScreen() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div> Your cart is empty <Link to="/">Go back</Link></div>
        ) : cartItems.map(item => <CartItem item={item} qtyChangeHandler={qtyChangeHandler} />)
        }
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
