
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save items you love for later.</p>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist ({items.length} items)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="group">
            <CardContent className="p-4">
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-red-500 hover:bg-white"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Heart className="h-4 w-4 fill-current" />
                </Button>
              </div>

              <Link to={`/product/${item.id}`}>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
              </Link>
              
              <p className="text-sm text-gray-600 mb-3">{item.category}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${item.price}</span>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                  className="ml-2"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
