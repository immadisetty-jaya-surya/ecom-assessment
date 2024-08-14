import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart(){
  return useContext(CartContext);
}

export function CartProvider({children}){
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart =>{
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }else{
        return [...prevCart,{...product, quantity:1}];
      }
    })
  };
  
  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => prevCart.map(item => item.id === productId ? {...item, quantity:item.quantity + quantity} : item).filter(item => item.quantity > 0))
  };

  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  };

  const getTotalItems = () => {
    return cart.reduce((sum,item) => sum + item.quantity, 0)
  };

  const getSubTotal = () => {
    return cart.reduce((sum,item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return(
    <CartContext.Provider value={{cart,addToCart,updateQuantity,removeItem,getTotalItems,getSubTotal}} >
      {children}
    </CartContext.Provider>
  )
}