import * as actionTypes from './shopping-types'

const initialState = {
  products: [
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      price: 1,
      image: 'grid1.png'
    }
  ], //{id, title, descr, price, img}
  cart: [], //{id, title, descr, price, img, QUANTITY}
  currentItem: null
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return {}
    case actionTypes.REMOVE_FROM_CART: return {}
    case actionTypes.ADJUST_QUANTITY: return {}
    case actionTypes.LOAD_CURRENT_ITEM: return {}
    default: return state
  }
}

export default shopReducer