import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/Shopping/shopping-actions'


function Product({ productData, addToCart }) {
  return (
    <div className={styles.product}>
      <img className={styles.product__image}
        src={productData.image}
        alt={productData.title} />

      <div className={styles.product__details}>
        <p className={styles.details__title}></p>
        <p className={styles.details__desc}>
          {productData.description}
        </p>
        <p className={styles.details__price}>
          $ {productData.price}
        </p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={'/product/someId'}>
          <button className={`${styles.button__btn} ${styles.button__view}`}>View item</button>
        </Link>
        <button onClick={() => addToCart(productData.id)} className={`${styles.buttons__btn} ${styles.buttons__add}`}>Add to cart</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Product)