import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
// import PropTypes from 'prop-types'

const Product = () => {
    const { selectedProduct, onAddToCart, setSelectedVariantIndex, selectedVariantIndex } = useContext(CartContext);
    const isSelectedProduct = Object.keys(selectedProduct).length !== 0;

    const handleSelectedVariant = (selectedVariantType) => {
        const selectedVariantIndex = selectedProduct.variants.findIndex((x) => x.type === selectedVariantType);
        setSelectedVariantIndex(selectedVariantIndex);
    }

    return (
        <>
            {
                isSelectedProduct && (
                    <div className='row box center'>
                        <div className='col1'>
                            <img src={selectedProduct.variants[selectedVariantIndex].image} alt={selectedProduct.productName} className='img' />
                        </div>
                        <div className='col2 floatLeft marginLeftRight'>
                            <h4>{selectedProduct.productName}</h4>
                            <div>&#8377;{selectedProduct.variants[selectedVariantIndex].price}</div>
                            {selectedProduct.availableProduct < 10
                                &&  <div className='info marginTopBottom'>
                                        Only {selectedProduct.availableProduct} items are available!
                                    </div>
                            }
                            <div>
                                {selectedProduct.variants.map((x) => 
                                    <button className='margin' onClick={() => handleSelectedVariant(x.type)}>{x.type}</button>
                                )}
                            </div>
                            <button onClick={() => onAddToCart(selectedProduct)} className='marginTopBottom'>Add to cart</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

// Product.propTypes = {

// }

export default Product
