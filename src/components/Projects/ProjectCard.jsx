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

      {/* View Details */}
      <div className="mt-4 text-center">
        <button className="text-jiga-green font-semibold text-sm hover:text-jiga-blue transition-colors">
          Ver Detalhes →
        </button>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-${project.color} text-white mb-2`}>
                  {getStatusText(project.status)}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-jiga-green mb-2">Descrição do Projeto</h4>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-jiga-green mb-2">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 glass-effect rounded-lg text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-jiga-green mb-2">Métricas de Sucesso</h4>
                <div className="text-xl font-bold text-white">{project.metrics}</div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-jiga-green text-white font-semibold rounded-lg hover:bg-jiga-blue transition-colors">
                  Solicitar Projeto Similar
                </button>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard