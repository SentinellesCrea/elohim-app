import { NextResponse } from "next/server";
import verses from "@/data/verses"; // ✅ Import des données fictives

export async function GET() {
  try {
    // Choix aléatoire dans le tableau
    const randomIndex = Math.floor(Math.random() * verses.length);
    const randomVerse = verses[randomIndex];

    return NextResponse.json(randomVerse, { status: 200 });
  } catch (error) {
    console.error("Erreur dans /api/verses/random :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
