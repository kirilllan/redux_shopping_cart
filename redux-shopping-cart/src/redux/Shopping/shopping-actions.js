import * as actionTypes from './shopping-types'

export const addToCart = itemId => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId
    }
  }
}

export const removeFromCart = itemId => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
}

export const adjustQuantity = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemId,
      quantity: value
    }
  }
}

export const loadCurrentItem = item => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}