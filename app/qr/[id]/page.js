'use client';

import { useEffect, useState } from 'react';
import verses from '@/data/verses';
import VerseCard from '../../components/VerseCard';

export default function QRPage({ params }) {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchVerse = async () => {
    try {
      const res = await fetch(`/api/qrcodes/${params.id}`);
      const config = await res.json();

      if (!config || !config.domaine || !config.theme) {
        throw new Error("QR code invalide");
      }

      const filtered = verses.filter(
        (v) => v.domaine === config.domaine && v.theme === config.theme
      );

      if (filtered.length === 0) throw new Error("Aucun verset trouvé");

      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setVerse(random);
    } catch (err) {
      console.error(err);
      setVerse({
        texte: "Aucun verset disponible pour ce domaine et thème.",
        reference: "",
        domaine: config.domaine,
        theme: config.theme,
      });
    } finally {
      setLoading(false);
    }
  };

  fetchVerse();
}, [params.id]); // ✅ on garde params.id comme dépendance


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 p-6 text-center">
      {loading ? (
        <p className="text-lg font-semibold">Chargement...</p>
      ) : (
        <VerseCard
          texte={verse.texte}
          reference={verse.reference}
          domaine={verse.domaine}
          theme={verse.theme}
        />
      )}
    </div>
  );
}
