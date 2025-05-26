'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 flex flex-col items-center justify-center px-2 py-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-serif">
        Elohim App
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Recevez un verset biblique inspiré à chaque instant, simplement en scannant un QR code. 
        Une application pensée pour toucher les cœurs là où ils se trouvent.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/qr/demo">
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            📖 Verset aléatoire
          </button>
        </Link>
        <Link href="/admin/login">
          <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            🔐 Connexion Admin
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-white cursor-pointer border border-gray-400 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
            ℹ️ À propos
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-white cursor-pointer border border-gray-400 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
            ✉️ Contact
          </button>
        </Link>
      </div>
    </main>
  );
}
