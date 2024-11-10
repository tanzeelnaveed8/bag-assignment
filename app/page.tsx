import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dell Bags</h1>
        <p className="text-lg text-center max-w-lg">
          Discover the best bags for your Dell laptop, perfect for every professional on the go.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 px-4 py-2 rounded-md">Shop Now</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
