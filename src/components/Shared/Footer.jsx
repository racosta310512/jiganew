import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import logo1 from '../../assets/logo1.png'

const Footer = () => {
  const footerRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Infraestrutura', href: '#infraestrutura' },
    { name: 'Projetos', href: '#projetos-especiais' }
  ]

  const services = [
    'Configuração de Servidores',
    'Backup Services', 
    'Segurança de Rede',
    'Computação em Nuvem',
    'CFTV e Controle de Acesso'
  ]

  return (
    <footer 
      ref={footerRef}
      className="bg-tech-gray border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #0066CC 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #00CC88 0%, transparent 50%)
          `,
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                            <div className="w-13 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                              <img 
                                src={logo1} 
                                alt="Logotipo JIGA" 
                                className="w-full h-full object-contain" 
                              />
                            </div>
                <div>
                  <div className="text-white font-bold text-2xl sm:text-3xl"></div>
                  <div className="text-gray-400 text-sm sm:text-base"></div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Qualidade e confiança! Este é o nosso negócio. Soluções de TI com 
                confiabilidade e segurança para que você se dedique exclusivamente ao seu negócio.
              </p>
              
              <div className="flex space-x-4">
                <button className="glass-effect rounded-lg p-3 sm:p-4 hover:scale-110 transition-all duration-300">
                  <span className="text-white text-lg sm:text-xl">📧</span>
                </button>
                <button className="glass-effect rounded-lg p-3 sm:p-4 hover:scale-110 transition-all duration-300">
                  <span className="text-white text-lg sm:text-xl">📱</span>
                </button>
                <button className="glass-effect rounded-lg p-3 sm:p-4 hover:scale-110 transition-all duration-300">
                  <span className="text-white text-lg sm:text-xl">💼</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Links Rápidos</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-jiga-green transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Serviços</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-jiga-green rounded-full"></div>
                    <span className="text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center space-y-3 md:space-y-2">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base text-gray-400">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>41 3322-3231</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contato@jigasolucoes.com.br</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm sm:text-base text-center">
              © 2025 Jiga Soluções Ltda. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer