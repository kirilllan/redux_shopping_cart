import React from 'react'
import styles from './Products.module.css'
import Product from './Product/Product'

export default function Products() {
  return (
    <div className={styles.products}>
      <Product />
    </div>
  )
}
