import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Star,
  ShoppingCart,
  ChevronRight
} from 'lucide-react';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentColor = selectedColor || (product.colors && product.colors[0]?.name) || '';
  const currentStorage = selectedStorage || (product.storageOptions && product.storageOptions[0]?.size) || '';

  const storageDelta = product.storageOptions?.find(s => s.size === currentStorage)?.priceDelta || 0;
  const currentPrice = product.price + storageDelta;

  const handleAddToCart = () => {
    addToCart(
      product,
      { color: currentColor, storage: currentStorage, priceDelta: storageDelta },
      quantity
    );
    setQuickViewProduct(null);
  };

  const handleViewFullDetails = () => {
    setQuickViewProduct(null);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual Column */}
        <div className="md:w-1/2 p-6 bg-slate-50 flex flex-col justify-between">
          <div className="relative h-64 md:h-80 flex items-center justify-center">
            <img
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 justify-center mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIdx === idx ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Column */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {product.brand}
                </span>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <h2 className="text-xl font-black text-slate-900 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">
                ${currentPrice}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.originalPrice + storageDelta}
                </span>
              )}
            </div>

            {/* Color options */}
            {product.colors && (
              <div>
                <p className="text-xs font-bold text-slate-700 mb-2">
                  {t('finishColor')}: <span className="text-slate-500 font-normal">{currentColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all cursor-pointer flex items-center justify-center ${
                        currentColor === c.name ? 'border-blue-600 ring-2 ring-blue-100 scale-110' : 'border-slate-200'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage options */}
            {product.storageOptions && (
              <div>
                <p className="text-xs font-bold text-slate-700 mb-2">{t('storageCapacity')}:</p>
                <div className="flex flex-wrap gap-2">
                  {product.storageOptions.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedStorage(s.size)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        currentStorage === s.size
                          ? 'bg-blue-50 border-blue-600 text-blue-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-2.5">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{t('addToCartButton')} - ${currentPrice * quantity}</span>
            </button>

            <button
              onClick={handleViewFullDetails}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{t('viewDetail')}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
