import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart(){
  return useContext(CartContext);
}

export function CartProvider({children}){
  const [cart, setCart] = useState([]);
  const [discount,setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedDiscount = localStorage.getItem('discount');
    if(storedCart){
      setCart(JSON.parse(storedCart))
    }
    if(storedDiscount){
      setDiscount(JSON.parse(storedDiscount))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('discount',JSON.stringify(discount))
  })

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

  const getTotalWithDiscount = () => {
    const subtotal = getSubTotal();
    const discountAmt = (subtotal * discount) / 100;
    return (subtotal - discountAmt).toFixed(2);
  }

  const applyDiscount = (discountCode) => {
    if (discountCode === 'SAVE10') {
      setDiscount(10)
    }else if(discountCode === 'SAVE20'){
      setDiscount(20)
    }else{
      alert('invalid discount code');
    }
  }

  return(
    <CartContext.Provider value={{cart,discount,addToCart,updateQuantity,removeItem,getTotalItems,getSubTotal,getTotalWithDiscount,applyDiscount}} >
      {children}
    </CartContext.Provider>
  )
}