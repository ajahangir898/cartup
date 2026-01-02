
import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-none p-3 flex flex-col group relative border border-gray-100 hover:border-[#14CCEA]/30 transition-all hover:shadow-md">
      {/* Discount Badge */}
      {product.discountPercentage > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-[#E91E63] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-none shadow-sm">
          {product.discountPercentage}% OFF
        </div>
      )}
      
      {/* Image */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-none bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xs md:text-sm font-medium text-gray-700 line-clamp-2 min-h-[32px] md:min-h-[40px] mb-2">
          {product.name}
        </h3>
        <div className="mt-auto mb-3">
          <div className="text-sm md:text-base font-bold text-gray-900 leading-none">
            ৳ {product.price.toLocaleString()}
          </div>
          {product.originalPrice > product.price && (
            <div className="text-[10px] md:text-xs text-gray-400 line-through mt-0.5">
              ৳ {product.originalPrice.toLocaleString()}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto">
          {product.inStock ? (
            <div className="flex gap-2 items-center">
              {/* Add to Cart Icon Button */}
              <button 
                title="Add to cart"
                className="flex items-center justify-center w-10 h-10 rounded-none border-2 border-[#14CCEA] text-[#14CCEA] hover:bg-gradient-to-tr hover:from-[#14CCEA] hover:to-[#E91E63] hover:text-white hover:border-transparent transition-all duration-300 shrink-0"
              >
                <ShoppingCart size={18} />
              </button>
              
              {/* Buy Now Button */}
              <button className="flex-1 bg-gradient-to-r from-[#14CCEA] to-[#E91E63] text-white font-bold text-sm rounded-none h-10 hover:opacity-90 hover:scale-[1.02] transition-all shadow-md active:scale-95">
                Buy Now
              </button>
            </div>
          ) : (
            <button disabled className="w-full bg-gray-100 text-gray-400 text-[10px] md:text-xs font-bold h-10 rounded-none uppercase cursor-not-allowed">
              Stock Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
