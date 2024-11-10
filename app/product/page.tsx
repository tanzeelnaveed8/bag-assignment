import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const products = [
  { id: 1, name: 'Dell Bag 1', price: '$49.99', img: '/bag-1.jfif' },
  { id: 2, name: 'Dell Bag 2', price: '$59.99', img: '/bag-2.jpg' },
  { id: 3, name: 'Dell Bag 3', price: '$69.99', img: '/bag-3.jfif' },
];

export default function Products() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-center py-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto p-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-2xl mt-4">{product.name}</h2>
              <p className="text-lg mt-2">{product.price}</p>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md">View Product</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
