import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCompare } from '../context/CompareContext';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Zap,
  Scale,
  Languages
} from 'lucide-react';

export function Navbar() {
  const { cartCount, setIsCartOpen, wishlist } = useCart();
  const { setIsCompareOpen, compareIds } = useCompare();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Live search preview dropdown
  const searchResults = searchQuery.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSearchItem = (productId) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    navigate(`/product/${productId}`);
  };

  const navLinks = [
    { label: t('allProducts'), path: '/' },
    { label: t('samsungGalaxy'), path: '/category/samsung' },
    { label: t('appleIphone'), path: '/category/iphone' },
    { label: t('audio'), path: '/category/audio' },
    { label: t('wearables'), path: '/category/wearables' },
    { label: t('accessories'), path: '/category/accessories' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              {t('specialDeal')}
            </span>
            <span className="hidden sm:inline font-medium">
              {t('dealBanner')}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden md:inline font-medium text-slate-400">{t('officialWarrantyBadge')}</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline font-medium text-slate-400">{t('expressDispatch')}</span>

            {/* Language Switcher Pill in Top Bar */}
            <div className="flex items-center bg-slate-900 rounded-full p-0.5 border border-slate-800">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                🇺🇸 EN
              </button>
              <button
                onClick={() => setLanguage('km')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'km'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="ប្តូរទៅជា ភាសាខ្មែរ"
              >
                🇰🇭 ខ្មែរ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">

            {/* Mobile menu button & Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="lg:hidden p-2 text-slate-700 hover:text-blue-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <span className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-0.5">
                    Tech<span className="text-blue-600">Vibe</span>
                  </span>
                  <span className="block text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1">
                    {language === 'km' ? 'ទូរស័ព្ទ & ឧបករណ៍ទំនើប' : 'Phones & Gear'}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Live Search Bar */}
            <div className="flex-1 max-w-md relative hidden md:block" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-sm pl-11 pr-10 py-2.5 rounded-full border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-hidden transition-all placeholder:text-slate-400"
                />
                <div className="absolute left-4 top-3 text-slate-400 pointer-events-none">
                  <Search className="w-4 h-4" />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 overflow-hidden animate-fade-in">
                  <div className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>{t('productsFound')}</span>
                    <span>{searchResults.length} {t('results')}</span>
                  </div>
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSelectSearchItem(product.id)}
                      className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-blue-50/50 transition-colors group cursor-pointer"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg bg-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600">
                          {product.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {product.brand} • <strong className="text-slate-700">${product.price}</strong>
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions (Compare + Wishlist + Cart) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Compare Button */}
              <button
                onClick={() => setIsCompareOpen(true)}
                className="relative p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer hidden sm:block"
                title={t('compare')}
              >
                <Scale className="w-5 h-5" />
                {compareIds.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {compareIds.length}
                  </span>
                )}
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="relative p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title={t('wishlist')}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Cart button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 bg-slate-900 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-slate-900/10 hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[11px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline">{t('cart')}</span>
              </button>
            </div>

          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4 pt-1" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full bg-slate-100 text-slate-800 text-sm pl-11 pr-4 py-2 rounded-xl border border-transparent focus:border-blue-500 focus:bg-white outline-hidden"
              />
              <div className="absolute left-4 top-2.5 text-slate-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
            {isSearchFocused && searchResults.length > 0 && (
              <div className="mt-2 bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelectSearchItem(product.id)}
                    className="w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-slate-50 cursor-pointer"
                  >
                    <img src={product.images[0]} alt={product.name} className="w-8 h-8 rounded-md object-cover" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-800">{product.name}</div>
                      <div className="text-slate-400">${product.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col justify-between shadow-2xl animate-slide-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
                    <Zap className="w-4 h-4 fill-white" />
                  </div>
                  <span className="font-extrabold text-lg text-slate-900">TechVibe</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Language switcher inside mobile menu */}
              <div className="pt-4 pb-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                  {language === 'km' ? 'ជ្រើសរើសភាសា / Language' : 'Choose Language'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      language === 'en'
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-black'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => setLanguage('km')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      language === 'km'
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-black'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>🇰🇭</span>
                    <span>ភាសាខ្មែរ</span>
                  </button>
                </div>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">{t('shopCategories')}</p>
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <p>📍 {t('dealBanner')}</p>
              <p>📞 Tech Concierge: +1 (800) 832-4842</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
