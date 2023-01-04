import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
// import PropTypes from 'prop-types'

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.length;
    return (
        <header className='row box center'>
        <h1 className='floatLeft col2'>Small eCommerce app</h1>
        <h3 className='col1'>
            Cart <span className='cartCount'>{cartCount}</span>
        </h3>
        </header>
    )
}

Header.propTypes = {

}

export default Header
