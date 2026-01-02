
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <ShoppingBag className="text-[#E91E63]" size={32} strokeWidth={2.5} />
          <div className="font-bold text-2xl tracking-tight flex items-center">
            <span className="text-[#E91E63]">cart</span>
            <span className="text-[#14CCEA]">up</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-none py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#14CCEA]/50 focus:border-[#14CCEA]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" size={20} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer group">
            <ShoppingCart className="text-gray-700" size={24} />
            <span className="absolute -top-2 -right-2 bg-[#E91E63] text-white text-[10px] font-bold rounded-none w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-2 cursor-pointer text-sm font-medium">
            <User size={24} className="text-[#14CCEA]" />
            <span>Login / SignUp</span>
          </div>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
