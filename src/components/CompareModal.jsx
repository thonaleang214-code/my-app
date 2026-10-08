import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { X, ArrowRight, ShoppingCart } from 'lucide-react';

export function CompareModal() {
  const { isCompareOpen, setIsCompareOpen, compareIds, removeCompare } = useCompare();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!isCompareOpen) return null;

  const compareProducts = PRODUCTS.filter(p => compareIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in font-sans">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-xl font-black text-slate-900">{t('compareTitle')}</h2>
            <p className="text-xs text-slate-500">{t('compareDesc')}</p>
          </div>
          <button
            onClick={() => setIsCompareOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {compareProducts.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p>{t('noProductsCompare')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compareProducts.map((p) => (
                <div key={p.id} className="border border-slate-200 rounded-2xl p-5 flex flex-col justify-between bg-slate-50/40">
                  <div>
                    {/* Top image & close */}
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => removeCompare(p.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="h-44 flex items-center justify-center mb-4">
                      <img src={p.images[0]} alt={p.name} className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] font-extrabold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {p.brand}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-base mt-1 line-clamp-1">{p.name}</h3>
                      <div className="text-xl font-black text-slate-900 mt-1">${p.price}</div>
                    </div>

                    {/* Spec items list */}
                    <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
                      {p.specs && Object.entries(p.specs).slice(0, 5).map(([label, val]) => (
                        <div key={label} className="pb-2 border-b border-slate-100">
                          <span className="font-bold text-slate-400 uppercase text-[10px] block">{label}</span>
                          <span className="text-slate-800 font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => {
                        setIsCompareOpen(false);
                        navigate(`/product/${p.id}`);
                      }}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{t('viewDetail')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => addToCart(p)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>{t('addCart')}</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
