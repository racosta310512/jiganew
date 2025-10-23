import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const ClientCarousel = ({ logos }) => {
  const carouselRef = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const items = carouselRef.current?.querySelectorAll('.carousel-item')
    if (!items) return

    gsap.fromTo(items,
      {
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    )
  }, [])

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 4))
    }, 4000)

    return () => clearInterval(interval)
  }, [logos.length])

  const slides = []
  for (let i = 0; i < logos.length; i += 4) {
    slides.push(logos.slice(i, i + 4))
  }

  return (
    <div className="relative">
      {/* Carousel */}
      <div ref={carouselRef} className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {slide.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="carousel-item glass-effect rounded-xl p-6 flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300"
                  >
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-jiga-blue to-jiga-green rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-sm">
                        {logo.name.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Client Name */}
                    <div className="text-white font-semibold text-center mb-1">
                      {logo.name}
                    </div>
                    
                    {/* Sector */}
                    <div className="text-gray-400 text-xs text-center">
                      {logo.sector}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-jiga-green scale-125' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 glass-effect rounded-full w-8 h-8 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 glass-effect rounded-full w-8 h-8 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        ›
      </button>
    </div>
  )
}

export default ClientCarousel