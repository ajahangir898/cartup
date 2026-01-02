
import React from 'react';
import { Smartphone, Watch, Battery, Speaker, Zap, Headphones, Gamepad, Camera } from 'lucide-react';
import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Phones', icon: 'Smartphone' },
  { id: '2', name: 'Watches', icon: 'Watch' },
  { id: '3', name: 'Power Bank', icon: 'Battery' },
  { id: '4', name: 'Speaker & Headphone', icon: 'Speaker' },
  { id: '5', name: 'Charger & Adapter', icon: 'Zap' },
  { id: '6', name: 'Earbuds', icon: 'Headphones' },
  { id: '7', name: 'Gaming', icon: 'Gamepad' },
  { id: '8', name: 'Camera', icon: 'Camera' },
];

export const FLASH_DEALS: Product[] = [
  {
    id: 'p1',
    name: 'iPhone 16 Pro Max 1TB',
    price: 189999,
    originalPrice: 195000,
    discountPercentage: 3,
    image: 'https://picsum.photos/seed/iphone16/400/400',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Logitech G PRO X USB Gaming Headphone',
    price: 14700,
    originalPrice: 15400,
    discountPercentage: 5,
    image: 'https://picsum.photos/seed/logitech/400/400',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Samsung Galaxy Watch 7 Ultra',
    price: 65000,
    originalPrice: 72000,
    discountPercentage: 10,
    image: 'https://picsum.photos/seed/watch7/400/400',
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Anker 737 Power Bank 24000mAh',
    price: 12500,
    originalPrice: 14000,
    discountPercentage: 11,
    image: 'https://picsum.photos/seed/anker/400/400',
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Sony WH-1000XM5 Noise Cancelling',
    price: 38500,
    originalPrice: 42000,
    discountPercentage: 8,
    image: 'https://picsum.photos/seed/sony/400/400',
    inStock: true,
  },
  {
    id: 'p6',
    name: 'DJI Osmo Pocket 3 Creator Combo',
    price: 58000,
    originalPrice: 62000,
    discountPercentage: 6,
    image: 'https://picsum.photos/seed/dji/400/400',
    inStock: false,
  },
  {
    id: 'p7',
    name: 'Razer DeathAdder V3 Pro Wireless',
    price: 13500,
    originalPrice: 15000,
    discountPercentage: 10,
    image: 'https://picsum.photos/seed/razer/400/400',
    inStock: true,
  }
];

export const getCategoryIcon = (iconName: string) => {
  const props = { className: "w-10 h-10 text-gray-600" };
  switch (iconName) {
    case 'Smartphone': return <Smartphone {...props} />;
    case 'Watch': return <Watch {...props} />;
    case 'Battery': return <Battery {...props} />;
    case 'Speaker': return <Speaker {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Headphones': return <Headphones {...props} />;
    case 'Gamepad': return <Gamepad {...props} />;
    case 'Camera': return <Camera {...props} />;
    default: return <Smartphone {...props} />;
  }
};
