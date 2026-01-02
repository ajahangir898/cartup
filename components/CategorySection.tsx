
import React, { useState, useEffect } from 'react';
import { CATEGORIES, getCategoryIcon } from '../constants';
import { ChevronRight } from 'lucide-react';
import { apiFetch, API_ENDPOINTS } from '../api/client';
import { Category } from '../types';

const CategorySection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await apiFetch<Category[]>(API_ENDPOINTS.CATEGORIES, CATEGORIES);
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Categories</h2>
        <button className="text-sm flex items-center text-[#14CCEA] hover:text-[#E91E63] font-bold transition-colors">
          Browse Categories <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="bg-white border-2 border-transparent rounded-none p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#14CCEA] hover:shadow-xl transition-all group text-center h-32"
          >
            <div className="group-hover:scale-110 transition-transform text-[#E91E63]">
              {getCategoryIcon(cat.icon)}
            </div>
            <span className="text-xs font-bold text-gray-600 whitespace-pre-wrap leading-tight group-hover:text-[#14CCEA]">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
