
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}
