import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({});
const CartContextProvider = ({ children }) => {
    const isListView = JSON.parse(window.localStorage.getItem('listView'));
    const cartItemsData = JSON.parse(window.localStorage.getItem('cartItems'));
    const [cartItems, setCartItems] = useState(cartItemsData || []);
    const [listView, setListView] = useState(isListView || false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

    useEffect(() => {
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.localStorage.setItem('listView', JSON.stringify(listView));
    }, [cartItems, listView]);

    const onAddToCart = (product) => { // to add item to cart
        const existProduct = cartItems.find((x) => x.id === product.id);
        if (existProduct) {
            if (existProduct.qty !== product.variants[selectedVariantIndex].availableProduct) {
                setCartItems(
                    cartItems.map((x) => (x.id === product.id
                        ? { ...existProduct, qty: existProduct.qty + 1 }
                        : x)
                    )
                );
            }
        } else {
            setCartItems([...cartItems, { ...product, qty: 1}]);
        }
    }

    const onRemoveFromCart = (product) => { // to remove item from cart
        const existProduct = cartItems.find((x) => x.id === product.id);
        if (existProduct.qty === 1) {
        setCartItems(
            cartItems.filter((item) => item.id !== product.id)
        );
        } else {
        setCartItems(
            cartItems.map((x) => x.id === product.id ? { ...existProduct, qty: existProduct.qty - 1 } : x)
        );
        }
    }

    const showListView = (isListView) => { // to handle list view and grid view layout
        setListView(isListView);
    }
    const data = {
        cartItems,
        setCartItems,
        listView,
        setListView,
        onAddToCart,
        onRemoveFromCart,
        showListView,
        selectedProduct,
        setSelectedProduct,
        setSelectedVariantIndex,
        selectedVariantIndex,
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext };
