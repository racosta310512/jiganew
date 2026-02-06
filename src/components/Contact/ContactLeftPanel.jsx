import React, { useEffect, useRef } from 'react'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock,
  MapPin,
  Zap
} from 'lucide-react'
import gsap from 'gsap'
import NetworkMap from './NetworkMap'

const ContactLeftPanel = ({ contactInfo, address }) => {
  const recommendationRef = useRef(null)
  const iconRef = useRef(null)

  // Animación GSAP para la recomendación
  useEffect(() => {
    if (recommendationRef.current && iconRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      
      tl.to(recommendationRef.current, {
        y: -8,
        duration: 2,
        ease: "power2.inOut"
      })
      .to(recommendationRef.current, {
        y: 4,
        duration: 2,
        ease: "power2.inOut"
      }, "+=0.5")

      const glowTl = gsap.timeline({ repeat: -1, yoyo: true })
      
      glowTl.to(recommendationRef.current, {
        boxShadow: "0 0 12px rgba(37, 211, 102, 0.4)",
        duration: 2,
        ease: "sine.inOut"
      })
      .to(recommendationRef.current, {
        boxShadow: "0 0 20px rgba(37, 211, 102, 0.2)",
        duration: 2,
        ease: "sine.inOut"
      })

      gsap.to(iconRef.current, {
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      return () => {
        tl.kill()
        glowTl.kill()
      }
    }
  }, [])

  // Renderizar icono según tipo
  const renderIcon = (iconName, className = "size-5") => {
    switch(iconName) {
      case 'whatsapp':
        return <MessageCircle className={className} />
      case 'mail':
        return <Mail className={className} />
      case 'phone':
        return <Phone className={className} />
      case 'clock':
        return <Clock className={className} />
      default:
        return <MessageCircle className={className} />
    }
  }

  // Obtener acción según tipo
  const getAction = (title) => {
    switch(title) {
      case 'WhatsApp Direto':
        return 'https://wa.me/554133223231'
      case 'Email Corporativo':
        return 'mailto:contato@jigasolucoes.com.br'
      case 'Telefone':
        return 'tel:554133223231'
      default:
        return '#'
    }
  }

  return (
    <div className="space-y-8">
      {/* Recomendación */}
      <div 
        ref={recommendationRef}
        className="glass-effect rounded-2xl p-6 border border-jiga-green/30 contact-item"
        style={{
          boxShadow: '0 0 8px rgba(37, 211, 102, 0.2)'
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <MessageCircle 
            ref={iconRef}
            className="text-[#25D366]" 
            size={28} 
          />
          <div>
            <h4 className="font-bold text-white text-lg">Recomendação Rápida</h4>
            <p className="text-gray-300 text-sm">
              Para respostas mais ágeis, use o WhatsApp. Para documentação formal, escolha Email.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="text-center p-3 bg-jiga-green/10 rounded-lg">
            <div className="text-[#25D366] font-bold text-sm">WhatsApp</div>
            <div className="text-white text-xs">Imediato</div>
          </div>
          <div className="text-center p-3 bg-jiga-blue/10 rounded-lg">
            <div className="text-jiga-blue font-bold text-sm">Email</div>
            <div className="text-white text-xs">Até 2h úteis</div>
          </div>
        </div>
      </div>

      {/* Informações de Contato */}
      <div className="contact-item">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Informações de Contato</h3>
        
        <div className="space-y-4 mb-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={getAction(info.title)}
              target={info.title !== 'Horário Comercial' ? '_blank' : undefined}
              rel={info.title !== 'Horário Comercial' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 rounded-xl bg-carbon-gray/50 hover:bg-white/5 transition-all duration-300 group border border-white/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-${info.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <div className={`text-${info.color}`}>
                  {renderIcon(info.icon, "size-6")}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                <p className="text-sm text-gray-300">{info.value}</p>
              </div>
              {info.title !== 'Horário Comercial' && (
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  →
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Mapa */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-security-orange" size={24} />
            <h4 className="font-semibold text-white text-lg sm:text-xl">Nossa Localização</h4>
          </div>
          <NetworkMap className="w-full h-48 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-lg border-2 border-jiga-blue/30" />
          <div className="mt-4 p-4 bg-carbon-gray/50 rounded-lg">
            <p className="text-sm text-gray-300">
              <span className="text-white font-semibold">Endereço:</span> {address}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              <span className="text-white font-semibold">Atendimento:</span> Presencial mediante agendamento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLeftPanel