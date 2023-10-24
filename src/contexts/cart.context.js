import { createContext, useReducer, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

  const initialState = {
    isCartOpen: false,
    cartItems: [],
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_CART':
        return { ...state, isCartOpen: !state.isCartOpen };
      case 'ADD_ITEM':
        return { ...state, cartItems: addCartItem(state.cartItems, action.payload) };
      case 'REMOVE_ITEM':
        return { ...state, cartItems: removeCartItem(state.cartItems, action.payload) };
      case 'CLEAR_ITEM':
        return { ...state, cartItems: clearCartItem(state.cartItems, action.payload) };
      default:
        return state;
    }
  };
  
  export const CartContext = createContext();
  
  export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const { isCartOpen, cartItems } = state;
  
    const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  
    const cartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  
    useEffect(() => {
      // Update cart count or total if needed
    }, [cartItems]);
  
    const value = {
      isCartOpen,
      toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
      addItemToCart: (productToAdd) => dispatch({ type: 'ADD_ITEM', payload: productToAdd }),
      removeItemFromCart: (cartItemToRemove) => dispatch({ type: 'REMOVE_ITEM', payload: cartItemToRemove }),
      clearItemFromCart: (cartItemToClear) => dispatch({ type: 'CLEAR_ITEM', payload: cartItemToClear }),
      cartItems,
      cartCount,
      cartTotal,
    };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };
  