export default function Footer() {
  return (
    <footer className="w-full mt-4 bg-white py-6 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} <strong>Elohim App</strong> — Inspiré par la Parole de Dieu
      </p>
      <p className="mt-2">
        Créé avec ❤️ par{" "}
        <a
          href="https://sentinelles-crea.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline font-semibold"
        >
          Sentinelles Créa
        </a>
      </p>
    </footer>
  );
}
