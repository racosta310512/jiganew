import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MILESTONES } from '../../utils/constants'

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  const timelineRef = useRef()

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item')
    
    gsap.fromTo(items, 
      {
        opacity: 0,
        x: -100,
        scale: 0.8
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        }
      }
    )
  }, [])

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-jiga-blue to-jiga-green h-full"></div>
      
      {MILESTONES.map((milestone, index) => (
        <div 
          key={index}
          className={`timeline-item flex items-center mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Punto en timeline */}
          <div className="w-6 h-6 bg-jiga-blue rounded-full border-4 border-white shadow-xl z-10 flex-shrink-0"></div>
          
          {/* Card */}
          <div className={`glass-effect rounded-xl p-6 mx-8 flex-1 transform hover:scale-105 transition-all duration-300 ${
            index % 2 === 0 ? 'text-right' : 'text-left'
          }`}>
            <div className="text-2xl font-bold text-jiga-green mb-2">
              {milestone.year}
            </div>
            <div className="text-white text-lg">
              {milestone.event}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline