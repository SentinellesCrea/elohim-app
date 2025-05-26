'use client';

export default function VerseCard({ texte, reference, domaine, theme }) {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">📖 Verset</h2>
      <p className="text-gray-700 italic mb-4">"{texte}"</p>
      <p className="font-semibold text-gray-900">{reference}</p>
      <p className="text-sm mt-2 text-gray-500">
        Domaine : <strong>{domaine}</strong> | Thème : <strong>{theme}</strong>
      </p>
    </div>
  );
}
