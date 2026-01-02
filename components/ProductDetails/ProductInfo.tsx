
import React, { useState } from 'react';
import { Star, Share2, Heart, ShieldCheck, ChevronDown, Minus, Plus } from 'lucide-react';

const ProductInfo: React.FC = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#14CCEA] font-bold text-xs">
        <ShieldCheck size={16} />
        <span>Verified</span>
      </div>
      
      <h1 className="text-xl md:text-2xl font-medium text-gray-800 leading-tight">
        CASIFY CU01 Multi Charging Cable 3 In 1 Fast Charging Cable Type C / Lightning / Micro USB Support 5A
      </h1>

      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="flex text-orange-400">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <span className="text-sm text-[#14CCEA] hover:underline cursor-pointer">3 Ratings</span>
        </div>
        <div className="flex gap-4 text-gray-400">
          <button className="hover:text-[#E91E63]"><Share2 size={20} /></button>
          <button className="hover:text-[#E91E63]"><Heart size={20} /></button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
           <span className="text-xs text-gray-500">Brand:</span>
           <span className="text-sm text-[#14CCEA] font-medium">CASIFY</span>
        </div>
        <div className="text-[10px] text-gray-400">Free Shipping</div>
      </div>

      <div className="flex items-baseline gap-3 pt-2">
        <span className="text-3xl font-bold text-[#E91E63]">৳ 189</span>
        <span className="text-gray-400 line-through text-sm">৳ 297</span>
        <span className="bg-[#E91E63]/10 text-[#E91E63] text-xs font-bold px-1.5 py-0.5 rounded-none">
          -36%
        </span>
        <span className="ml-auto text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded-none border border-green-100">In Stock</span>
      </div>

      <div className="flex flex-col gap-3 py-4 border-t border-b">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 w-16">Voucher</span>
          <button className="flex items-center gap-2 bg-[#E91E63]/5 text-[#E91E63] border border-[#E91E63]/20 px-3 py-1 rounded-none text-xs font-medium">
            Min. spend ৳ 300 <ChevronDown size={14} />
          </button>
          <span className="text-[10px] text-gray-400 ml-auto">SKU: CU-689509-1145868</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 w-16">Color</span>
          <div className="flex gap-2">
            <div className="p-1 border-2 border-[#14CCEA] rounded-none cursor-pointer">
              <img src="https://picsum.photos/seed/cable1/40/40" className="w-10 h-10 object-cover" alt="Blue" />
              <p className="text-[10px] text-center mt-1">Blue</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <span className="text-sm text-gray-500 w-16">Quantity</span>
          <div className="flex items-center border rounded-none">
            <button onClick={() => setQty(Math.max(1, qty-1))} className="p-2 hover:bg-gray-100 text-gray-400"><Minus size={16} /></button>
            <span className="px-4 font-bold text-sm">{qty}</span>
            <button onClick={() => setQty(qty+1)} className="p-2 hover:bg-gray-100 text-gray-400"><Plus size={16} /></button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button className="flex-1 bg-[#E91E63] text-white font-bold py-3 rounded-none hover:opacity-90 shadow-lg transition-all active:scale-95">
          Buy Now
        </button>
        <button className="flex-1 bg-[#14CCEA] text-white font-bold py-3 rounded-none hover:opacity-90 shadow-lg transition-all active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
