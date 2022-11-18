import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductsContext } from '../global/ProductsContext'
import { CartContext } from '../global/CartContext'
// import { Link } from 'react-router-dom'

export const Products = () => {
    
    const { products } = useContext(ProductsContext);
    
    // const data = useContext(CartContext);
    
    const { dispatch } = useContext(CartContext);
    
    return (
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='item' key={product.ProductID}>
                        <Link to="/">
                            <img src={product.ProductImg} alt="not found" />
                        </Link>
                        <div className='item-details'>
                            <p className='prod-name'>{product.ProductName}</p>
                            <p className='prod-price'>{product.ProductPrice}$</p>
                        </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
    )
}