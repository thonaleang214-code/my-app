import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Lock,
  ShieldCheck,
  Check,
  ArrowLeft
} from 'lucide-react';

export function CheckoutPage() {
  const { cartItems, cartSubtotal, cartTotal, discountAmount, shipping, clearCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'Cambodia',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedOrderId = 'TV-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedOrderId);
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-fade-in font-sans">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
          <Check className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          {language === 'km' ? 'ការបញ្ជាទិញជោគជ័យ' : 'Order Confirmed'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-2">
          {t('orderConfirmedTitle')}
        </h1>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
          {t('orderConfirmedDesc')} <strong className="text-slate-800">{formData.email || 'your email'}</strong>.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto mb-8 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">{t('orderReference')}:</span>
            <span className="font-mono font-bold text-slate-900">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t('estimatedDelivery')}:</span>
            <span className="font-bold text-slate-900">{t('businessDays2')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t('paymentStatus')}:</span>
            <span className="font-bold text-emerald-600">{t('paidSecurely')}</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
        >
          {t('backToStore')}
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center font-sans">
        <h2 className="text-2xl font-black text-slate-900 mb-2">{t('emptyCartTitle')}</h2>
        <p className="text-slate-500 text-sm mb-6">
          {language === 'km' ? 'សូមជ្រើសរើសទំនិញដាក់ក្នុងកន្ត្រកមុននឹងបន្តការទូទាត់។' : 'Please add items to your cart before proceeding to checkout.'}
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors inline-block"
        >
          {t('startShopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in font-sans">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-2">
          <ArrowLeft className="w-4 h-4" />
          <span>{t('returnToShopping')}</span>
        </Link>
        <h1 className="text-3xl font-black text-slate-900">{t('secureCheckoutTitle')}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                {t('contactInfo')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('firstName')} *</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Sok"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('lastName')} *</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Chan"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('emailAddress')} *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sok.chan@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                {t('shippingAddress')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('streetAddress')} *</label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="No. 128, St. 2004, Sen Sok"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('city')} *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Phnom Penh"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t('postalCode')} *</label>
                  <input
                    type="text"
                    required
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="12000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                {t('paymentInfo')}
              </h2>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {['card', 'applePay', 'cod'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: method })}
                    className={`py-3 px-2 rounded-xl text-xs font-bold text-center border-2 transition-all cursor-pointer ${
                      formData.paymentMethod === method
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {method === 'card' && `💳 ${t('creditCard')}`}
                    {method === 'applePay' && `🍎 ${t('appleGooglePay')}`}
                    {method === 'cod' && `📦 ${t('cashOnDelivery')}`}
                  </button>
                ))}
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t('cardNumber')} *</label>
                    <input
                      type="text"
                      required
                      placeholder="4000 1234 5678 9010"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{t('expiryDate')} *</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{t('cvc')} *</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer text-base active:scale-98"
              >
                <Lock className="w-5 h-5" />
                <span>{t('placeOrder')} • ${cartTotal}</span>
              </button>
            </div>

          </form>
        </div>

        {/* Right Order Review (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs sticky top-28 space-y-6">
            <h3 className="text-base font-black text-slate-900 pb-4 border-b border-slate-100">
              {t('orderSummary')} ({cartItems.length} {t('items')})
            </h3>

            {/* Items list */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.uniqueKey} className="flex gap-3 items-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-xl bg-slate-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0 text-xs">
                    <p className="font-bold text-slate-900 truncate">{item.product.name}</p>
                    <p className="text-slate-400">
                      {item.selectedColor} • {item.selectedStorage} • {t('quantity')} {item.quantity}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-900">
                    ${item.unitPrice * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
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
              <div className="flex justify-between text-lg font-black text-slate-900 pt-3 border-t border-slate-200">
                <span>{t('total')}</span>
                <span className="text-2xl text-blue-600">${cartTotal}</span>
              </div>
            </div>

            {/* Assurance */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t('buyerProtection')}</span>
              </div>
              <p>{t('buyerProtectionDesc')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
