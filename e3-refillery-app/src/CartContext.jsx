import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (newItem) => {
    setItems(prev => {
      const key = `${newItem.productId}|${newItem.sizeLabel}|${newItem.scent}`;
      const existingIdx = prev.findIndex(
        i => `${i.productId}|${i.sizeLabel}|${i.scent}` === key
      );
      if (existingIdx >= 0) {
        return prev.map((item, idx) =>
          idx === existingIdx ? { ...item, qty: item.qty + newItem.qty } : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQty = (index, qty) => {
    if (qty <= 0) {
      removeFromCart(index);
      return;
    }
    setItems(prev => prev.map((item, i) =>
      i === index ? { ...item, qty } : item
    ));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
