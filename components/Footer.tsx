
import React from 'react';
import { Facebook, MessageCircle, Mail, Phone, MapPin, ShoppingBag, Settings } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-1 mb-4">
            <ShoppingBag className="text-[#E91E63]" size={28} strokeWidth={2.5} />
            <div className="text-2xl font-bold">
              <span className="text-[#E91E63]">cart</span>
              <span className="text-[#14CCEA]">up</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm italic mb-6">Your Ultimate Shopping Hub</p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#14CCEA]/10 p-2 rounded-none text-[#14CCEA] hover:bg-[#14CCEA] hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-[#E91E63]/10 p-2 rounded-none text-[#E91E63] hover:bg-[#E91E63] hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-800">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#14CCEA]" />
              <span>support@cartup.com.bd</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#14CCEA]" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#14CCEA] shrink-0 mt-0.5" />
              <span>House 123, Road 45, Sector 7, Uttara, Dhaka</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-800">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#14CCEA] hover:translate-x-1 inline-block transition-all">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:text-[#14CCEA] hover:translate-x-1 inline-block transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#14CCEA] hover:translate-x-1 inline-block transition-all">Terms and Conditions</a></li>
            <li>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onAdminClick?.();
                }}
                className="hover:text-[#14CCEA] hover:translate-x-1 inline-block transition-all flex items-center gap-2 text-[#E91E63] font-bold"
              >
                <Settings size={14} /> Admin Dashboard
              </button>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-800">Useful Links</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#E91E63] hover:translate-x-1 inline-block transition-all">Why Shop with CartUp</a></li>
            <li><a href="#" className="hover:text-[#E91E63] hover:translate-x-1 inline-block transition-all">Payment Methods</a></li>
            <li><a href="#" className="hover:text-[#E91E63] hover:translate-x-1 inline-block transition-all">After Sales Support</a></li>
            <li><a href="#" className="hover:text-[#E91E63] hover:translate-x-1 inline-block transition-all">Faq</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} All Copyrights Reserved by <span className="text-[#E91E63] font-bold">cart</span><span className="text-[#14CCEA] font-bold">up</span>
      </div>
    </footer>
  );
};

export default Footer;
