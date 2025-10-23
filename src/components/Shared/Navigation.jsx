import { useState, useEffect } from 'react'
import logo1 from '../../assets/logo1.png'


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Infraestrutura', href: '#infraestrutura' },
    { name: 'Projetos', href: '#projetos-especiais' },
    { name: 'Internet', href: '#internet' },
    { name: 'Clientes', href: '#nossos-clientes' },
    { name: 'Contato', href: '#contato' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xs transition-all duration-500 ${
        isScrolled 
          ? 'bg-tech-gray/95 shadow-lg shadow-black/30' 
          : 'bg-tech-gray/60'
      }`}




    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
         {/* Logo */}
          <div >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={logo1} 
                alt="Logotipo JIGA" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-white font-bold text-xl"></span>
          </div>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-right space-x-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-jiga-green font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jiga-green transition-all duration-300 group-hover:w-full"></span>
              </button>

            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('#contato')}
              className="px-6 py-2 bg-jiga-green text-white font-semibold rounded-lg hover:bg-jiga-blue transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden glass-effect rounded-lg p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-dark-space/95 backdrop-blur-xs`}
        >

          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:text-jiga-green hover:bg-white/10 rounded-lg transition-all duration-300"

              >
                {item.name}
              </button>
            ))}
              <button 
                onClick={() => scrollToSection('#contato')}
                className="px-6 py-2 bg-jiga-green text-white font-semibold rounded-lg hover:bg-jiga-blue transition-all duration-300 hover:scale-105"
              >
                Fale Conosco
              </button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation