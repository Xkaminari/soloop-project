import React, { useContext, useEffect } from 'react';
import { CartContext } from '../global/CartContext';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/config'
import NavBar from '../NavBar/NavBar';

export default function Cart(props) {
    
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    const navigate  = useNavigate();
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                navigate('/login');
            }
        })
    })
    
    return (
        <>
            <NavBar user={props.user}/>
            <div className='Cart'>
                {shoppingCart.length !== 0 && <h1>Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && 
                        <div className='cart-no-item-case'>
                            <div className='No-item-msg'>No items in your cart, go add some in our shop!</div>
                            <Link className='back-shop-btn' to="/Boutique">Boutique</Link>
                        </div>
                    }
                    {
                        shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>
                            <img  className='cart-img' src={cart.ProductImg} alt="img product in cart" />
                            <div className='cart-item-details cart-name'>{cart.ProductName}</div>
                            <div className='cart-item-details cart-price-orignal'>{cart.ProductPrice}$</div>
                            <div className='cart-item-details inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}><i class="fa-solid fa-plus"></i></div>
                            <div className='cart-item-details quantity'>{cart.qty}</div>
                            <div className='cart-item-details dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}><i class="fa-solid fa-minus"></i></div>
                            <div className='cart-item-details cart-price'>{cart.TotalProductPrice}$</div>
                            <button className='cart-delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    ))
                    }
                    {
                        shoppingCart.length > 0 && 
                        <div className='cart-summary-container'>
                            <div className='cart-summary'>
                                <h3 className='cart-summary-heading'>Cart-Summary</h3>
                                <div className='cart-summary-price'>
                                    <span>Total Price</span>
                                    <span>{totalPrice}</span>
                                </div>
                                <div className='cart-summary-price'>
                                    <span>Total Qty</span>
                                    <span>{totalQty}</span>
                                </div>
                                <Link to='cashout' className='cashout-link'><button className='Valid-purchase'>Valid purchase</button></Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}