import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef()
  const [isExpanded, setIsExpanded] = useState(false)

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
        delay: index * 0.15,
        ease: "back.out(1.7)"
      }
    )
  }, [index])

  const getStatusText = (status) => {
    const texts = {
      'completo': 'Concluído',
      'andamento': 'Em Andamento',
      'planejamento': 'Planejamento'
    }
    return texts[status] || status
  }

  return (
    <div
      ref={cardRef}
      className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 cursor-pointer"
      onClick={() => setIsExpanded(true)}
    >
      {/* Status Badge */}
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${project.color} text-white mb-4`}>
        {getStatusText(project.status)}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <span 
            key={idx}
            className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Metrics */}
      <div className="border-t border-white/10 pt-4">
        <div className="text-sm text-gray-400">Resultado</div>
        <div className="text-lg font-semibold text-white">{project.metrics}</div>
      </div>
    </div>
  )
}

export default ProjectCard