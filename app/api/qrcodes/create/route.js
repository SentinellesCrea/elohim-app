// app/api/qrcodes/create/route.js

import { NextResponse } from 'next/server';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const { domaine, theme } = await req.json();

    // Génère un ID unique simulé (plus tard remplacé par MongoDB _id)
    const id = uuidv4();
    const qrUrl = await QRCode.toDataURL(`${process.env.NEXT_PUBLIC_BASE_URL}/qr/${id}`);

    // 👉 À ce stade, on retourne les infos (tu peux plus tard stocker ça en DB)
    return NextResponse.json({ id, domaine, theme, qrUrl });
  } catch (error) {
    console.error('Erreur QR code:', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
