import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const NetworkMap = () => {
  const mapRef = useRef()
  const nodesRef = useRef()
  const [activeNode, setActiveNode] = useState(null)

  useEffect(() => {
    const nodes = nodesRef.current?.querySelectorAll('.network-node')
    if (!nodes) return

    gsap.fromTo(nodes,
      { opacity: 0, scale: 0, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%"
        }
      }
    )

    const connections = mapRef.current?.querySelectorAll('.connection')
    if (connections) {
      gsap.fromTo(connections,
        { strokeDashoffset: 100, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 70%"
          }
        }
      )
    }
  }, [])

  const nodes = [
    { id: 1, title: "Data Center Principal", type: "datacenter", position: { x: "50%", y: "15%" }, status: "active", connections: ["2", "3", "5"] },
    { id: 2, title: "Cloud AWS", type: "cloud", position: { x: "20%", y: "35%" }, status: "active", connections: ["1", "5"] },
    { id: 3, title: "Cloud Azure", type: "cloud", position: { x: "80%", y: "35%" }, status: "active", connections: ["1", "5"] },
    { id: 4, title: "Backup Site", type: "backup", position: { x: "35%", y: "70%" }, status: "active", connections: ["5"] },
    { id: 5, title: "Client Network", type: "client", position: { x: "65%", y: "85%" }, status: "active", connections: ["2", "3", "4"] }
  ]

  const getNodeIcon = (type) => ({
    datacenter: "🏢",
    cloud: "☁️",
    backup: "💾",
    client: "💻"
  }[type] || "🔘")

  const getNodeColor = (type) => ({
    datacenter: "jiga-blue",
    cloud: "jiga-green",
    backup: "security-orange",
    client: "electric-yellow"
  }[type] || "gray")

  return (
    <div
      ref={mapRef}
      className="relative h-[600px] md:h-[700px] lg:h-[850px] bg-tech-gray/30 rounded-2xl border-2 border-jiga-blue/20 overflow-hidden transition-all duration-300"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 40%, #0066CC 0%, transparent 60%),
              radial-gradient(circle at 80% 30%, #00CC88 0%, transparent 60%),
              radial-gradient(circle at 50% 90%, #FF6B00 0%, transparent 70%)
            `,
          }}
        ></div>
      </div>

      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map(node =>
          node.connections.map(connectionId => {
            const targetNode = nodes.find(n => n.id.toString() === connectionId)
            if (!targetNode) return null

            return (
              <line
                key={`${node.id}-${connectionId}`}
                x1={node.position.x}
                y1={node.position.y}
                x2={targetNode.position.x}
                y2={targetNode.position.y}
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="6,6"
                className="connection"
              />
            )
          })
        )}
      </svg>

      {/* Nodes */}
      <div ref={nodesRef} className="relative w-full h-full">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 network-node"
            style={{ left: node.position.x, top: node.position.y }}
          >
            <button
              onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
              className={`glass-effect rounded-full w-16 h-16 flex items-center justify-center border-2 border-${getNodeColor(node.type)} hover:scale-110 transition-all duration-300 group cursor-pointer ${
                activeNode?.id === node.id ? 'scale-110 shadow-lg' : ''
              }`}
            >
              <div className="text-2xl group-hover:scale-110 transition-transform">
                {getNodeIcon(node.type)}
              </div>
              {node.status === 'active' && (
                <div className="absolute inset-0 border-2 border-jiga-green rounded-full animate-ping opacity-20"></div>
              )}
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-sm rounded px-3 py-1 text-xs text-white whitespace-nowrap">
              {node.title}
            </div>
          </div>
        ))}
      </div>

      {/* Details panel */}
      {activeNode && (
        <div className="absolute bottom-4 left-4 right-4 glass-effect rounded-xl p-4 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white">{activeNode.title}</h4>
            <button onClick={() => setActiveNode(null)} className="text-gray-400 hover:text-white">
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-400">Tipo:</span><span className="text-white ml-2">{activeNode.type}</span></div>
            <div><span className="text-gray-400">Status:</span><span className="text-jiga-green ml-2">Ativo</span></div>
            <div><span className="text-gray-400">Conexões:</span><span className="text-white ml-2">{activeNode.connections.length}</span></div>
            <div><span className="text-gray-400">Latência:</span><span className="text-white ml-2">&lt;20ms</span></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NetworkMap
