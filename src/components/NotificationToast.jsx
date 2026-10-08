import React from 'react';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

export function NotificationToast() {
  const { toast } = useCart();

  if (!toast.show) return null;

  const bgStyles = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    info: 'bg-indigo-600 text-white'
  }[toast.type] || 'bg-slate-900 text-white';

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all transform animate-bounce-in max-w-sm">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl ${bgStyles}`}>
        <div className="bg-white/20 p-1.5 rounded-full">
          <Check className="w-4 h-4 text-white" />
        </div>
        <p className="text-sm font-medium pr-2">{toast.message}</p>
      </div>
    </div>
  );
}
