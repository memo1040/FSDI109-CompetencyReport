import StoreContext from "./storeContext";
import React, { useState } from 'react';

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id: 12345,
        name: "Guillermo Monge",
        email: "gmt1040@gmail.com",
    });

    const addProductToCart = (product) => {
        console.log("Add to cart");

        let copy = [...cart, product];
        setCart(copy);
    };

    const removeProdFromCart = (productId) => {
        console.log("Removing prod");
    };

    // left side is the abstract description for data/fns
    // right side is the implementation for data/fns
    // when someone calls the abstract, will get the implementation
    return <StoreContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProdFromCart: removeProdFromCart,
    }}>
        {props.children}
    </StoreContext.Provider>;

};

export default GlobalContext;