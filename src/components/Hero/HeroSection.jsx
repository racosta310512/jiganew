import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ParticleBackground from './ParticleBackground'
import logojiga1 from '../../assets/Home.png'

const HeroSection = () => {
  const heroRef = useRef()
  const textRef = useRef()
  const particlesRef = useRef()
  const logoRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .fromTo(logoRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .fromTo(particlesRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=0.3"
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-tech-gray via-jiga-blue to-purple-900 relative overflow-hidden pt-20 md:pt-16"
    >

      {/* Particle Background */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 opacity-30"
      >
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-20">
          
          {/* Contenido de texto a la izquierda */}
          <div className="flex-1 text-center lg:text-left">
          
            {/* Main Text */}
            <div ref={textRef} className="mb-8 lg:mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="block">Qualidade e</span>
                <span className="block text-jiga-green">confiança!</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl">
                Este é o nosso negócio! Soluções de TI com confiabilidade e segurança para seu negócio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16">
              <button className="px-8 py-4 bg-jiga-green text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-jiga-green/30">
                Fale Conosco Agora
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xs border border-white/20 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
                Nossos Serviços
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
              {[
                { number: '+15', text: 'Anos Mercado' },
                { number: '100%', text: 'Segurança' },
                { number: '24/7', text: 'Suporte' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-jiga-green mb-1 lg:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-400">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex-1 flex justify-center lg:justify-start" ref={logoRef}>
            <div className="w-500 h-80 lg:w-[500px] lg:h-[500px] bg-white/10 backdrop-blur-xs rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-jiga-green/20">
              <img 
                ref={imageRef}
                src={logojiga1} 
                alt="JIGA Soluções" 
                className="w-full h-full object-cover rounded-4x2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection