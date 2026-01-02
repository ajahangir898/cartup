
import React, { useState, Suspense, lazy } from 'react';
import AdminNotice from './components/AdminNotice';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FlashDeals from './components/FlashDeals';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Loader2 } from 'lucide-react';

/**
 * LAZY LOADING: The AdminDashboard is not loaded when the app starts.
 * It is only downloaded from the server when the user clicks "Access Administrative Area".
 * This significantly reduces the initial loading speed for customers.
 */
const AdminDashboard = lazy(() => import('./components/Admin/AdminDashboard'));

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [view, setView] = useState<'home' | 'product' | 'admin'>('home');

  const handleProductClick = () => {
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminClick = () => {
    setView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If the admin view is triggered, show the lazy-loaded dashboard with a fallback UI
  if (view === 'admin') {
    return (
      <Suspense fallback={
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-4 p-4 text-center">
          <Loader2 className="animate-spin text-[#14CCEA]" size={48} />
          <h2 className="text-xl font-bold tracking-widest uppercase">
            Downloading <span className="text-[#E91E63]">Admin</span> Management Tools...
          </h2>
          <p className="text-gray-400 text-xs max-w-xs">
            Establishing secure bridge to backend via CORS proxy.
          </p>
        </div>
      }>
        <AdminDashboard onExit={handleHomeClick} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* The AdminNotice fetches live scrolling text from your API */}
      <AdminNotice />
      
      <div onClick={handleHomeClick} className="cursor-pointer">
        <Header cartCount={cartItems.length} />
      </div>
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <CategorySection />
            
            <div className="bg-white">
              <div onClick={handleProductClick} className="cursor-pointer">
                <FlashDeals />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 text-center flex flex-col items-center gap-4">
               <button 
                 onClick={handleProductClick}
                 className="bg-white border-2 border-[#14CCEA] text-[#14CCEA] px-8 py-3 rounded-none font-bold hover:bg-[#14CCEA] hover:text-white transition-all shadow-md"
               >
                 View Sample Product Page Demo
               </button>
               
               <div className="mt-12 opacity-40 hover:opacity-100 transition-opacity">
                 <button 
                   onClick={handleAdminClick}
                   className="text-xs text-gray-500 hover:text-[#E91E63] underline"
                 >
                   Access Administrative Area
                 </button>
               </div>
            </div>
          </>
        ) : (
          <ProductDetails />
        )}
      </main>

      <Footer onAdminClick={handleAdminClick} />
      <FloatingUI itemCount={cartItems.length} />
    </div>
  );
};

export default App;
