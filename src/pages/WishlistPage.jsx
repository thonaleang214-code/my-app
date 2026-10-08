import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowLeft } from 'lucide-react';

export function WishlistPage() {
  const { wishlist } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in font-sans">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-2">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('returnToShopping')}</span>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <span>{t('myWishlist')}</span>
            <span className="text-sm font-bold bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
              {wishlistedProducts.length} {t('savedCount')}
            </span>
          </h1>
        </div>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center max-w-lg mx-auto space-y-4">
          <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{t('wishlistEmptyTitle')}</h2>
          <p className="text-xs text-slate-500">
            {t('wishlistEmptyDesc')}
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
          >
            {t('exploreFlagships')}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
