import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar({ click }) {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const getCartCount = () => cartItems.reduce((qty, item) => qty + +item.qty, 0)

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>MERN shopping cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart" />
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
