
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  specifications?: Record<string, string>;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "Premium wireless headphones with advanced noise-canceling technology, delivering exceptional sound quality and comfort for extended listening sessions.",
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz"
    },
    rating: 4.8,
    reviews: 342,
    inStock: true,
    featured: true,
    trending: true,
    tags: ["audio", "wireless", "noise-canceling"]
  },
  {
    id: "2",
    name: "Premium Laptop Computer",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-performance laptop with latest generation processor, perfect for work, creativity, and entertainment.",
    specifications: {
      "Processor": "Intel Core i7",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Display": "14-inch Retina",
      "Graphics": "Integrated Intel Iris Xe"
    },
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: true,
    tags: ["computer", "laptop", "productivity"]
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    description: "Comfortable and sustainable organic cotton t-shirt in classic fit. Perfect for everyday wear.",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    trending: true,
    tags: ["organic", "cotton", "sustainable"]
  },
  {
    id: "4",
    name: "Professional Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Professional-grade digital camera with advanced features for photography enthusiasts.",
    specifications: {
      "Sensor": "24.2MP APS-C",
      "ISO Range": "100-25600",
      "Video": "4K UHD",
      "Lens Mount": "EF-M",
      "Weight": "390g"
    },
    rating: 4.9,
    reviews: 73,
    inStock: true,
    featured: true,
    tags: ["camera", "photography", "professional"]
  },
  {
    id: "5",
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Advanced fitness tracking watch with heart rate monitoring, GPS, and smart notifications.",
    rating: 4.6,
    reviews: 298,
    inStock: true,
    trending: true,
    tags: ["fitness", "smartwatch", "health"]
  },
  {
    id: "6",
    name: "Bestselling Novel",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop",
    category: "Books",
    description: "A captivating novel that has taken the world by storm. Perfect for book lovers and gift-giving.",
    rating: 4.4,
    reviews: 1247,
    inStock: true,
    tags: ["fiction", "bestseller", "novel"]
  },
  {
    id: "7",
    name: "Luxury Skincare Set",
    price: 89.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop",
    category: "Beauty",
    description: "Complete skincare routine with premium ingredients for radiant, healthy-looking skin.",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    featured: true,
    tags: ["skincare", "luxury", "beauty"]
  },
  {
    id: "8",
    name: "Designer Handbag",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Fashion",
    description: "Elegant designer handbag crafted from premium materials. Perfect for any occasion.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    tags: ["handbag", "designer", "fashion"]
  }
];

export const categories = [
  { id: "electronics", name: "Electronics", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop" },
  { id: "clothing", name: "Clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
  { id: "books", name: "Books", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
  { id: "beauty", name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop" },
  { id: "fashion", name: "Fashion", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=200&fit=crop" },
  { id: "home", name: "Home & Garden", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" }
];
