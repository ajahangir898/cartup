
import React from 'react';
import { ShoppingCart, MessageSquare } from 'lucide-react';

interface FloatingUIProps {
  itemCount: number;
}

const FloatingUI: React.FC<FloatingUIProps> = ({ itemCount }) => {
  return (
    <>
      {/* Sticky Cart on Right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white border-2 border-r-0 border-[#14CCEA] shadow-2xl rounded-none flex flex-col overflow-hidden w-16 md:w-20">
        <div className="p-2 text-center bg-[#14CCEA]/5 border-b border-[#14CCEA]/20">
          <span className="text-[10px] font-bold text-gray-600">{itemCount} Items</span>
        </div>
        <div className="p-3 md:p-4 flex justify-center text-[#E91E63]">
          <ShoppingCart size={24} className="animate-bounce" />
        </div>
        <div className="bg-[#14CCEA] text-white p-2 text-center">
          <span className="text-[10px] font-bold">৳ 0</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-tr from-[#14CCEA] to-[#0bb5d1] text-white p-4 rounded-none shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white">
          <MessageSquare size={24} />
        </button>
      </div>
    </>
  );
};

export default FloatingUI;
