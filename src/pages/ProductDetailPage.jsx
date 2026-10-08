import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingCart,
  Heart,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
  Share2,
  Sparkles,
  Plus,
  Minus
} from 'lucide-react';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted, showToast } = useCart();
  const { t, language } = useLanguage();

  // Find product by id from react-router-dom params
  const product = PRODUCTS.find((p) => p.id === id);

  // States
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('specs');
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' });
  const [reviewsList, setReviewsList] = useState([]);

  // Reset states when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]?.name || '');
      setSelectedStorage(product.storageOptions?.[0]?.size || '');
      setQuantity(1);
      setActiveImageIdx(0);
      setReviewsList(product.reviews || []);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center font-sans">
        <h2 className="text-3xl font-black text-slate-800 mb-4">
          {language === 'km' ? 'រកមិនឃើញផលិតផលទេ' : 'Product Not Found'}
        </h2>
        <p className="text-slate-500 mb-6">
          {language === 'km' ? `ផលិតផល "${id}" មិនមានក្នុងប្រព័ន្ធរបស់យើងឡើយ។` : `The requested device "${id}" does not exist in our catalog.`}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('returnToShopping')}
        </Link>
      </div>
    );
  }

  const isFavorite = isWishlisted(product.id);
  const storageOption = product.storageOptions?.find((s) => s.size === selectedStorage);
  const storagePriceDelta = storageOption ? storageOption.priceDelta : 0;
  const unitPrice = product.price + storagePriceDelta;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(
      product,
      {
        color: selectedColor,
        storage: selectedStorage,
        priceDelta: storagePriceDelta
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    addToCart(
      product,
      {
        color: selectedColor,
        storage: selectedStorage,
        priceDelta: storagePriceDelta
      },
      quantity
    );
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(language === 'km' ? 'បានចម្លងតំណភ្ជាប់ផលិតផល!' : 'Product link copied to clipboard!');
    } else {
      showToast(language === 'km' ? 'តំណភ្ជាប់ត្រៀមចែករំលែក!' : 'Link ready to share!');
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;

    const newRev = {
      id: Date.now(),
      author: reviewForm.name,
      rating: Number(reviewForm.rating),
      date: language === 'km' ? 'អម្បាញ់មិញ' : 'Just now',
      title: language === 'km' ? 'ការវាយតម្លៃពីអតិថិជនពិតប្រាកដ' : 'Verified Customer Review',
      comment: reviewForm.comment
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewForm({ name: '', rating: 5, comment: '' });
    showToast(language === 'km' ? 'សូមអរគុណ! ការវាយតម្លៃត្រូវបានបង្ហោះ។' : 'Thank you! Your review has been submitted.');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in font-sans">
      
      {/* Breadcrumb Navigation with react-router-dom Link */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-1">
        <Link to="/" className="hover:text-blue-600 transition-colors font-semibold">{t('home')}</Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <Link to={`/category/${product.category}`} className="hover:text-blue-600 capitalize transition-colors font-semibold">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Detail Grid: Visuals + Options */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Left: Product Images Gallery (lg: 7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Active Featured Image */}
          <div className="relative aspect-4/3 bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-xs flex items-center justify-center p-8 group">
            <img
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              className="max-h-full max-w-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badge overlay */}
            {product.badge && (
              <span className={`absolute top-5 left-5 text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full shadow-md ${product.badgeColor || 'bg-blue-600'}`}>
                {product.badge}
              </span>
            )}

            {/* Wishlist and Share buttons */}
            <div className="absolute top-5 right-5 flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md transition-all cursor-pointer"
                title="Share product link"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-full backdrop-blur-md shadow-md transition-all cursor-pointer ${
                  isFavorite
                    ? 'bg-rose-500 text-white'
                    : 'bg-white/90 hover:bg-white text-slate-700 hover:text-rose-500'
                }`}
                title={isFavorite ? "Remove from Wishlist" : "Save to Wishlist"}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
              </button>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 p-1 bg-slate-50 ${
                    activeImageIdx === idx
                      ? 'border-blue-600 ring-4 ring-blue-100 scale-102'
                      : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Product view" className="w-full h-full object-cover rounded-xl" />
                </button>
              ))}
            </div>
          )}

          {/* Key Value Guarantee Cards */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="bg-blue-50/60 border border-blue-100 p-3.5 rounded-2xl text-center">
              <Truck className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-slate-900">{t('guaranteeFastShipping')}</p>
              <p className="text-[11px] text-slate-500">{t('guaranteeFastShippingDesc')}</p>
            </div>
            <div className="bg-emerald-50/60 border border-emerald-100 p-3.5 rounded-2xl text-center">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-slate-900">{t('guaranteeWarranty')}</p>
              <p className="text-[11px] text-slate-500">{t('guaranteeWarrantyDesc')}</p>
            </div>
            <div className="bg-purple-50/60 border border-purple-100 p-3.5 rounded-2xl text-center">
              <RotateCcw className="w-5 h-5 text-purple-600 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-slate-900">{t('guaranteeReturns')}</p>
              <p className="text-[11px] text-slate-500">{t('guaranteeReturnsDesc')}</p>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Purchase Form (lg: 5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div>
            {/* Brand & Stock Status */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {product.brand} {t('officialPartner')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t('inStock')}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-sm text-slate-500 mb-4">
              {product.tagline}
            </p>

            {/* Ratings & Reviews summary */}
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200/80">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-black text-slate-900">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviewsCount} {t('customerReviewsCount')})</span>
            </div>

            {/* Price Box */}
            <div className="py-6 border-b border-slate-200/80">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-slate-900">
                  ${unitPrice}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    ${product.originalPrice + storagePriceDelta}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                    {t('save')} ${product.originalPrice - product.price}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {t('taxesIncluded')} ${(unitPrice / 12).toFixed(2)}/mo
              </p>
            </div>

            {/* Color Swatches Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="py-5 border-b border-slate-200/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('finishColor')}:
                  </span>
                  <span className="text-xs font-black text-blue-600">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`group relative p-1 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-blue-600 ring-4 ring-blue-100 scale-110'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-8 h-8 rounded-full block shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage / Configuration Selector */}
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div className="py-5 border-b border-slate-200/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t('storageCapacity')}:
                  </span>
                  <span className="text-xs font-black text-blue-600">
                    {selectedStorage}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.storageOptions.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedStorage(s.size)}
                      className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                        selectedStorage === s.size
                          ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className={`text-sm font-black ${selectedStorage === s.size ? 'text-blue-700' : 'text-slate-900'}`}>
                        {s.size}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {s.priceDelta > 0 ? `+$${s.priceDelta}` : (language === 'km' ? 'រួមបញ្ចូល' : 'Included')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="py-5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {t('quantity')}:
              </span>
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-black text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons: Add to Cart & Buy Now */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{t('addToCartButton')} • ${totalPrice}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>{t('buyNowButton')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400 font-medium">
              ⚡ {t('dealBanner')}
            </p>
          </div>

        </div>

      </div>

      {/* Tabs Section: Technical Specs / In the Box / Reviews */}
      <div className="mt-16 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 gap-8 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 text-sm font-bold tracking-wide transition-colors relative cursor-pointer ${
              activeTab === 'specs'
                ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {t('specsTab')}
          </button>
          <button
            onClick={() => setActiveTab('inTheBox')}
            className={`pb-4 text-sm font-bold tracking-wide transition-colors relative cursor-pointer ${
              activeTab === 'inTheBox'
                ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {t('inTheBoxTab')} ({product.inTheBox?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm font-bold tracking-wide transition-colors relative cursor-pointer ${
              activeTab === 'reviews'
                ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {t('reviewsTab')} ({reviewsList.length})
          </button>
        </div>

        {/* Tab Content: Technical Specs */}
        {activeTab === 'specs' && (
          <div className="space-y-8 animate-fade-in">
            {/* Highlights */}
            {product.highlights && (
              <div>
                <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  {t('keyHighlights')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Spec Key-Value Table */}
            {product.specs && (
              <div>
                <h3 className="text-base font-black text-slate-900 mb-4">
                  {t('fullTechSpecs')}
                </h3>
                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                          <td className="py-3.5 px-5 font-bold text-slate-800 w-1/3 sm:w-1/4">
                            {key}
                          </td>
                          <td className="py-3.5 px-5 text-slate-600 font-medium">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab Content: What's In The Box */}
        {activeTab === 'inTheBox' && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-base font-black text-slate-900">
              {t('packagingContents')} {product.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.inTheBox?.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic">
              {t('packagingNote')}
            </p>
          </div>
        )}

        {/* Tab Content: Reviews */}
        {activeTab === 'reviews' && (
          <div className="animate-fade-in space-y-8">
            {/* Reviews Summary + Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
              
              {/* Average Score */}
              <div className="lg:col-span-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center flex flex-col justify-center">
                <span className="text-5xl font-black text-slate-900">{product.rating}</span>
                <div className="flex justify-center gap-1 text-amber-500 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'km' ? `ផ្អែកលើការវាយតម្លៃ ${reviewsList.length} ជាក់ស្តែង` : `Based on ${reviewsList.length} verified ratings`}
                </p>
              </div>

              {/* Add Review Form */}
              <div className="lg:col-span-8">
                <h4 className="text-sm font-black text-slate-900 mb-3">{t('leaveReview')}</h4>
                <form onSubmit={handleAddReview} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder={t('yourName')}
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                    />
                    <select
                      value={reviewForm.rating}
                      onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden cursor-pointer"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                      <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                      <option value="3">⭐⭐⭐ 3 Stars</option>
                      <option value="2">⭐⭐ 2 Stars</option>
                      <option value="1">⭐ 1 Star</option>
                    </select>
                  </div>
                  <textarea
                    required
                    rows="3"
                    placeholder={t('reviewSharePlaceholder')}
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
                  >
                    {t('postReview')}
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviewsList.map((rev) => (
                <div key={rev.id} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                        {language === 'km' ? 'បានបញ្ជាទិញពិត' : 'Verified Purchase'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">{rev.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                {t('youMayAlsoLike')}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'km' ? 'ឧបករណ៍ណែនាំដែលត្រូវគ្នា' : 'Recommended companions and alternative options'}
              </p>
            </div>
            <Link to="/" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
              <span>{t('viewAllDevices')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
