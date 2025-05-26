import mongoose from "mongoose";

const QRConfigSchema = new mongoose.Schema({
  domaine: {
    type: String,
    required: [true, "Le domaine est requis"],
  },
  theme: {
    type: String,
    required: [true, "Le thème est requis"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.QRConfig || mongoose.model("QRConfig", QRConfigSchema);
