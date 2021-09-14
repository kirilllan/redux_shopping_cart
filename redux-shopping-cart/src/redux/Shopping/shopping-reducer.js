import * as actionTypes from './shopping-types'

const initialState = {
  products: [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      price: 1,
      image: 'grid1.png'
    },

  ], //{id, title, descr, price, img}
  cart: [], //{id, title, descr, price, img, QUANTITY}
  currentItem: null
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(p => p.id === action.payload.id)
      const inCart = state.cart.find(item => item.id === action.payload.id) ? true : false
      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
          : [...state.cart, { ...item, quantity: 1 }]
      }
    case actionTypes.REMOVE_FROM_CART: return {}
    case actionTypes.ADJUST_QUANTITY: return {}
    case actionTypes.LOAD_CURRENT_ITEM: return {}
    default: return state
  }
}

export default shopReducer