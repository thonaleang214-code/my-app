import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext(null);

export function parseRoute(hashString) {
  // Normalize hash, default to '/'
  let clean = (hashString || window.location.hash || '#/').replace(/^#/, '');
  if (!clean.startsWith('/')) clean = '/' + clean;

  const [pathWithSearch] = clean.split('?');
  const pathParts = pathWithSearch.split('/').filter(Boolean);

  if (pathParts.length === 0) {
    return { name: 'home', params: {}, path: '/' };
  }

  // e.g. /product/:id
  if (pathParts[0] === 'product' && pathParts[1]) {
    return { name: 'product', params: { id: pathParts[1] }, path: `/product/${pathParts[1]}` };
  }

  // e.g. /category/:category
  if (pathParts[0] === 'category' && pathParts[1]) {
    return { name: 'category', params: { category: pathParts[1] }, path: `/category/${pathParts[1]}` };
  }

  // e.g. /cart
  if (pathParts[0] === 'cart') {
    return { name: 'cart', params: {}, path: '/cart' };
  }

  // e.g. /checkout
  if (pathParts[0] === 'checkout') {
    return { name: 'checkout', params: {}, path: '/checkout' };
  }

  // e.g. /wishlist
  if (pathParts[0] === 'wishlist') {
    return { name: 'wishlist', params: {}, path: '/wishlist' };
  }

  return { name: 'home', params: {}, path: '/' };
}

export function RouterProvider({ children }) {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (to) => {
    let target = to;
    if (!target.startsWith('#')) {
      target = '#' + (target.startsWith('/') ? target : '/' + target);
    }
    if (window.location.hash === target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = target;
    }
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter();
  const href = to.startsWith('#') ? to : '#' + (to.startsWith('/') ? to : '/' + to);

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
