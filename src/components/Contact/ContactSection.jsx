import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ContactForm from './ContactForm'

const ContactSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const contactInfo = [
    {
      icon: "📞",
      title: "Telefone",
      content: "41 3322-3231",
      description: "Horário comercial"
    },
    {
      icon: "📧", 
      title: "E-mail",
      content: "contato@jigasolucoes.com.br",
      description: "Respondemos em até 2h"
    },
    {
      icon: "🏢",
      title: "Endereço",
      content: "Rua Martim Afonso, 2041",
      description: "Bigorrilho - Curitiba/PR"
    },
    {
      icon: "🕒",
      title: "Horário",
      content: "Segunda a Sexta",
      description: "8:00 às 18:00"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-jiga-blue/20 relative overflow-hidden"
      id="contato"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura de TI? Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Nossos Canais
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h4>
                  <div className="text-jiga-green font-semibold mb-1">
                    {info.content}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {info.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Nossa Localização
              </h4>
              <div className="bg-tech-gray/50 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-jiga-blue/30">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-white font-semibold">Curitiba - PR</div>
                  <div className="text-gray-400 text-sm">Bigorrilho</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Envie uma Mensagem
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-jiga-green mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato agora mesmo e receba uma consultoria gratuita para sua empresa.
            </p>
            <button className="px-8 py-4 bg-jiga-green text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-jiga-green/30">
              Solicitar Consultoria Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection