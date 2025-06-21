"use client";
import { useState } from "react";

export default function BuyButton() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const { url } = await res.json();
      window.location.href = url;
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                 bg-[#F7C700] text-blue-900 font-semibold text-sm sm:text-base shadow-lg
                 hover:bg-[#e0b800] disabled:opacity-50 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-[#F7C700] focus:ring-offset-2
                 active:scale-95"
    >
      {loading ? "Redirigiendo…" : "💳 Comprar licencia"}
    </button>
  );
}
