import './CartScreen.css'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

function CartScreen() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = id => { dispatch(removeFromCart(id)) }

  const getCartCount = () => cartItems.reduce((qty, item) => qty + +item.qty, 0)

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div> Your cart is empty <Link to="/">Go back</Link></div>
        ) : cartItems.map(item => <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeFromCart={removeHandler} />)
        }
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal {getCartCount()} items</p>
          <p>$Price</p>
        </div>
        <div>Proceed to checkout</div>
      </div>
    </div>
  )
}

export default CartScreen
