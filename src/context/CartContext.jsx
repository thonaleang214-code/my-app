import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Load persisted cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('techvibe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('techvibe_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [coupon, setCoupon] = useState({ code: '', discountPercent: 0, applied: false });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('techvibe_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('techvibe_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3200);
  };

  const addToCart = (product, options = {}, quantity = 1) => {
    const selectedColor = options.color || (product.colors && product.colors[0]?.name) || 'Default';
    const selectedStorage = options.storage || (product.storageOptions && product.storageOptions[0]?.size) || 'Standard';
    const priceDelta = options.priceDelta || 0;
    const finalPrice = product.price + priceDelta;
    const uniqueKey = `${product.id}_${selectedColor}_${selectedStorage}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.uniqueKey === uniqueKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [
        ...prev,
        {
          uniqueKey,
          product,
          selectedColor,
          selectedStorage,
          unitPrice: finalPrice,
          quantity
        }
      ];
    });

    showToast(`Added "${product.name}" (${selectedColor}) to your cart!`);
  };

  const removeFromCart = (uniqueKey) => {
    setCartItems(prev => prev.filter(item => item.uniqueKey !== uniqueKey));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (uniqueKey, delta) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.uniqueKey === uniqueKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'TECH10') {
      setCoupon({ code: clean, discountPercent: 10, applied: true });
      showToast('10% promo discount applied!', 'success');
      return true;
    } else if (clean === 'VIP20') {
      setCoupon({ code: clean, discountPercent: 20, applied: true });
      showToast('20% VIP discount applied!', 'success');
      return true;
    } else {
      showToast('Invalid coupon code. Try TECH10 or VIP20', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setCoupon({ code: '', discountPercent: 0, applied: false });
  };

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discountAmount = coupon.applied ? Math.round((cartSubtotal * coupon.discountPercent) / 100) : 0;
  const shipping = cartSubtotal > 100 || cartSubtotal === 0 ? 0 : 15;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shipping);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        discountAmount,
        shipping,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlisted,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast,
        coupon,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
