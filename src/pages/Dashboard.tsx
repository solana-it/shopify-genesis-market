
import { Link } from 'react-router-dom';
import { Package, Heart, User, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';
import { useWishlist } from '@/context/WishlistContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    );
  }

  const mockOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299.99,
      items: ["Wireless Headphones"]
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "In Transit",
      total: 89.99,
      items: ["Skincare Set"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Manage your account and view your orders</p>
        </div>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">{mockOrders.length}</h3>
            <p className="text-gray-600">Total Orders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">{wishlistItems.length}</h3>
            <p className="text-gray-600">Wishlist Items</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">$389.98</h3>
            <p className="text-gray-600">Total Spent</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              {mockOrders.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No orders yet</p>
                  <Link to="/shop" className="mt-4 inline-block">
                    <Button>Start Shopping</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{order.id}</h4>
                        <p className="text-sm text-gray-600">{order.date}</p>
                        <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${order.total}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <p className="text-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Account Type</label>
                <p className="text-gray-900">{user.isAdmin ? 'Administrator' : 'Customer'}</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist">
          <Card>
            <CardHeader>
              <CardTitle>Your Wishlist</CardTitle>
            </CardHeader>
            <CardContent>
              {wishlistItems.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No items in your wishlist</p>
                  <Link to="/shop" className="mt-4 inline-block">
                    <Button>Browse Products</Button>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-blue-600 font-semibold">${item.price}</p>
                      <Link to={`/product/${item.id}`} className="mt-2 inline-block">
                        <Button size="sm" variant="outline">View Product</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
