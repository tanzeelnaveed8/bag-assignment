import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="bg-gray-800 p-8 rounded-md max-w-md w-full space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
            rows={4}
          ></textarea>
          <button className="bg-blue-600 w-full p-2 rounded-md">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
