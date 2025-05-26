'use client';

export default function QRCard({ qrUrl, qrLink, domaine, theme }) {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 QR Code généré</h3>

      <div className="flex flex-col items-center gap-2">
        <img src={qrUrl} alt="QR Code" className="w-40 h-40 object-contain" />
        <p className="text-sm text-gray-500">
          Domaine : <strong>{domaine}</strong><br />
          Thème : <strong>{theme}</strong>
        </p>
        <a href={qrLink} className="text-blue-600 underline text-sm" target="_blank" rel="noopener noreferrer">
          Accéder au lien
        </a>
        <a
          href={qrUrl}
          download="elohim-qrcode.png"
          className="mt-2 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          📥 Télécharger
        </a>
      </div>
    </div>
  );
}
