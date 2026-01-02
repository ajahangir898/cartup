
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  LogOut,
  ChevronRight,
  Loader2,
  Wifi,
  WifiOff,
  Megaphone
} from 'lucide-react';
import { apiFetch, adminApi, API_ENDPOINTS } from '../../api/client';

type AdminTab = 'products' | 'categories' | 'banners' | 'settings';

const AdminDashboard: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [apiStatus, setApiStatus] = useState<{online: boolean, latency: number}>({ online: false, latency: 0 });

  // Form States
  const [formData, setFormData] = useState<any>({});
  const [noticeText, setNoticeText] = useState('');

  const checkConnectivity = async () => {
    const status = await adminApi.checkStatus();
    setApiStatus(status);
  };

  const loadData = async () => {
    if (activeTab === 'settings') return;
    setLoading(true);
    let endpoint = '';
    if (activeTab === 'products') endpoint = API_ENDPOINTS.PRODUCTS;
    if (activeTab === 'categories') endpoint = API_ENDPOINTS.CATEGORIES;
    if (activeTab === 'banners') endpoint = API_ENDPOINTS.BANNERS;

    try {
      const result = await apiFetch(endpoint, []);
      setData(Array.isArray(result) ? result : []);
    } catch (e) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkConnectivity();
    loadData();
    setShowForm(false);
    setFormData({});
  }, [activeTab]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    let endpoint = '';
    if (activeTab === 'products') endpoint = API_ENDPOINTS.PRODUCTS;
    if (activeTab === 'categories') endpoint = API_ENDPOINTS.CATEGORIES;
    if (activeTab === 'banners') endpoint = API_ENDPOINTS.BANNERS;

    try {
      await adminApi.deleteItem(endpoint, id);
      loadData();
    } catch (e) {
      alert('Action failed. Ensure backend supports DELETE.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let endpoint = '';
    if (activeTab === 'products') endpoint = API_ENDPOINTS.PRODUCTS;
    if (activeTab === 'categories') endpoint = API_ENDPOINTS.CATEGORIES;
    if (activeTab === 'banners') endpoint = API_ENDPOINTS.BANNERS;

    try {
      await adminApi.addItem(endpoint, formData);
      setShowForm(false);
      setFormData({});
      loadData();
    } catch (e) {
      alert('Upload failed. Check if API is running at the configured IP.');
    }
  };

  const handleUpdateNotice = async () => {
    try {
      await adminApi.updateNotice(noticeText);
      alert('Notice updated successfully!');
    } catch (e) {
      alert('Failed to update notice.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-[#14CCEA]" />
            <span className="font-bold text-xl tracking-tight">Admin<span className="text-[#E91E63]">Panel</span></span>
          </div>
          <div className={`flex items-center gap-1.5 text-[10px] uppercase font-bold px-2 py-1 rounded-none w-fit ${apiStatus.online ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {apiStatus.online ? <Wifi size={10} /> : <WifiOff size={10} />}
            {apiStatus.online ? `API Online (${apiStatus.latency}ms)` : 'API Offline'}
          </div>
        </div>
        
        <nav className="flex-1 py-4">
          {[
            { id: 'products', label: 'Products', icon: <Package size={18} /> },
            { id: 'categories', label: 'Categories', icon: <Layers size={18} /> },
            { id: 'banners', label: 'Banners', icon: <ImageIcon size={18} /> },
            { id: 'settings', label: 'Site Settings', icon: <Megaphone size={18} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all ${
                activeTab === item.id 
                ? 'bg-[#14CCEA] text-white border-r-4 border-[#E91E63]' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
              {activeTab === item.id && <ChevronRight size={14} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <button 
          onClick={onExit}
          className="p-6 border-t border-gray-800 flex items-center gap-3 text-gray-400 hover:text-[#E91E63] transition-colors"
        >
          <LogOut size={18} />
          <span>Exit Admin</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 capitalize">{activeTab} Management</h2>
          {activeTab !== 'settings' && (
            <button 
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-[#14CCEA] to-[#E91E63] text-white px-4 py-2 rounded-none font-bold text-sm flex items-center gap-2 shadow-md hover:opacity-90 transition-all"
            >
              <Plus size={18} />
              Add New {activeTab.slice(0, -1)}
            </button>
          )}
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'settings' ? (
            <div className="bg-white p-8 border-2 border-[#14CCEA] max-w-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
                <Megaphone className="text-[#E91E63]" /> Update Site Notice
              </h3>
              <p className="text-sm text-gray-500 mb-6">This message appears at the very top of the homepage for all users.</p>
              <textarea 
                className="w-full border p-4 rounded-none h-32 focus:border-[#14CCEA] outline-none transition-all mb-4"
                placeholder="Enter new scrolling notice text..."
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
              ></textarea>
              <button 
                onClick={handleUpdateNotice}
                className="bg-[#14CCEA] text-white px-8 py-3 font-bold hover:bg-[#E91E63] transition-all"
              >
                Update Site-wide Notice
              </button>
            </div>
          ) : (
            <>
              {showForm && (
                <div className="bg-white border-2 border-[#14CCEA] p-6 mb-8 shadow-sm">
                  <h3 className="font-bold mb-4 text-gray-700">Add New {activeTab.slice(0, -1)}</h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTab === 'products' && (
                      <>
                        <input required placeholder="Product Name" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, name: e.target.value})} />
                        <input required type="number" placeholder="Price (৳)" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, price: Number(e.target.value)})} />
                        <input type="number" placeholder="Original Price" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, originalPrice: Number(e.target.value)})} />
                        <input placeholder="Image URL" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, image: e.target.value})} />
                      </>
                    )}
                    {activeTab === 'categories' && (
                      <>
                        <input required placeholder="Category Name" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, name: e.target.value})} />
                        <select className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, icon: e.target.value})}>
                          <option value="Smartphone">Smartphone Icon</option>
                          <option value="Watch">Watch Icon</option>
                          <option value="Battery">Battery Icon</option>
                          <option value="Zap">Charger Icon</option>
                        </select>
                      </>
                    )}
                    {activeTab === 'banners' && (
                      <>
                        <input required placeholder="Banner Title" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, title: e.target.value})} />
                        <input required placeholder="Image URL" className="border p-2 rounded-none outline-none focus:border-[#14CCEA]" onChange={e => setFormData({...formData, image: e.target.value})} />
                      </>
                    )}
                    <div className="md:col-span-2 flex gap-2">
                      <button type="submit" className="bg-[#14CCEA] text-white px-6 py-2 rounded-none font-bold">Save Item</button>
                      <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 px-6 py-2 rounded-none font-bold">Cancel</button>
                    </div>
                  </form>
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center py-20"><Loader2 className="animate-spin text-[#14CCEA]" size={40} /></div>
              ) : (
                <div className="bg-white border shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Info</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {data.map((item: any) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img src={item.image || 'https://via.placeholder.com/50'} alt="" className="w-12 h-12 object-cover border" />
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-gray-800">{item.name || item.title}</div>
                            {item.price && <div className="text-xs text-[#E91E63] font-medium">৳ {item.price}</div>}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => handleDelete(item.id)} className="text-gray-400 hover:text-[#E91E63] transition-colors p-2"><Trash2 size={18} /></button>
                          </td>
                        </tr>
                      ))}
                      {data.length === 0 && (
                        <tr><td colSpan={3} className="px-6 py-10 text-center text-gray-400">No {activeTab} found in database. Try refreshing connectivity status.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
