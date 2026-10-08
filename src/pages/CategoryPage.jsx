import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export function CategoryPage() {
  const { category: categoryName } = useParams();
  const { t, language } = useLanguage();
  const [sortBy, setSortBy] = useState('featured');

  const meta = useMemo(() => {
    if (language === 'km') {
      switch (categoryName) {
        case 'samsung':
          return {
            title: 'ស្មាតហ្វូន Samsung Galaxy & ប្រព័ន្ធអេកូឡូស៊ី',
            description: 'ទទួលបានបទពិសោធន៍ជាមួយ Galaxy AI, កាមេរ៉ា 200MP Space Zoom, តួទូរស័ព្ទ Titanium និងទូរស័ព្ទបត់ Fold/Flip ទំនើប។',
            tag: 'មជ្ឈមណ្ឌល Samsung ផ្លូវការ'
          };
        case 'iphone':
          return {
            title: 'កំពូលស្មាតហ្វូន Apple iPhone',
            description: 'ដំណើរការដោយ Apple Silicon, បន្ទះឈីប A18 Pro, កាមេរ៉ា 48MP Fusion និងលោហៈ Titanium ជាប់ធន់។',
            tag: 'ហាង Apple ផ្លូវការ'
          };
        case 'audio':
          return {
            title: 'កាស AirPods & ឧបករណ៍សំឡេងគុណភាពខ្ពស់',
            description: 'AirPods Pro 2, AirPods Max និង Galaxy Buds3 Pro ផ្តល់គុណភាពសំឡេងកម្រិតស្ទូឌីយោ និងកាត់បន្ថយសំឡេងរំខាន។',
            tag: 'គុណភាពសំឡេងច្បាស់ល្អ'
          };
        case 'wearables':
          return {
            title: 'Apple Watch & Galaxy Watch Ultra',
            description: 'នាឡិកាឆ្លាតវៃ Titanium ធន់មាំខ្ពស់ វាស់ចង្វាក់បេះដូង ECG ប្រព័ន្ធ GPS ប្រេកង់ពីរ និងពន្លឺអេក្រង់ 3000 nits។',
            tag: 'នាឡិកាកីឡា & ដំណើរផ្សងព្រេង'
          };
        case 'accessories':
          return {
            title: 'ឆ្នាំងសាកល្បឿនលឿន & គ្រឿងបន្លាស់ MagSafe',
            description: 'ក្បាលសាកលឿន Samsung 45W Trio ផ្លូវការ ឆ្នាំងសាកឥតខ្សែ MagSafe និងស្រោមកាន់ការពារ។',
            tag: 'ថាមពល & គ្រឿងបន្លាស់'
          };
        default:
          return {
            title: `ផលិតផល ${categoryName}`,
            description: 'ស្វែងរកឧបករណ៍បច្ចេកវិទ្យាចុងក្រោយបង្អស់ក្នុងតម្លៃសមរម្យ។',
            tag: 'ឧបករណ៍ជ្រើសរើស'
          };
      }
    }

    switch (categoryName) {
      case 'samsung':
        return {
          title: 'Samsung Galaxy Phones & Ecosystem',
          description: 'Experience Galaxy AI, 200MP Space Zoom, titanium chassis, and revolutionary foldables.',
          tag: 'Official Samsung Hub'
        };
      case 'iphone':
        return {
          title: 'Apple iPhone Flagship Collection',
          description: 'Powered by Apple Silicon, A18 Pro chip, 48MP Fusion cameras, and durable aerospace titanium.',
          tag: 'Official Apple Store'
        };
      case 'audio':
        return {
          title: 'AirPods & Premium Audio',
          description: 'AirPods Pro 2, AirPods Max, and Galaxy Buds3 Pro with studio sound and active noise cancellation.',
          tag: 'Acoustic Precision'
        };
      case 'wearables':
        return {
          title: 'Apple Watch & Galaxy Watch Ultra',
          description: 'Rugged titanium endurance smartwatches, ECG tracking, dual-frequency GPS, and up to 3000 nits displays.',
          tag: 'Pro Wearables'
        };
      case 'accessories':
        return {
          title: 'Fast Chargers & MagSafe Accessories',
          description: 'Official 45W Samsung Trio adapters, MagSafe wireless chargers, protective accessories.',
          tag: 'Power & Gear'
        };
      default:
        return {
          title: `${categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)} Products`,
          description: 'Discover the latest technology items and accessories at the best prices.',
          tag: 'Curated Devices'
        };
    }
  }, [categoryName, language]);

  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (categoryName === 'samsung') return p.subCategory === 'samsung';
      if (categoryName === 'iphone') return p.subCategory === 'iphone';
      return p.category === categoryName;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [categoryName, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in font-sans">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors font-semibold">{t('home')}</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold capitalize">{categoryName}</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-white/10">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
          {meta.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-3 mb-2">
          {meta.title}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
          {meta.description}
        </p>
      </div>

      {/* Sorting bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
        <p className="text-xs sm:text-sm font-bold text-slate-700">
          {t('productsFound')}: <span className="text-blue-600">{categoryProducts.length}</span> {t('results')}
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2 outline-hidden cursor-pointer"
        >
          <option value="featured">{t('featured')}</option>
          <option value="price-low">{t('priceLowHigh')}</option>
          <option value="price-high">{t('priceHighLow')}</option>
          <option value="rating">{t('highestRated')}</option>
        </select>
      </div>

      {/* Product Grid */}
      {categoryProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-500 mb-4">{t('noProductsFound')}</p>
          <Link to="/" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs inline-block">
            {t('returnToShopping')}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
