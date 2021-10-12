import './HomeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'
import { getProducts as listProducts } from '../redux/actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch()
  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest products</h2>
      <div className="homescreen__products">
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen
