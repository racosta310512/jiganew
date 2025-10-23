import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ServiceCard from './ServiceCard'
import { SERVICES_DATA } from '../../utils/constants'

const ServicesSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 1.2
  })

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-jiga-blue/20 relative overflow-hidden"
      id="servicos"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas em TI para impulsionar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-jiga-green mb-6 text-center">
            Serviços Adicionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Internet, e-mail",
              "Automação comercial e industrial", 
              "Controle de acesso e monitoramento CFTV",
              "Suporte a Sistemas operacionais Microsoft e Linux"
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-jiga-green rounded-full"></div>
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection