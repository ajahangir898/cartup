
const RAW_BASE_URL = 'http://159.198.47.126:5001';

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  BANNERS: '/banners',
  NOTICE: '/notice',
};

/**
 * Standard fetch wrapper that handles HTTPS -> HTTP mixed content issues
 * by using a CORS proxy. It ensures the destination URL is fully encoded
 * as a parameter to the proxy service.
 */
export async function apiFetch<T>(
  endpoint: string, 
  fallbackData?: T, 
  options?: RequestInit
): Promise<T> {
  // Construct the full target URL (e.g., http://159.198.47.126:5001/products)
  const fullTargetUrl = `${RAW_BASE_URL}${endpoint}`;
  
  // Wrap it in a CORS proxy to bypass browser security restrictions on Mixed Content.
  // We use corsproxy.io which expects the target URL as the query string.
  const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(fullTargetUrl)}`;

  try {
    const response = await fetch(proxiedUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      if (response.status === 404 && fallbackData !== undefined) return fallbackData;
      throw new Error(`Server returned ${response.status}`);
    }
    
    if (response.status === 204) return {} as T;
    
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`API Connectivity Error [${endpoint}]:`, error);
    if (fallbackData !== undefined) return fallbackData;
    throw error;
  }
}

export const adminApi = {
  /**
   * Pings the server to check if it is reachable via the proxy
   */
  checkStatus: async () => {
    const fullTargetUrl = `${RAW_BASE_URL}/products`;
    const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(fullTargetUrl)}`;
    
    try {
      const start = Date.now();
      const response = await fetch(proxiedUrl, { method: 'HEAD' });
      return { online: response.ok, latency: Date.now() - start };
    } catch (e) {
      return { online: false, latency: 0 };
    }
  },

  addItem: (endpoint: string, item: any) => 
    apiFetch(endpoint, undefined, { method: 'POST', body: JSON.stringify(item) }),
  
  deleteItem: (endpoint: string, id: string) => 
    apiFetch(`${endpoint}/${id}`, undefined, { method: 'DELETE' }),
    
  updateItem: (endpoint: string, id: string, item: any) => 
    apiFetch(`${endpoint}/${id}`, undefined, { method: 'PUT', body: JSON.stringify(item) }),

  updateNotice: (text: string) => 
    apiFetch(API_ENDPOINTS.NOTICE, undefined, { method: 'POST', body: JSON.stringify({ text }) }),
};
