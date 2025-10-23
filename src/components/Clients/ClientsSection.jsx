import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ClientCarousel from './ClientCarousel'

const ClientsSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const testimonials = [
    {
      id: 1,
      name: "Empresa A",
      position: "Diretor de TI",
      content: "A Jiga Soluções transformou nossa infraestrutura com profissionalismo e competência. Recomendamos!",
      rating: 5,
      project: "Migração para Cloud"
    },
    {
      id: 2,
      name: "Empresa B",
      position: "Gerente de Operações", 
      content: "Suporte excepcional e soluções que realmente atendem nossas necessidades. Parceria de longa data.",
      rating: 5,
      project: "Infraestrutura Completa"
    },
    {
      id: 3,
      name: "Empresa C",
      position: "CTO",
      content: "Projeto entregue dentro do prazo e orçamento. A equipe técnica é altamente qualificada.",
      rating: 4,
      project: "Segurança da Informação"
    }
  ]

  const clientLogos = [
    { name: "Client 1", sector: "Indústria" },
    { name: "Client 2", sector: "Comércio" },
    { name: "Client 3", sector: "Serviços" },
    { name: "Client 4", sector: "Tecnologia" },
    { name: "Client 5", sector: "Educação" },
    { name: "Client 6", sector: "Saúde" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-jiga-green/10 relative overflow-hidden"
      id="nossos-clientes"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas que confiam em nosso trabalho e expertise
          </p>
        </div>

        {/* Client Carousel */}
        <ClientCarousel logos={clientLogos} />

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que dizem sobre nós
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < testimonial.rating ? 'text-electric-yellow' : 'text-gray-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Project */}
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Projeto:</span>
                  <div className="text-jiga-green font-semibold">{testimonial.project}</div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-jiga-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-jiga-green mb-8 text-center">
            Nossa Rede de Parcerias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "50+", label: "Clientes Ativos" },
              { number: "15+", label: "Anos no Mercado" },
              { number: "98%", label: "Satisfação" },
              { number: "24/7", label: "Suporte" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-jiga-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection