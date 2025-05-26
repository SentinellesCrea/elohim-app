'use client';

import { useEffect, useState } from 'react';
import VerseCard from '../../components/VerseCard';

export default function DemoQRPage() {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRandomVerse = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/verses/random');
      const data = await res.json();
      setVerse(data);
    } catch (err) {
      console.error('Erreur lors du chargement du verset :', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomVerse();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 p-6 text-center">
      {loading ? (
        <p className="text-lg font-semibold text-gray-700">Chargement...</p>
      ) : (
        <>
          <VerseCard
            texte={verse.texte}
            reference={verse.reference}
            domaine={verse.domaine}
            theme={verse.theme}
          />

          <button
            onClick={getRandomVerse}
            className="mt-6 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            🔄 Un autre verset
          </button>
        </>
      )}
    </div>
  );
}
