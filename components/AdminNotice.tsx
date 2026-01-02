
import React, { useState, useEffect } from 'react';
import { Megaphone } from 'lucide-react';
import { apiFetch, API_ENDPOINTS } from '../api/client';

const AdminNotice: React.FC = () => {
  const [notice, setNotice] = useState('Welcome to CartUp! Enjoy the best gadget deals in Bangladesh.');

  useEffect(() => {
    const loadNotice = async () => {
      try {
        const data = await apiFetch<{text: string}>(API_ENDPOINTS.NOTICE, { text: notice });
        if (data?.text) setNotice(data.text);
      } catch (e) {
        // Fallback to default
      }
    };
    loadNotice();
  }, []);

  return (
    <div className="bg-white border-b py-2 px-4 hidden md:flex items-center justify-between text-xs text-gray-600">
      <div className="flex items-center gap-2 font-bold text-[#E91E63]">
        <Megaphone size={14} />
        <span>Update:</span>
      </div>
      <div className="flex-1 text-center overflow-hidden">
        <div className="whitespace-nowrap animate-pulse">
          <span>{notice}</span>
        </div>
      </div>
      <div className="w-10"></div>
    </div>
  );
};

export default AdminNotice;
