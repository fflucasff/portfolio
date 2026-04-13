import { MessageCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/5535991796968?text=Fala%20Lucas%2C%20vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.'

export default function WhatsAppFloat() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bottom-3 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/10"
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
        Falar no WhatsApp
      </span>

      <div className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: '#25d366' }} />
        <MessageCircle size={24} className="text-white relative z-10" />
      </div>
    </a>
  )
}
