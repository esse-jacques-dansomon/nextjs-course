
import React from 'react'
import AddTocard from "@/app/components/AddToCard";
import styles from './ProductCard.module.css'


const ProductCard = () => {
    return (
        <div className={styles.card}>
            <h1>Product Card</h1>
            <div>
                <img src="https://via.placeholder.com/150" alt="product" />
                <p>Product Name</p>
                <p>Product Price</p>
                <AddTocard />
            </div>
        </div>

    )
}
export default ProductCard
