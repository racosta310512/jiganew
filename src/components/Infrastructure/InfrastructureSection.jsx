import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Blueprint from './Blueprint'

const InfrastructureSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.5
  })

  const infrastructureItems = [
    {
      category: "CABEAMENTO ESTRUTURADO",
      items: ["CAT-6 Certificado Nexans", "Patch Panels", "Organização e documentação"],
      icon: "🔌",
      color: "jiga-blue"
    },
    {
      category: "INFRAESTRUTURA ELÉTRICA", 
      items: ["Instalações dedicadas", "Quadros de distribuição", "Aterramento profissional"],
      icon: "⚡",
      color: "electric-yellow"
    },
    {
      category: "SOLUÇÕES DE ENERGIA",
      items: ["Nobreaks profissionais", "Estabilizadores", "Geradores"],
      icon: "🔋",
      color: "security-orange"
    },
    {
      category: "PISO ELEVADO",
      items: ["Certificação Remaster", "Vão técnico organizado", "Ventilação otimizada"],
      icon: "🏗️",
      color: "jiga-green"
    },
    {
      category: "TELEFONIA E VoIP",
      items: ["Sistemas integrados", "PABX virtual", "Comunicação unificada"],
      icon: "📞",
      color: "neon-purple"
    },
    {
      category: "SEGURANÇA FÍSICA",
      items: ["CFTV - Circuitos Fechados", "Controle de Acesso", "Monitoramento 24/7"],
      icon: "🎥",
      color: "security-orange"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-jiga-blue/10 relative overflow-hidden"
      id="infraestrutura"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Infraestrutura <span className="text-gradient">Completa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções integradas desde o cabeamento até a segurança física
          </p>
        </div>

        {/* Blueprint Component */}
        <Blueprint />

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {infrastructureItems.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500"
            >
              {/* Icon */}
              <div className={`text-3xl mb-4 text-${item.color}`}>
                {item.icon}
              </div>
              
              {/* Category */}
              <h3 className="text-xl font-bold text-white mb-4">
                {item.category}
              </h3>
              
              {/* Items List */}
              <ul className="space-y-3">
                {item.items.map((subItem, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${item.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm">{subItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-jiga-green mb-6">
            Certificações e Qualificações
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Nexans", type: "Cabeamento Estruturado" },
              { name: "Remaster", type: "Piso Elevado" },
              { name: "Microsoft", type: "Gold Partner" },
              { name: "Linux Foundation", type: "Certified" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-jiga-blue">✓</span>
                </div>
                <div className="font-semibold text-white">{cert.name}</div>
                <div className="text-sm text-gray-400">{cert.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureSection