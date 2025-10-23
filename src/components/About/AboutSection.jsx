import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import Timeline from './Timeline'

const AboutSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.5
  })

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-tech-gray to-tech-gray/90 relative overflow-hidden"
      id="quem-somos"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem <span className="text-gradient">Somos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Perfil voltado às necessidades de um mercado moderno, veloz e competitivo.
          </p>
        </div>

        {/* Mission Card */}
        <div className="glass-effect rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-jiga-green mb-4">Nossa Missão</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Integrar soluções de TI com confiabilidade e segurança, para que nossos clientes 
            se dediquem exclusivamente ao seu negócio.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Credibilidade", icon: "⭐", color: "text-electric-yellow" },
            { title: "Confiança", icon: "🤝", color: "text-jiga-blue" },
            { title: "Segurança", icon: "🛡️", color: "text-security-orange" },
            { title: "Inovação", icon: "💡", color: "text-jiga-green" }
          ].map((value, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className={`text-3xl mb-4 ${value.color}`}>{value.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400">
                Queremos compartilhar nossos valores com todos os clientes
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  )
}

export default AboutSection