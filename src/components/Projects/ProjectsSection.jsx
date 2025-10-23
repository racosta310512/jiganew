import { useRef, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const [activeFilter, setActiveFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: "Green Datacenter",
      category: "sustentabilidade",
      status: "completo",
      description: "Implantação de datacenter com eficiência energética e práticas sustentáveis",
      technologies: ["Virtualização", "Cooling eficiente", "Energia renovável"],
      metrics: "40% redução de energia",
      color: "jiga-green"
    },
    {
      id: 2,
      title: "Consolidação de Servidores",
      category: "virtualizacao", 
      status: "andamento",
      description: "Virtualização e consolidação de ambiente físico para virtual",
      technologies: ["VMware", "Hyper-V", "Storage SAN"],
      metrics: "60% menos servidores físicos",
      color: "jiga-blue"
    },
    {
      id: 3,
      title: "Alta-Disponibilidade",
      category: "infraestrutura",
      status: "completo",
      description: "Implementação de cluster de alta-disponibilidade para missão crítica",
      technologies: ["Cluster Windows", "Load Balancer", "Monitoramento"],
      metrics: "99.99% uptime",
      color: "security-orange"
    },
    {
      id: 4,
      title: "Backup & Recovery",
      category: "seguranca",
      status: "planejamento",
      description: "Sistema completo de backup em nuvem e recovery automatizado",
      technologies: ["Veeam", "Cloud Storage", "DR Site"],
      metrics: "RTO < 4 horas",
      color: "neon-purple"
    },
    {
      id: 5,
      title: "Migração Cloud",
      category: "nuvem",
      status: "andamento", 
      description: "Migração completa de infraestrutura local para nuvem híbrida",
      technologies: ["AWS", "Azure", "Hybrid Cloud"],
      metrics: "30% redução de custos",
      color: "electric-yellow"
    },
    {
      id: 6,
      title: "Sistema Linux Enterprise",
      category: "sistemas",
      status: "completo",
      description: "Implementação de ambiente Linux corporativo com suporte enterprise",
      technologies: ["RHEL", "Docker", "Kubernetes"],
      metrics: "100% estabilidade",
      color: "jiga-green"
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'completo', label: 'Concluídos' },
    { id: 'andamento', label: 'Em Andamento' },
    { id: 'planejamento', label: 'Planejamento' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.status === activeFilter)

  const getStatusColor = (status) => {
    const colors = {
      'completo': 'jiga-green',
      'andamento': 'electric-yellow', 
      'planejamento': 'jiga-blue'
    }
    return colors[status] || 'gray'
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-tech-gray/90 relative overflow-hidden"
      id="projetos-especiais"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos <span className="text-gradient">Especiais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consultoria e implantação de soluções inovadoras para seu negócio
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? `bg-${getStatusColor(filter.id)} text-white shadow-lg`
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Consultoria Section */}
        <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-jiga-green mb-6 text-center">
            Serviços de Consultoria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Inventário e Gestão</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Análise completa do ambiente</li>
                <li>• Documentação de infraestrutura</li>
                <li>• Planejamento de capacidade</li>
                <li>• Otimização de recursos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Projetos de Reestruturação</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Obras civis especializadas</li>
                <li>• Modernização de datacenter</li>
                <li>• Migração de ambientes</li>
                <li>• Compliance e segurança</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection