import React from "react";

// Describes the data that will be saved on the context
export default React.createContext({
    //data
    cart: [],
    user: {},

    // fns that allow to modify the data
    addProductToCart: (product) => {},
    removeProdFromCart: (productId) => {},
});