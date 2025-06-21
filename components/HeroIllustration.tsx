"use client";
import { motion } from "framer-motion";

interface HeroIllustrationProps {
  className?: string;
}

export default function HeroIllustration({ className = "" }: HeroIllustrationProps) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <motion.svg
        width="100%"
        height="auto"
        viewBox="0 0 700 500"
        className="max-w-4xl"
        role="img"
        aria-labelledby="hero-illustration-title"
        aria-describedby="hero-illustration-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <title id="hero-illustration-title">
          Yellow o&apos;clock subrayando automáticamente nadadores en PDF
        </title>
        <desc id="hero-illustration-desc">
          Ilustración mostrando un PDF de resultados de natación con nadadores 
          siendo subrayados automáticamente por Yellow o&apos;clock
        </desc>

        {/* Fondo del PDF */}
        <rect x="50" y="80" width="500" height="340" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="2" />

        {/* Barra de título del PDF */}
        <rect x="50" y="80" width="500" height="40" rx="12" fill="#EF4B3E" />
        <text x="70" y="105" fill="white" fontSize="14" fontWeight="600">
          📄 Resultados_Natacion_2025.pdf
        </text>

        {/* Contenido del PDF - Encabezados */}
        <text x="80" y="150" fill="#374151" fontSize="12" fontWeight="600">
          SERIE 1 - 50m LIBRE MASCULINO
        </text>
        <rect x="80" y="155" width="300" height="1" fill="#d1d5db" />

        {/* Lista de nadadores con subrayado */}
        <text x="85" y="190" fill="#111827" fontSize="11">1. García López, Miguel</text>
        <text x="300" y="190" fill="#6b7280" fontSize="10">CN Mediterráneo</text>
        <text x="450" y="190" fill="#374151" fontSize="11" fontWeight="600">24.56</text>
        <motion.rect
          x="80"
          y="193"
          width="400"
          height="3"
          fill="#F7C700"
          opacity="0.8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />

        <text x="85" y="215" fill="#111827" fontSize="11">2. Rodríguez Vega, Carlos</text>
        <text x="300" y="215" fill="#6b7280" fontSize="10">Club Natación Valencia</text>
        <text x="450" y="215" fill="#374151" fontSize="11" fontWeight="600">24.89</text>

        <text x="85" y="240" fill="#111827" fontSize="11">3. Martín Torres, Alex</text>
        <text x="300" y="240" fill="#6b7280" fontSize="10">CN Mediterráneo</text>
        <text x="450" y="240" fill="#374151" fontSize="11" fontWeight="600">25.12</text>
        <motion.rect
          x="80"
          y="243"
          width="400"
          height="3"
          fill="#F7C700"
          opacity="0.8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />

        <text x="85" y="265" fill="#111827" fontSize="11">4. González Ruiz, David</text>
        <text x="300" y="265" fill="#6b7280" fontSize="10">Aqua Sports Club</text>
        <text x="450" y="265" fill="#374151" fontSize="11" fontWeight="600">25.34</text>

        <text x="85" y="290" fill="#111827" fontSize="11">5. Sánchez Pérez, Javier</text>
        <text x="300" y="290" fill="#6b7280" fontSize="10">CN Mediterráneo</text>
        <text x="450" y="290" fill="#374151" fontSize="11" fontWeight="600">25.67</text>
        <motion.rect
          x="80"
          y="293"
          width="400"
          height="3"
          fill="#F7C700"
          opacity="0.8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />

        {/* Marcador Yellow o'clock flotante */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="480" cy="190" r="12" fill="#F7C700" stroke="#174E8C" strokeWidth="2" />
          <circle cx="480" cy="190" r="8" fill="none" stroke="#174E8C" strokeWidth="1" />
          <line x1="480" y1="190" x2="485" y2="185" stroke="#174E8C" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Partículas decorativas */}
        <motion.circle
          cx="580"
          cy="160"
          r="3"
          fill="#F7C700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.6, 0], y: [0, -20, 0] }}
          transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.circle
          cx="610"
          cy="180"
          r="3"
          fill="#F7C700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.4, 0], y: [0, -15, 0] }}
          transition={{ duration: 2, delay: 2.7, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.circle
          cx="640"
          cy="200"
          r="3"
          fill="#F7C700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.5, 0], y: [0, -18, 0] }}
          transition={{ duration: 2, delay: 2.9, repeat: Infinity, repeatDelay: 3 }}        />

        {/* Indicador de CN Mediterráneo */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <rect x="580" y="120" width="110" height="35" rx="8" fill="#174E8C" opacity="0.9" />
          <text x="635" y="135" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">
            🏊‍♂️ Tu club
          </text>
          <text x="635" y="148" fill="#F7C700" fontSize="9" textAnchor="middle">
            detectado
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}
