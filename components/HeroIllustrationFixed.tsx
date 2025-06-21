"use client";
import { motion, useReducedMotion } from "framer-motion";

interface HeroIllustrationProps {
  className?: string;
}

export default function HeroIllustration({ className = "" }: HeroIllustrationProps) {
  const shouldReduceMotion = useReducedMotion();

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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <title id="hero-illustration-title">
          Yellow o'clock subrayando automáticamente nadadores en PDF
        </title>
        <desc id="hero-illustration-desc">
          Ilustración mostrando un PDF de resultados de natación con nadadores 
          siendo subrayados automáticamente por Yellow o'clock
        </desc>

        {/* Fondo del PDF */}
        <motion.rect
          x="50"
          y="80"
          width="500"
          height="340"
          rx="12"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        />

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

        {/* Lista de nadadores */}
        {[
          { name: "1. García López, Miguel", club: "CN Mediterráneo", time: "24.56", highlight: true },
          { name: "2. Rodríguez Vega, Carlos", club: "Club Natación Valencia", time: "24.89", highlight: false },
          { name: "3. Martín Torres, Alex", club: "CN Mediterráneo", time: "25.12", highlight: true },
          { name: "4. González Ruiz, David", club: "Aqua Sports Club", time: "25.34", highlight: false },
          { name: "5. Sánchez Pérez, Javier", club: "CN Mediterráneo", time: "25.67", highlight: true }
        ].map((swimmer, index) => (
          <g key={index}>
            {/* Línea de subrayado amarilla animada */}
            {swimmer.highlight && (
              <motion.rect
                x="80"
                y={175 + index * 25 + 18}
                width="400"
                height="3"
                fill="#F7C700"
                opacity={0.8}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={shouldReduceMotion ? { scaleX: 1, opacity: 0.8 } : {
                  scaleX: 1,
                  opacity: 0.8
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.5,
                  delay: shouldReduceMotion ? 0 : 1 + index * 0.3,
                  ease: "easeOut"
                }}
                style={{ transformOrigin: "left center" }}
              />
            )}
            
            {/* Texto del nadador */}
            <text x="85" y={175 + index * 25 + 15} fill="#111827" fontSize="11">
              {swimmer.name}
            </text>
            <text x="300" y={175 + index * 25 + 15} fill="#6b7280" fontSize="10">
              {swimmer.club}
            </text>
            <text x="450" y={175 + index * 25 + 15} fill="#374151" fontSize="11" fontWeight="600">
              {swimmer.time}
            </text>
          </g>
        ))}

        {/* Marcador/Cursor Yellow o'clock */}
        <motion.g
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2,
            delay: shouldReduceMotion ? 0 : 0.5
          }}
        >
          {/* Icono del reloj como cursor */}
          <motion.circle
            cx="480"
            cy="190"
            r="12"
            fill="#F7C700"
            stroke="#174E8C"
            strokeWidth="2"
            animate={shouldReduceMotion ? {} : {
              y: [-2, 2, -2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="480"
            cy="190"
            r="8"
            fill="none"
            stroke="#174E8C"
            strokeWidth="1"
            animate={shouldReduceMotion ? {} : {
              y: [-2, 2, -2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1="480"
            y1="190"
            x2="485"
            y2="185"
            stroke="#174E8C"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={shouldReduceMotion ? {} : {
              y: [-2, 2, -2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Partículas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={580 + (i % 3) * 30}
            cy={160 + Math.floor(i / 3) * 60}
            r="3"
            fill="#F7C700"
            opacity="0.6"
            initial={{ scale: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { scale: 1, opacity: 0.6 } : {
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 2,
              delay: shouldReduceMotion ? 0 : 2 + i * 0.2,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatDelay: 3
            }}
          />
        ))}

        {/* Texto explicativo */}
        <motion.text
          x="350"
          y="450"
          fill="#6b7280"
          fontSize="12"
          textAnchor="middle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 1, 
            delay: shouldReduceMotion ? 0 : 3 
          }}
        >
          ⚡ Subrayado automático en acción
        </motion.text>

        {/* Indicador de CN Mediterráneo */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 1, 
            delay: shouldReduceMotion ? 0 : 4 
          }}
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
