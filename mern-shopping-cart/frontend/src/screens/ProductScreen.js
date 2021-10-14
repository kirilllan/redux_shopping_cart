import './ProductScreen.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '..redux/actions/cartActions'

function ProductScreen({ match, history }) {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.getProductDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id))
    }
  }, [dispatch, product, match])

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price: $599.99</p>
          <p>Decription: lalalala this is a description here yes it is, here it is, hehe</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div ckassName="right__info">
          <p>Price: <span>$499.99</span></p>
          <p>Status:<span>In stock</span></p>
          <p>Quantity:<select>
            <option value="1">1</option>
          </select></p>
          <p><button type="button">add to cart</button></p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
