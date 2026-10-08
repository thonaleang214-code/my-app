import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { CompareProvider } from './context/CompareContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CompareModal } from './components/CompareModal';
import { NotificationToast } from './components/NotificationToast';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <CompareProvider>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
              {/* Top Navigation */}
              <Navbar />

              {/* Primary Routes */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  {/* Fallback to Home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              {/* Modals & Drawers */}
              <CartDrawer />
              <QuickViewModal />
              <CompareModal />
              <NotificationToast />

              {/* Footer */}
              <Footer />
            </div>
          </CompareProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
