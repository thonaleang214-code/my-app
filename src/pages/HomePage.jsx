import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useLanguage } from '../context/LanguageContext';
import { HeroBanner } from '../components/HeroBanner';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import {
  Smartphone,
  Headphones,
  Watch,
  Zap,
  LayoutGrid,
  Sparkles,
  ChevronRight,
  Scale
} from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const { setIsCompareOpen } = useCompare();
  const { t, language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'samsung' && product.subCategory !== 'samsung') return false;
        if (selectedCategory === 'iphone' && product.subCategory !== 'iphone') return false;
        if (selectedCategory !== 'samsung' && selectedCategory !== 'iphone' && product.category !== selectedCategory) return false;
      }

      // Brand match
      if (selectedBrand !== 'all' && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Price filter
      if (priceRange === 'under300' && product.price >= 300) return false;
      if (priceRange === '300-800' && (product.price < 300 || product.price > 800)) return false;
      if (priceRange === 'over800' && product.price <= 800) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedBrand, sortBy, priceRange]);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'phone': return <Smartphone className="w-4 h-4" />;
      case 'samsung': return <span className="font-black text-xs px-1">S</span>;
      case 'apple': return <span className="font-black text-xs px-1"></span>;
      case 'headphones': return <Headphones className="w-4 h-4" />;
      case 'watch': return <Watch className="w-4 h-4" />;
      case 'cable': return <Zap className="w-4 h-4" />;
      default: return <LayoutGrid className="w-4 h-4" />;
    }
  };

  const getCategoryName = (catId) => {
    switch (catId) {
      case 'all': return t('allProducts');
      case 'smartphones': return t('smartphones');
      case 'samsung': return t('samsungGalaxy');
      case 'iphone': return t('appleIphone');
      case 'audio': return t('audio');
      case 'wearables': return t('wearables');
      case 'accessories': return t('accessories');
      default: return catId;
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Showcase Carousel */}
      <HeroBanner />

      {/* Main Store Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Category Navigation Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {t('exploreByCategory')}
            </h2>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              {t('showingItems')} {filteredProducts.length}
            </span>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{getCategoryName(cat.id)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter & Sorting Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
          
          {/* Brand Filter Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              {t('brand')}:
            </span>
            {['all', 'Apple', 'Samsung'].map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  selectedBrand === brand
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {brand === 'all' ? t('allBrands') : brand}
              </button>
            ))}
          </div>

          {/* Price Range Filter & Sorting Dropdown */}
          <div className="flex flex-wrap items-center gap-3 ml-auto">
            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2 outline-hidden cursor-pointer"
            >
              <option value="all">{t('allPrices')}</option>
              <option value="under300">{t('under300')}</option>
              <option value="300-800">{t('price300to800')}</option>
              <option value="over800">{t('over800')}</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2 outline-hidden cursor-pointer"
            >
              <option value="featured">{t('featured')}</option>
              <option value="price-low">{t('priceLowHigh')}</option>
              <option value="price-high">{t('priceHighLow')}</option>
              <option value="rating">{t('highestRated')}</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center space-y-4">
            <p className="text-slate-500 text-sm">{t('noProductsFound')}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setPriceRange('all');
              }}
              className="bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {t('resetFilters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Head-to-Head Flagship Phone Spotlight Section */}
        <div className="mt-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              {t('flagshipHeadToHead')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              {t('headToHeadTitle')}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              {t('headToHeadDesc')}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsCompareOpen(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-md"
              >
                <Scale className="w-4 h-4 text-blue-400" />
                <span>{t('compareSideBySide')}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Samsung Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-blue-400">
                  {language === 'km' ? 'ស្តេច AI លើប្រព័ន្ធ Android' : 'Android AI Titan'}
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">Galaxy S24 Ultra</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">✓ <strong>200MP</strong> Quad Telephoto + 100x Space Zoom</li>
                  <li className="flex items-center gap-2">✓ <strong>Built-in S Pen</strong> {language === 'km' ? 'ប៊ិចសរសេរឆ្លាតវៃ' : 'for precision productivity'}</li>
                  <li className="flex items-center gap-2">✓ <strong>Galaxy AI</strong> Live Translate & Circle to Search</li>
                  <li className="flex items-center gap-2">✓ <strong>Corning Gorilla Armor</strong> {language === 'km' ? 'កញ្ចក់ការពារចំណាំងពន្លឺ' : 'anti-glare flat display'}</li>
                </ul>
              </div>
              <button
                onClick={() => navigate('/product/samsung-galaxy-s24-ultra')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <span>{t('viewS24Detail')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Apple Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  {language === 'km' ? 'ស្តេចល្បឿន Apple Silicon' : 'Apple Silicon Leader'}
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">iPhone 16 Pro Max</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2">✓ <strong>A18 Pro Chip</strong> + Apple Intelligence</li>
                  <li className="flex items-center gap-2">✓ <strong>Camera Control</strong> {language === 'km' ? 'ប៊ូតុងបញ្ជាកាមេរ៉ាថ្មី' : 'button for tactile shooting'}</li>
                  <li className="flex items-center gap-2">✓ <strong>4K 120 fps Dolby Vision</strong> cinematic video</li>
                  <li className="flex items-center gap-2">✓ <strong>33h Battery</strong> {language === 'km' ? 'ថ្មកាន់បានរហូតដល់ ៣៣ ម៉ោង' : 'video playback endurance'}</li>
                </ul>
              </div>
              <button
                onClick={() => navigate('/product/apple-iphone-16-pro-max')}
                className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{t('viewIPhoneDetail')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Audio & Accessories Highlight Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                {t('audioSectionTitle')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('audioSectionDesc')}
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory('audio')}
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{t('viewAllAudio')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.category === 'audio' || p.category === 'accessories').slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
