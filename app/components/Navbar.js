'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-orange-600">Elohim App</Link>
      <div className="space-x-4">
        <Link href="/qr/demo" className="text-gray-700 hover:text-orange-600">Verset</Link>
        <Link href="/about" className="text-gray-700 hover:text-orange-600">À propos</Link>
        <Link href="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
        <Link href="/admin/login" className="text-white bg-orange-600 px-3 py-1 rounded hover:bg-orange-700">Admin</Link>
      </div>
    </nav>
  );
}
