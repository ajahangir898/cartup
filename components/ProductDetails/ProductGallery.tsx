
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/cable1/600/600',
    'https://picsum.photos/seed/cable2/600/600',
    'https://picsum.photos/seed/cable3/600/600',
    'https://picsum.photos/seed/cable4/600/600',
    'https://picsum.photos/seed/cable5/600/600',
  ];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square rounded-none overflow-hidden bg-gray-50 border border-gray-100">
        <img 
          src={images[activeImg]} 
          alt="Product" 
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-4 left-4 bg-[#14CCEA] text-white text-[10px] font-bold px-2 py-1 rounded-none flex items-center gap-1">
          FREE DELIVERY
        </div>
      </div>
      
      <div className="relative flex items-center gap-2 px-8">
        <button 
          onClick={() => setActiveImg(prev => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-0 p-1 hover:text-[#14CCEA]"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`w-16 h-16 rounded-none border-2 shrink-0 overflow-hidden transition-all ${
                activeImg === idx ? 'border-[#E91E63]' : 'border-transparent hover:border-gray-200'
              }`}
            >
              <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <button 
          onClick={() => setActiveImg(prev => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-0 p-1 hover:text-[#14CCEA]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
