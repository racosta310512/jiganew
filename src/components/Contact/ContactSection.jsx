import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ContactForm from './ContactForm'
import NetworkMap from './NetworkMap'

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
      className="py-16 sm:py-20 bg-gradient-to-br from-tech-gray to-jiga-blue/20 relative overflow-hidden"
      id="contato"
    >
      <div className="container mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura de TI? Fale conosco!
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Lado esquerdo - Infos e Mapa */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
              Nossos Canais
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{info.icon}</div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{info.title}</h4>
                  <div className="text-jiga-green font-semibold text-sm sm:text-base mb-1">{info.content}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{info.description}</div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <NetworkMap className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden shadow-lg border-2 border-jiga-blue/30" />
          </div>

          {/* Lado direito - Formulário */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">Envie uma Mensagem</h3>
            <ContactForm />
          </div>
        </div>

        {/* CTA Footer 
        <div className="mt-12 sm:mt-16 text-center">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-jiga-green mb-3 sm:mb-4">Pronto para Começar?</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              Entre em contato agora mesmo e receba uma consultoria gratuita para sua empresa.
            </p>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-jiga-green text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-jiga-green/30">
              Solicitar Consultoria Gratuita
            </button>
          </div>
        </div>*/}
      </div>
    </section>
  )
}

export default ContactSection

