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
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => <Product />)}
      </div>
    </div>
  )
}

export default HomeScreen
