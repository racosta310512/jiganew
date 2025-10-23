import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "back.out(1.7)"
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`glass-effect rounded-2xl p-8 transform transition-all duration-500 cursor-pointer ${
        isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? `var(--color-${service.color})` : 'rgba(255,255,255,0.2)',
        boxShadow: isHovered ? `0 0 30px var(--color-${service.color})` : 'none'
      }}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{service.icon}</div>
      
      {/* Category */}
      <h3 className={`text-2xl font-bold mb-4 text-${service.color}`}>
        {service.category}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      {/* Services List */}
      <ul className="space-y-3 mb-6">
        {service.services.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
            <span className="text-white">{item}</span>
          </li>
        ))}
      </ul>
      
      {/* Metrics */}
      <div className={`border-t border-${service.color}/30 pt-4`}>
        <div className="text-sm text-gray-400">Performance</div>
        <div className="text-lg font-semibold text-white">{service.metrics}</div>
      </div>
    </div>
  )
}

export default ServiceCard