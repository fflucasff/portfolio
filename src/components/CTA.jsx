import { ArrowRight, MessageCircle, Mail } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5535991796968?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-widest uppercase"
            style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a78bfa' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novos projetos
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
            Pronto para escalar{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient">o seu negócio digital?</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            Seja uma landing page de alta conversão, um stack completo de tracking ou um sistema web
            personalizado — estou pronto para executar. Vamos conversar sobre estratégia primeiro.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
              <span className="flex items-center gap-2">
                <MessageCircle size={18} />
                Falar no WhatsApp
                <ArrowRight size={16} />
              </span>
            </a>
            <a href="mailto:lff.industries@gmail.com"
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto justify-center">
              <Mail size={18} />
              Enviar um e-mail
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
            {[
              '✓ Resposta em até 24h',
              '✓ Consultoria estratégica gratuita',
              '✓ Preço fixo, sem surpresas',
            ].map((item) => (
              <span key={item} className="tracking-wide">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
