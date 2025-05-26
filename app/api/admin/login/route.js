import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  // Exemple de vérification statique des identifiants
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    // Authentification réussie
    // Vous pouvez ici générer un token ou une session
    return NextResponse.json({ message: 'Connexion réussie' });
  } else {
    return NextResponse.json({ message: 'Identifiants incorrects' }, { status: 401 });
  }
}
