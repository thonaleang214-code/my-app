import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [compareIds, setCompareIds] = useState(['samsung-galaxy-s24-ultra', 'apple-iphone-16-pro-max']);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const toggleCompare = (productId) => {
    setCompareIds(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      if (prev.length >= 3) {
        return [prev[1], prev[2], productId];
      }
      return [...prev, productId];
    });
  };

  const isInCompare = (productId) => compareIds.includes(productId);

  const removeCompare = (productId) => {
    setCompareIds(prev => prev.filter(id => id !== productId));
  };

  return (
    <CompareContext.Provider
      value={{
        compareIds,
        toggleCompare,
        isInCompare,
        removeCompare,
        isCompareOpen,
        setIsCompareOpen
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
