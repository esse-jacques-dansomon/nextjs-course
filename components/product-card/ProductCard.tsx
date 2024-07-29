
import React from 'react'
import styles from './ProductCard.module.css'
import AddTocard from '../AddToCard'


const ProductCard = () => {
    return (
        <div className={styles.card}>
            <h1>Product Card</h1>
            <div>
                {/* <image src="https://via.placeholder.com/150" alt="product" width={150} height={150} /> */}
                <p>Product Name</p>
                <p>Product Price</p>
                <AddTocard />
            </div>
        </div>

    )
}
export default ProductCard
