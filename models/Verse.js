import mongoose from "mongoose";

const VerseSchema = new mongoose.Schema({
  reference: {
    type: String,
    required: [true, "La référence du verset est requise"],
  },
  texte: {
    type: String,
    required: [true, "Le texte du verset est requis"],
  },
  domaine: {
    type: String,
    required: [true, "Le domaine est requis"],
  },
  theme: {
    type: String,
    required: [true, "Le thème est requis"],
  },
}, {
  timestamps: true, // Ajoute createdAt et updatedAt automatiquement
});

export default mongoose.models.Verse || mongoose.model("Verse", VerseSchema);
