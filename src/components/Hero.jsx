import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

const WA_LINK =
  'https://wa.me/5535991796968?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.4 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.35
        this.speedY = (Math.random() - 0.5) * 0.35
        this.opacity = Math.random() * 0.45 + 0.08
        this.hue = Math.random() > 0.5 ? 240 : 270
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height)
          this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.65 }} />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.11]"
          style={{ top: '-15%', left: '-10%', background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(70px)', animation: 'float 10s ease-in-out infinite' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.09]"
          style={{ bottom: '-10%', right: '-5%', background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(70px)', animation: 'float 14s ease-in-out infinite reverse' }} />
        <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.06]"
          style={{ top: '45%', left: '55%', background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-widest uppercase"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a78bfa', animation: 'fade-in 0.6s ease forwards' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.06] tracking-tight mb-6"
          style={{ animation: 'fade-up 0.7s ease 0.1s both' }}>
          Sistemas digitais que{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">geram resultados reais</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animation: 'fade-up 0.7s ease 0.25s both' }}>
          Desenvolvedor especializado em{' '}
          <span className="text-slate-200 font-medium">landing pages de alta conversão</span>,{' '}
          <span className="text-slate-200 font-medium">sistemas de rastreamento</span> e{' '}
          <span className="text-slate-200 font-medium">funis digitais</span> para empresas que levam crescimento a sério.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fade-up 0.7s ease 0.4s both' }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
            <span className="flex items-center gap-2">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </span>
          </a>
          <a href="#projects" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto justify-center">
            <span className="flex items-center gap-2">
              Ver Projetos
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-14"
          style={{ animation: 'fade-up 0.7s ease 0.55s both' }}>
          {[
            { value: '30+', label: 'Projetos entregues' },
            { value: '100%', label: 'Satisfação dos clientes' },
            { value: '3x', label: 'Aumento médio em conversões' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-gradient-warm">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide uppercase font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#proof" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        style={{ animation: 'fade-in 1s ease 1s both' }}>
        <span className="text-xs font-mono tracking-widest uppercase">Role para baixo</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
