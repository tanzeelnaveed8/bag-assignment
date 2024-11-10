import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Home</Link> 
        <div className="flex space-x-4">
          <Link href="/product" className="text-lg">Products</Link>  
          <Link href="/contact" className="text-lg">Contact</Link>  
        </div>
      </div>
    </nav>
  );
}
