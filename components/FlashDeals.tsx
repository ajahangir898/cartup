
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { FLASH_DEALS } from '../constants';
import ProductCard from './ProductCard';
import { apiFetch, API_ENDPOINTS } from '../api/client';
import { Product } from '../types';

const FlashDeals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [timeLeft, setTimeLeft] = useState({ h: 7, m: 37, s: 20 });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await apiFetch<Product[]>(API_ENDPOINTS.PRODUCTS, FLASH_DEALS);
      setProducts(data);
    };
    loadProducts();

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 border-b pb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Flash Deals</h2>
          <div className="flex gap-2">
            {[
              { val: timeLeft.h, label: 'Hours' },
              { val: timeLeft.m, label: 'Mins' },
              { val: timeLeft.s, label: 'Sec' }
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center">
                <div className="bg-[#E91E63] text-white rounded-none px-2 py-1 min-w-[38px] font-bold text-center text-sm shadow-sm">
                  {String(t.val).padStart(2, '0')}
                </div>
                <span className="text-[9px] uppercase font-black text-gray-400 mt-1">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="text-sm flex items-center text-[#14CCEA] hover:text-[#E91E63] font-bold transition-colors">
          View All Products <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
