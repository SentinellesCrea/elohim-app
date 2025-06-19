'use client';

import { useState } from 'react';
import QRCard from '../../components/QRCard';

export default function AdminDashboard() {
  const [domaine, setDomaine] = useState('');
  const [qrData, setQrData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/qrcodes/create', {
      method: 'POST',
      body: JSON.stringify({ domaine}),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setQrData(data);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎯 Générer un QR code</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Domaine (ex : Foi)"
          value={domaine}
          onChange={(e) => setDomaine(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
  
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
          Générer
        </button>
      </form>

      {qrData && (
        <div className="mt-8">
          <QRCard
            qrUrl={qrData.qrUrl}
            qrLink={`${process.env.NEXT_PUBLIC_BASE_URL}/qr/${qrData.id}`}
            domaine={qrData.domaine}
          />
        </div>
      )}
    </div>
  );
}
