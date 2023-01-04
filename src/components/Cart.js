/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, onAddToCart, onRemoveFromCart, selectedVariantIndex } = useContext(CartContext);

    const [orderPriceSummary, setOrderPriceSummary] = useState({
        totalItemsPrice: 0,
        taxPrice: 0,
        shippingCharge: 0,
        total: 0,
    });

    useEffect(() => {
        const totalItemsPrice = cartItems.reduce((a, c) => a + c.variants[selectedVariantIndex].price * c.qty, 0);
        const taxPrice = totalItemsPrice * 0.15;
        const shippingCharge = totalItemsPrice < 20000 ? 500 : 0;
        const total =  (totalItemsPrice + taxPrice + shippingCharge).toFixed(2);
        setOrderPriceSummary({
            totalItemsPrice,
            taxPrice,
            shippingCharge,
            total,
        })
    }, [cartItems]);

    return (
        <aside className='box col1'>
            <h2>Cart Items</h2>
            {cartItems.length === 0
                ? <div>Cart is empty</div>
                : (
                    <>
                        {cartItems.map((item) => 
                            <div key={item.id} className='row floatLeft marginTopBottom'>
                                <div className='col1'>
                                    <span>{item.productName} {item.variants[selectedVariantIndex].type}</span>
                                    <span className='marginLeftRight alignRight'>
                                        <button className='add' onClick={() => onAddToCart(item)}>+</button>
                                        <button className='remove' onClick={() => onRemoveFromCart(item)}>-</button>
                                    </span>
                                </div>
                                <div className='col2 floatRight'>{item.qty} * &#8377;{item.variants[selectedVariantIndex].price}</div>
                            </div>
                        )}
                        <hr></hr>
                        <h4>Order total summary</h4>
                        <div className='row'>
                            <div className='col2 floatLeft'>Total Items Price:</div>
                            <div className='col1 floatRight'>&#8377;{orderPriceSummary.totalItemsPrice}</div>
                        </div>
                        <div className='row'>
                            <div className='col2 floatLeft'>Tax Price:</div>
                            <div className='col1 floatRight'>&#8377;{orderPriceSummary.taxPrice}</div>
                        </div>
                        <div className='row'>
                            <div className='col2 floatLeft'>Shipping Price:</div>
                            <div className='col1 floatRight'>&#8377;{orderPriceSummary.shippingCharge}</div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div className='col2 floatLeft'><strong>Grand Total Price:</strong></div>
                            <div className='col1 floatRight'><strong>&#8377;{orderPriceSummary.total}</strong></div>
                        </div>
                    </>
                )
            }
        </aside>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
}

export default Cart