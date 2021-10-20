import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
})

const middleWare = [thunk]

const cartFromLocalStorage = localStorage.getItem()

const INITIAL_STATE = {
  cart: {
    cartItems: 1
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)))

export default store