
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { apiFetch, API_ENDPOINTS } from '../api/client';

const Hero: React.FC = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBanners = async () => {
      const data = await apiFetch(API_ENDPOINTS.BANNERS, [
        { id: 1, image: 'https://picsum.photos/seed/shopping/800/600', title: 'YOUR DAILY SHOPPING PARTNER' }
      ]);
      setBanners(data);
      setLoading(false);
    };
    loadBanners();
  }, []);

  if (loading) return <div className="max-w-7xl mx-auto px-4 mt-4 h-[400px] bg-gray-100 animate-pulse"></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-4">
      {/* Main Slide */}
      <div className="relative rounded-none overflow-hidden bg-[#14CCEA]/10 flex flex-col md:flex-row min-h-[400px]">
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#14CCEA] leading-tight mb-2 uppercase">
            {banners[0]?.title || 'YOUR DAILY SHOPPING PARTNER'}
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-[#E91E63] italic mb-4">
            "Everything you need!"
          </p>
          <div className="text-xl font-bold tracking-widest text-gray-900 mt-4 flex items-center gap-1">
            <span className="text-[#E91E63]">CART</span>
            <span className="text-[#14CCEA]">UP</span>
          </div>
        </div>
        
        <div className="flex-1 relative min-h-[300px] md:min-h-auto bg-white">
          <img 
            src={banners[0]?.image || "https://picsum.photos/seed/shopping/800/600"} 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14CCEA]/20 to-transparent"></div>
        </div>

        {/* Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-none transition-colors shadow-md text-[#14CCEA]">
          <ChevronLeft />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-none transition-colors shadow-md text-[#14CCEA]">
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-none ${i === 0 ? 'bg-[#14CCEA]' : 'bg-white'}`}></div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mt-4 bg-gradient-to-r from-[#14CCEA] to-[#E91E63] p-4 rounded-none flex items-center justify-between text-white shadow-lg overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
          <h2 className="text-2xl font-black italic">FLASH SALE IS LIVE!</h2>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-none text-sm font-bold border border-white/30">
            Up to 70% Discount
          </div>
        </div>
        <button className="bg-white text-[#E91E63] px-6 py-2 rounded-none font-bold hover:bg-gray-100 transition-colors uppercase text-sm shadow-md">
          Grab Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
