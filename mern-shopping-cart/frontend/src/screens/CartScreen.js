import './CartScreen.css'
import '../components/CartItem'

function CartScreen() {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {/* <CartItem /> */}
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
