import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0)

    const [cart, setCart] = useState([])

    const addToCart = (productId, title, price, image, qty) => {
        const existingIndex = cart.findIndex((item) => item.productId === productId);
        if (existingIndex >= 0) {
            cart[existingIndex] = {
                ...cart[existingIndex],
                qty: cart[existingIndex].qty + qty,
            }
        } else {
            setCart([
                ...cart,
                {
                    productId: productId,
                    title: title,
                    price: price,
                    image: image,
                    qty: qty,
                },
            ])
            console.log(cart);
        }
    };

    const removeProduct = (itemInCart) => {
        const existingIndex = cart.findIndex((item) => item.productId === itemInCart.productId);
        const cartCopy = Array.from(cart);
        if (existingIndex >= 0) {
            cartCopy.splice(existingIndex, 1);
            setCart(cartCopy);
        }
        setQuantity(quantity - itemInCart.qty);
    };

    return (
        <CartContext.Provider value={{ addToCart, cart, setCart, removeProduct, quantity, setQuantity }}>
            {children}
        </CartContext.Provider>
    )
}