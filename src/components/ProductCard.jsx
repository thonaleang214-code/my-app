import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Star, ShoppingCart, Eye, ChevronRight } from 'lucide-react';

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useCart();
  const { t } = useLanguage();

  const isFavorite = isWishlisted(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top Image & Floating Badges */}
      <div className="relative pt-[80%] bg-gradient-to-b from-slate-50 to-slate-100/60 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className={`text-[11px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full shadow-xs ${product.badgeColor || 'bg-blue-600'}`}>
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
              {t('save')} {discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
              : 'bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white shadow-xs'
          }`}
          title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Product Image Click -> View Detail Route */}
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="absolute inset-0 p-6 flex items-center justify-center cursor-pointer"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Quick View Button overlay on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t('quickPreview')}</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-extrabold uppercase tracking-wider text-slate-400">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name (Direct link to View Detail Route) */}
          <h3
            onClick={() => navigate(`/product/${product.id}`)}
            className="font-bold text-slate-900 text-base leading-snug hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 mb-1.5"
          >
            {product.name}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-slate-500 line-clamp-1 mb-3">
            {product.tagline}
          </p>

          {/* Color Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-[11px] text-slate-400 mr-1">{t('colors')}:</span>
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs inline-block"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-black text-slate-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm font-semibold text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* View Detail Route Button */}
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{t('viewDetail')}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Quick Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{t('addCart')}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
