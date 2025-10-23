import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Blueprint = () => {
  const blueprintRef = useRef()
  const gridRef = useRef()
  const nodesRef = useRef()

  useEffect(() => {
    // Grid animation
    gsap.fromTo(gridRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blueprintRef.current,
          start: "top 80%"
        }
      }
    )

    // Nodes animation
    const nodes = nodesRef.current?.querySelectorAll('.blueprint-node')
    if (nodes) {
      gsap.fromTo(nodes,
        {
          opacity: 0,
          scale: 0,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: blueprintRef.current,
            start: "top 70%"
          }
        }
      )
    }
  }, [])

  const nodes = [
    { id: 1, title: "Cabeamento", position: "top-1/4 left-1/4", connections: ["2", "3"] },
    { id: 2, title: "Energia", position: "top-1/4 right-1/4", connections: ["1", "4"] },
    { id: 3, title: "Rede", position: "bottom-1/4 left-1/4", connections: ["1", "4"] },
    { id: 4, title: "Segurança", position: "bottom-1/4 right-1/4", connections: ["2", "3"] }
  ]

  return (
    <div ref={blueprintRef} className="relative h-96 bg-tech-gray/50 rounded-2xl border-2 border-jiga-blue/30 overflow-hidden">
      {/* Grid Background */}
      <div ref={gridRef} className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #0066CC 1px, transparent 1px),
            linear-gradient(to bottom, #0066CC 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Horizontal connections */}
        <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Vertical connections */}
        <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
        <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#0066CC" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Diagonal connections */}
        <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="#00CC88" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="#00CC88" strokeWidth="1" strokeDasharray="3,3" />
      </svg>

      {/* Nodes */}
      <div ref={nodesRef} className="relative w-full h-full">
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2 blueprint-node`}
          >
            <div className="glass-effect rounded-full w-16 h-16 flex items-center justify-center border-2 border-jiga-blue hover:border-jiga-green transition-all duration-300 group cursor-pointer">
              <div className="text-white font-bold group-hover:text-jiga-green transition-colors">
                {node.id}
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-sm rounded px-3 py-1 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {node.title}
            </div>
          </div>
        ))}
      </div>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="glass-effect rounded-full w-24 h-24 flex items-center justify-center border-2 border-jiga-green">
          <span className="text-white font-bold text-lg">JIGA</span>
        </div>
      </div>

      {/* Animated Pulse */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 border-2 border-jiga-green rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}

export default Blueprint