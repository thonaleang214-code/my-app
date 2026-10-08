import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PROMO_BANNERS } from '../data/products';
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // Auto cycle slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROMO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = PROMO_BANNERS[currentSlide];

  // Khmer specific slide text
  const slideTranslations = {
    km: [
      {
        subtitle: 'បច្ចេកវិទ្យា Galaxy AI មកដល់ហើយ',
        description: 'ផ្លាស់ប្តូរការរស់នៅរបស់អ្នកជាមួយមុខងារបកប្រែផ្ទាល់ Circle to Search និងប្រព័ន្ធកាមេរ៉ា 200MP។',
        cta: 'មើល Galaxy S24 Ultra',
        tag: 'កំពូលស្មាតហ្វូនប្រចាំឆ្នាំ'
      },
      {
        subtitle: 'ផលិតពីលោហៈ Titanium កម្រិតអវកាស',
        description: 'បំពាក់បន្ទះឈីប A18 Pro ប៊ូតុង Camera Control ថ្មី និងការថតវីដេអូកម្រិត 4K 120 fps Dolby Vision។',
        cta: 'ទិញ iPhone 16 Pro',
        tag: 'ផលិតផលថ្មីចុងក្រោយពី Apple'
      },
      {
        subtitle: 'គុណភាពសំឡេងកម្រិតស្ទូឌីយោ',
        description: 'មុខងារកាត់បន្ថយសំឡេងរំខាន ANC, Adaptive Audio សាកថ្មលឿនតាម USB-C និងមុខងារសុខភាពត្រចៀក។',
        cta: 'រុករកកាស AirPods',
        tag: 'បញ្ចុះតម្លៃរហូតដល់ ២០%'
      }
    ]
  };

  const currentTranslation = language === 'km' ? slideTranslations.km[currentSlide] : null;

  return (
    <div className="relative">
      {/* Main Hero Slider */}
      <div className="relative overflow-hidden bg-slate-950 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-6 shadow-2xl">
        <div className={`transition-all duration-700 bg-gradient-to-r ${slide.gradient} px-6 sm:px-12 py-16 sm:py-24 relative overflow-hidden`}>
          
          {/* Subtle background glow circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Headline & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {currentTranslation?.tag || slide.tag}
              </div>

              <div className="space-y-2">
                <p className="text-blue-400 text-sm sm:text-base font-extrabold tracking-widest uppercase">
                  {currentTranslation?.subtitle || slide.subtitle}
                </p>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                  {slide.title}
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                {currentTranslation?.description || slide.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => navigate(`/product/${slide.productId}`)}
                  className="bg-white text-slate-950 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-blue-500/30 flex items-center gap-2 group cursor-pointer active:scale-95"
                >
                  <span>{currentTranslation?.cta || slide.cta}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-sm font-semibold">
                  {t('startingAt')} <span className="text-blue-400 text-lg font-black">{slide.price}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Product Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div
                className="relative group cursor-pointer"
                onClick={() => navigate(`/product/${slide.productId}`)}
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl group-hover:bg-blue-500/30 transition-all" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative w-full max-w-md h-80 sm:h-96 object-cover rounded-3xl shadow-2xl border border-white/10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      {language === 'km' ? 'ស្មាតហ្វូនកំពូល' : 'Official Flagship'}
                    </span>
                    <h4 className="text-sm font-bold text-white">{slide.title}</h4>
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/20 px-2.5 py-1 rounded-full">
                    {t('viewDetail')} →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider navigation dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-12">
            {PROMO_BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? 'w-8 bg-blue-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Slider Prev / Next buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + PROMO_BANNERS.length) % PROMO_BANNERS.length)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 transition-colors hidden sm:block cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % PROMO_BANNERS.length)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/10 transition-colors hidden sm:block cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3.5 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t('freeShipping')}</h4>
              <p className="text-xs text-slate-500">{t('freeShippingDesc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t('officialWarranty')}</h4>
              <p className="text-xs text-slate-500">{t('officialWarrantyDesc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t('returns30Days')}</h4>
              <p className="text-xs text-slate-500">{t('returns30DaysDesc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t('priceMatch')}</h4>
              <p className="text-xs text-slate-500">{t('priceMatchDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
