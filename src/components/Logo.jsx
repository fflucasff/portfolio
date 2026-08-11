import { useId } from 'react'

/**
 * Marca da LFF Industries: um "L" monogramado com uma seta ascendente,
 * representando o crescimento que os projetos entregam.
 */
export default function Logo({ size = 36, className = '' }) {
  const gradId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LFF Industries"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d78e" />
          <stop offset="55%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a8801f" />
        </linearGradient>
      </defs>

      {/* Placa */}
      <rect
        x="1.6" y="1.6" width="44.8" height="44.8" rx="13"
        fill="#0a1628" stroke={`url(#${gradId})`} strokeWidth="2.6"
      />

      {/* Monograma L */}
      <path
        d="M15 12.5V32h10.5"
        stroke={`url(#${gradId})`} strokeWidth="5"
        strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Seta de crescimento */}
      <path
        d="M28.6 28.4 38.2 18.8M31.6 18.4h6.9v6.9"
        stroke={`url(#${gradId})`} strokeWidth="3.2"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
