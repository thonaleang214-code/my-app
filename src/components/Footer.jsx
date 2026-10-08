import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Check, Zap } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm mt-24 border-t border-slate-900 font-sans">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 p-8 sm:p-12 rounded-3xl border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                {t('vipBenefits')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t('vipTitle')}
              </h3>
              <p className="text-slate-300 text-sm max-w-md">
                {t('vipDesc')}
              </p>
            </div>

            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-5 py-3 rounded-2xl text-sm font-semibold">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>{t('welcomeSubscribed')}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                  <input
                    type="email"
                    required
                    placeholder={t('subscribePlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-900/80 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl border border-slate-700 focus:border-blue-500 focus:outline-hidden flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer active:scale-95"
                  >
                    {t('subscribe')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Tech<span className="text-blue-500">Vibe</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
                {t('samsungPartner')}
              </span>
              <span className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
                {t('applePartner')}
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              {t('shopCategories')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/category/samsung')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Samsung Galaxy S24 & Fold
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/iphone')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Apple iPhone 16 & 15 Pro
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/audio')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  AirPods Pro & Galaxy Buds
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/wearables')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Apple Watch & Galaxy Watch
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/category/accessories')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  MagSafe & 45W Chargers
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              {t('support')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{t('orderTracking')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{t('shippingDelivery')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{t('warrantyClaims')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{t('tradeIn')}</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">{t('returnsRefunds')}</li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              {t('contactHours')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>📞 +1 (800) 832-4842</li>
              <li>✉️ support@techvibe.store</li>
              <li>🕒 Mon - Sun: 8:00 AM - 10:00 PM</li>
              <li className="pt-2 text-slate-500 text-xs">
                {t('expressDispatch')}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TechVibe Electronics Inc. {t('rightsReserved')}
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="text-emerald-500 font-semibold">● System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
