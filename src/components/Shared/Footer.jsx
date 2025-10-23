import { useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

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

      <div className="container mx-auto px-6 relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-xl">J</span>
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">Jiga Soluções</div>
                  <div className="text-gray-400">Tecnologia e Inovação</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Qualidade e confiança! Este é o nosso negócio. Soluções de TI com 
                confiabilidade e segurança para que você se dedique exclusivamente ao seu negócio.
              </p>
              
              <div className="flex space-x-4">
                <button className="glass-effect rounded-lg p-3 hover:scale-110 transition-all duration-300">
                  <span className="text-white">📧</span>
                </button>
                <button className="glass-effect rounded-lg p-3 hover:scale-110 transition-all duration-300">
                  <span className="text-white">📱</span>
                </button>
                <button className="glass-effect rounded-lg p-3 hover:scale-110 transition-all duration-300">
                  <span className="text-white">💼</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
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
              <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-jiga-green rounded-full"></div>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Jiga Soluções Ltda. Todos os direitos reservados.
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>41 3322-3231</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contato@jigasolucoes.com.br</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="glass-effect rounded-lg px-4 py-2 text-white hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Voltar ao Topo</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer