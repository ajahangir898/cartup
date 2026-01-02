
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

const ProductDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
        <Home size={16} className="text-[#14CCEA]" />
        <ChevronRight size={14} />
        <span className="hover:text-[#14CCEA] cursor-pointer">Mobiles Tablets</span>
        <ChevronRight size={14} />
        <span className="hover:text-[#14CCEA] cursor-pointer">Mobile Accessories</span>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-medium">Cables Converters</span>
      </nav>

      {/* Main Content Card */}
      <div className="bg-white rounded-none shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-5">
            <ProductGallery />
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-7">
            <ProductInfo />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <ProductTabs />
    </div>
  );
};

export default ProductDetails;
