import { Code2, ExternalLink, MessageCircle, Mail } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5535991796968?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

const socials = [
  { label: 'GitHub', href: 'https://github.com/fflucasff', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lucasff-dev', icon: ExternalLink },
  { label: 'WhatsApp', href: WA_LINK, icon: MessageCircle },
  { label: 'E-mail', href: 'mailto:lff.industries@gmail.com', icon: Mail },
]

const navLinks = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Sobre', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/20">
                L
              </span>
              <span className="font-bold text-white tracking-tight">
                LFF<span className="text-gradient"> Industries</span>
              </span>
            </a>
            <p className="text-xs text-slate-600 max-w-[220px] leading-relaxed">
              Sistemas digitais de alto desempenho para empresas que levam crescimento a sério.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 text-slate-500 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200">
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-700 font-mono">
            © {new Date().getFullYear()} LFF Industries · Lucas Figueiredo Fernandes
          </p>
          <p className="text-xs text-slate-700 font-mono">
            Desenvolvido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
