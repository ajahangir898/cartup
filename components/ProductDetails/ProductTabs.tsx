
import React, { useState } from 'react';
// Add missing import for Star icon from lucide-react
import { Star } from 'lucide-react';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Specifications');
  const tabs = ['Product Details', 'Specifications', 'Seller', 'Reviews', 'Questions'];

  return (
    <div className="mt-8 bg-white rounded-none shadow-sm border overflow-hidden">
      <div className="flex border-b overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-4 ${
              activeTab === tab 
                ? 'border-[#14CCEA] text-[#14CCEA] bg-[#14CCEA]/5' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'Specifications' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Specifications</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { l: 'Type', v: '3 in 1 USB cable' },
                { l: 'USB Type', v: 'Multifunction Fast Charging' },
                { l: 'Material', v: 'TPE, Pure Copper' },
                { l: 'Connector', v: 'USB 2.0 Connector' },
                { l: 'Brand', v: 'CASIFY' },
                { l: 'Quality', v: '100% QC Pass' },
                { l: 'Feature', v: 'Smart phone Super Fast Charging' },
                { l: 'Usage', v: 'Cell Phone Fast Charging' }
              ].map((item, idx) => (
                <li key={idx} className="flex text-sm">
                  <span className="w-1/3 text-gray-500 font-medium">• {item.l}:</span>
                  <span className="flex-1 text-gray-700">{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'Reviews' && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-none">
              <div className="text-center">
                <div className="text-5xl font-black text-gray-800">5.0<span className="text-2xl text-gray-400">/5</span></div>
                <div className="flex text-orange-400 justify-center my-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <div className="text-xs text-gray-400">Ratings & Reviews</div>
              </div>
              <div className="flex-1 w-full space-y-2">
                {[5,4,3,2,1].map(star => (
                  <div key={star} className="flex items-center gap-4">
                    <div className="flex text-orange-400 w-24">
                       {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < star ? "currentColor" : "none"} className={i < star ? "" : "text-gray-300"} />)}
                    </div>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-none overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-[#14CCEA] to-[#E91E63]" style={{ width: star === 5 ? '100%' : '0%' }}></div>
                    </div>
                    <div className="text-xs text-gray-400 w-4">{star === 5 ? '3' : '0'}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divide-y">
              {[1,2,3].map(rev => (
                <div key={rev} className="py-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex text-orange-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                      <span className="ml-2 text-xs text-gray-400">5.0/5.0</span>
                    </div>
                    <span className="text-xs text-gray-400">27 Dec 2025</span>
                  </div>
                  <div className="text-sm font-bold text-gray-700">Mr./Ms..</div>
                  <div className="text-sm text-gray-600 mt-1 italic">Beautiful product 👍👍</div>
                  <div className="text-[10px] text-gray-400 mt-2">Color-Blue</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
