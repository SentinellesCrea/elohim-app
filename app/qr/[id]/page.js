'use client';

import { useEffect, useState } from 'react';
import verses from '../../../data/verses';
import VerseCard from '../../components/VerseCard';

export default function QRPage({ params }) {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState(null); // 👈 nouvelle ligne pour afficher des infos

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const res = await fetch(`/api/qrcodes/${params.id}`);
        const config = await res.json();
        setDebug(config); // 👈 affiche les infos du QR en clair

        if (!config || !config.domaine || !config.theme) {
          throw new Error("QR code invalide");
        }

        const filtered = verses.filter(
          (v) => v.domaine === config.domaine && v.theme === config.theme
        );

        if (filtered.length === 0) {
          throw new Error("Aucun verset trouvé");
        }

        const random = filtered[Math.floor(Math.random() * filtered.length)];
        setVerse(random);
      } catch (err) {
        setDebug({ error: err.message }); // 👈 on affiche l’erreur sur l’écran
        setVerse({
          texte: "Erreur : verset non trouvé ou QR code invalide.",
          reference: "",
          domaine: "",
          theme: "",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, [params.id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6 text-center">
      {loading ? (
        <p className="text-lg font-semibold">Chargement...</p>
      ) : (
        <>
          <VerseCard
            texte={verse.texte}
            reference={verse.reference}
            domaine={verse.domaine}
            theme={verse.theme}
          />

          {/* ✅ Bloc visible uniquement pour debug mobile */}
          {debug && (
            <div className="mt-6 text-left text-sm bg-gray-100 p-4 rounded max-w-md">
              <h2 className="font-bold mb-1">[Debug QR]</h2>
              <pre className="whitespace-pre-wrap break-words">{JSON.stringify(debug, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
