/**
 * Marca da LFF Industries.
 *
 * Símbolo: dois cantos em L encaixados, um maior e um menor girado em 180
 * graus. O L vem das iniciais e o canto é a ferramenta de quem enquadra
 * trabalho. Os dois não fecham o quadro de propósito, o que deixa a figura
 * assimétrica e reconhecível em tamanho pequeno.
 *
 * Grade: 48 por 48. Traço de 7 unidades. Área de proteção: metade da altura
 * do símbolo em volta. Tamanho mínimo: 16 px para o símbolo isolado e 22 px
 * de altura para a versão com assinatura.
 */

export function Simbolo({ size = 32, cor = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10.5 7v27.5H32"
        stroke={cor}
        strokeWidth="7"
        strokeLinecap="butt"
        fill="none"
      />
      <path
        d="M38 41V20.5H21"
        stroke={cor}
        strokeWidth="7"
        strokeLinecap="butt"
        fill="none"
      />
    </svg>
  )
}

/** Versão horizontal: símbolo mais assinatura. */
export default function Marca({ size = 30, mostrarNome = true, className = '' }) {
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
    >
      <Simbolo size={size} />
      {mostrarNome && <span className="marca-nome">LFF Industries</span>}
    </span>
  )
}
