import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import data from '../mocks/mockData'
import { CartContext } from '../context/CartContext';

const Main = () => {
    const { products } = data;
    const { onAddToCart, listView, showListView, setSelectedProduct } = useContext(CartContext);

    const handleSelectedProduct = (product) => {
        setSelectedProduct(product);
    }

    return (
        <main className='box col2'>
            <h2>Products</h2>
            <div className='row'>
                <button className='col2 margin' onClick={() => showListView(false)}>Grid view</button>
                <button className='col2 margin' onClick={() => showListView(true)}>List view</button>
            </div>
            <div>
                {
                    products.map((product) => (
                        !listView ? 
                            (<div key={product.id} className='product' onClick={() => handleSelectedProduct(product)}>
                                <img src={product.image} alt={product.productName} className='img' />
                                <h4>{product.productName}</h4>
                                {product.variants.map((variant) => (
                                    <div>
                                        <span>{variant.type} - &#8377;{variant.price}</span>
                                        {variant.availableProduct < 10 && <div className='info marginTopBottom'>Hurry! Only {variant.availableProduct} items are available for {variant.type}!</div>}
                                    </div>
                                ))}
                                <button onClick={() => onAddToCart(product)} className='marginTopBottom'>Add to cart</button>
                            </div>)
                            : (<div key={product.id} className='row listview' onClick={() => handleSelectedProduct(product)}>
                                <div className='col1'>
                                    <img src={product.image} alt={product.productName} className='img' />
                                </div>
                                <div className='col2 floatLeft marginLeftRight'>
                                    <h4>{product.productName}</h4>
                                    {product.variants.map((variant) => (
                                        <div>
                                            <span>{variant.type} - &#8377;{variant.price}</span>
                                            {variant.availableProduct < 10 && <div className='info marginTopBottom'>Hurry! Only {variant.availableProduct} items are available for {variant.type}!</div>}
                                        </div>
                                    ))}
                                    <button onClick={() => onAddToCart(product)} className='marginTopBottom'>Add to cart</button>
                                </div>
                            </div>)
                    ))
                }
            </div>
        </main>
    )
}

Main.propTypes = {
    showListView: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    listView: PropTypes.bool.isRequired,
}

export default Main
