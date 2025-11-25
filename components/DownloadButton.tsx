"use client";
import { useState } from "react";

export default function DownloadButton() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Crear un enlace temporal para descargar el archivo
      const link = document.createElement('a');
      link.href = '/YellowOClock.exe';
      link.download = 'YellowOClock.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Resetear el estado después de un momento
      setTimeout(() => setDownloading(false), 2000);
    } catch (error) {
      console.error("Error al descargar:", error);
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg
                 bg-[#F7C700] text-blue-900 font-bold text-base sm:text-lg shadow-xl
                 hover:bg-[#e0b800] hover:shadow-2xl disabled:opacity-50 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-[#F7C700] focus:ring-offset-2
                 active:scale-95 transform"
    >
      {downloading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Descargando...
        </>
      ) : (
        <>
          ⬇️ Descargar Gratis
        </>
      )}
    </button>
  );
}
