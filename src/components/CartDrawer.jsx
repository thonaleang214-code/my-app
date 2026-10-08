import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartSubtotal,
    cartTotal,
    discountAmount,
    shipping,
    updateQuantity,
    removeFromCart,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 100;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const amountNeeded = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
    }
  };

  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-black text-slate-900">{t('yourCart')}</h2>
              <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} {t('items')}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-blue-50/70 border-b border-blue-100/50">
            {amountNeeded > 0 ? (
              <p className="text-xs font-semibold text-blue-900 mb-1.5">
                {t('addMoreForFreeShipping')} <span className="font-black text-blue-600">${amountNeeded}</span> {t('moreForFreeShipping')}
              </p>
            ) : (
              <p className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t('freeShippingUnlocked')}
              </p>
            )}
            <div className="w-full bg-blue-200/60 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-800">{t('emptyCartTitle')}</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    {t('emptyCartDesc')}
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  {t('startShopping')}
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.uniqueKey}
                  className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 transition-all shadow-xs"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-slate-50 shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate(`/product/${item.product.id}`);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            navigate(`/product/${item.product.id}`);
                          }}
                          className="text-xs font-bold text-slate-900 hover:text-blue-600 line-clamp-1 cursor-pointer transition-colors"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.uniqueKey)}
                          className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-1">
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {item.selectedColor}
                        </span>
                        <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
                          {item.selectedStorage}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-50">
                      <span className="text-sm font-black text-slate-900">
                        ${item.unitPrice * item.quantity}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, -1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/70 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder={t('couponPlaceholder')}
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs uppercase font-medium focus:ring-2 focus:ring-blue-500 outline-hidden"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {t('apply')}
                </button>
              </form>

              {coupon.applied && (
                <div className="flex items-center justify-between text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg">
                  <span className="flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Code {coupon.code} (-{coupon.discountPercent}%)
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-rose-600 hover:underline font-bold cursor-pointer"
                  >
                    {t('remove')}
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span className="font-semibold text-slate-800">${cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>{t('discount')}</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{t('shipping')}</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-600">{t('freeWord')}</strong> : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>{t('total')}</span>
                  <span className="text-xl text-blue-600">${cartTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleGoToCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>{t('proceedToCheckout')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 {t('secureSSL')}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
