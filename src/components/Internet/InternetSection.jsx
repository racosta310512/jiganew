import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import NetworkMap from './NetworkMap'

const InternetSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const cloudServices = [
    {
      title: "Computação em Nuvem",
      services: [
        "Servidores de Arquivos",
        "Aplicações Empresariais", 
        "Backup em Nuvem",
        "Disaster Recovery"
      ],
      icon: "☁️",
      color: "jiga-blue"
    },
    {
      title: "Hospedagem & Domínios",
      services: [
        "Hospedagem de Domínios",
        "Lojas Virtuais",
        "Websites Personalizados",
        "SSL Certificates"
      ],
      icon: "🌐",
      color: "jiga-green"
    },
    {
      title: "Suporte Operacional",
      services: [
        "Suporte 24/7",
        "Monitoramento",
        "Otimização",
        "Manutenção"
      ],
      icon: "⚡",
      color: "security-orange"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-neon-purple/20 relative overflow-hidden"
      id="internet"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços de <span className="text-gradient">Internet</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conectividade e soluções em nuvem para seu negócio
          </p>
        </div>

        {/* Network Map */}
        <NetworkMap />

        {/* Cloud Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cloudServices.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500"
            >
              {/* Icon */}
              <div className={`text-4xl mb-4 text-${service.color}`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              {/* Services List */}
              <ul className="space-y-3">
                {service.services.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Metrics Dashboard */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-jiga-green mb-8 text-center">
            Métricas de Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Uptime", value: "99.9%", color: "jiga-green" },
              { label: "Latência", value: "<25ms", color: "jiga-blue" },
              { label: "Velocidade", value: "1Gbps", color: "electric-yellow" },
              { label: "Suporte", value: "24/7", color: "security-orange" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold text-${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternetSection