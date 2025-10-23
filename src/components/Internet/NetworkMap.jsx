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
      {
        opacity: 0,
        scale: 0,
        y: 50
      },
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

    // Animate connections
    const connections = mapRef.current?.querySelectorAll('.connection')
    if (connections) {
      gsap.fromTo(connections,
        {
          strokeDashoffset: 100,
          opacity: 0
        },
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
    {
      id: 1,
      title: "Data Center Principal",
      type: "datacenter",
      position: "top-1/4 left-1/2",
      status: "active",
      connections: ["2", "3", "4"]
    },
    {
      id: 2,
      title: "Cloud AWS",
      type: "cloud",
      position: "top-1/3 left-1/4", 
      status: "active",
      connections: ["1", "5"]
    },
    {
      id: 3,
      title: "Cloud Azure",
      type: "cloud",
      position: "top-1/3 right-1/4",
      status: "active",
      connections: ["1", "5"]
    },
    {
      id: 4,
      title: "Backup Site",
      type: "backup",
      position: "bottom-1/3 left-1/2",
      status: "active",
      connections: ["1", "5"]
    },
    {
      id: 5,
      title: "Client Network",
      type: "client",
      position: "bottom-1/4 left-1/2",
      status: "active",
      connections: ["2", "3", "4"]
    }
  ]

  const getNodeIcon = (type) => {
    const icons = {
      datacenter: "🏢",
      cloud: "☁️",
      backup: "💾",
      client: "💻"
    }
    return icons[type] || "🔘"
  }

  const getNodeColor = (type) => {
    const colors = {
      datacenter: "jiga-blue",
      cloud: "jiga-green",
      backup: "security-orange",
      client: "electric-yellow"
    }
    return colors[type] || "gray"
  }

  return (
    <div ref={mapRef} className="relative h-96 bg-tech-gray/30 rounded-2xl border-2 border-jiga-blue/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #0066CC 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #00CC88 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #FF6B00 0%, transparent 50%)
          `,
        }}></div>
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map(node =>
          node.connections.map(connectionId => {
            const targetNode = nodes.find(n => n.id.toString() === connectionId)
            if (!targetNode) return null

            const getPosition = (nodeId, coord) => {
              const positions = {
                1: { x: "50%", y: "25%" },
                2: { x: "25%", y: "33%" },
                3: { x: "75%", y: "33%" },
                4: { x: "50%", y: "66%" },
                5: { x: "50%", y: "75%" }
              }
              return positions[nodeId]?.[coord] || "50%"
            }

            return (
              <line 
                key={`${node.id}-${connectionId}`}
                x1={getPosition(node.id, 'x')}
                y1={getPosition(node.id, 'y')}
                x2={getPosition(parseInt(connectionId), 'x')}
                y2={getPosition(parseInt(connectionId), 'y')}
                stroke="#0066CC"
                strokeWidth="2"
                strokeDasharray="5,5"
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
            className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2 network-node`}
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
              
              {/* Active Pulse */}
              {node.status === 'active' && (
                <div className="absolute inset-0 border-2 border-jiga-green rounded-full animate-ping opacity-20"></div>
              )}
            </button>
            
            {/* Node Label */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-sm rounded px-3 py-1 text-xs text-white whitespace-nowrap">
              {node.title}
            </div>
          </div>
        ))}
      </div>

      {/* Node Details Panel */}
      {activeNode && (
        <div className="absolute bottom-4 left-4 right-4 glass-effect rounded-xl p-4 transform transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white">{activeNode.title}</h4>
            <button 
              onClick={() => setActiveNode(null)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Tipo:</span>
              <span className="text-white ml-2">{activeNode.type}</span>
            </div>
            <div>
              <span className="text-gray-400">Status:</span>
              <span className="text-jiga-green ml-2">Ativo</span>
            </div>
            <div>
              <span className="text-gray-400">Conexões:</span>
              <span className="text-white ml-2">{activeNode.connections.length}</span>
            </div>
            <div>
              <span className="text-gray-400">Latência:</span>
              <span className="text-white ml-2">&lt;20ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NetworkMap