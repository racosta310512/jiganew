import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const ProductShowroom = ({ products }) => {
  const showroomRef = useRef()
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const items = showroomRef.current?.querySelectorAll('.product-item')
    if (!items) return

    gsap.fromTo(items,
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
        stagger: 0.3,
        ease: "back.out(1.7)"
      }
    )
  }, [products])

  return (
    <div>
      {/* Products Grid */}
      <div ref={showroomRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-item glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col h-full"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Product Icon */}
            <div className={`text-4xl mb-4 text-${product.color}`}>
              {getProductIcon(product.name)}
            </div>
            
            {/* Product Name */}
            <h3 className="text-xl font-bold text-white mb-3">
              {product.name}
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {product.description}
            </p>
            
            {/* Specifications */}
            <div className="space-y-2 flex-1">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-jiga-green rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-400">{spec}</span>
                </div>
              ))}
            </div>
            
            {/* View Details - FIXED ALIGNMENT */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <button className="w-full text-jiga-green font-semibold hover:text-jiga-blue transition-colors text-center py-2">
                Ver Detalhes →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-jiga-green mb-2">Descrição</h4>
                <p className="text-gray-300">{selectedProduct.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-jiga-green mb-2">Especificações Técnicas</h4>
                <ul className="space-y-2">
                  {selectedProduct.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jiga-blue rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-jiga-green text-white font-semibold rounded-lg hover:bg-jiga-blue transition-colors">
                  Solicitar Orçamento
                </button>
                <button 
                  onClick={() => setSelectedProduct(null)}
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

// Helper function for product icons
const getProductIcon = (productName) => {
  const icons = {
    'Servidores': '🖥️',
    'Nobreaks': '⚡',
    'Firewalls': '🔒',
    'Storage': '💾',
    'Switches': '🔗',
    'Roteadores': '🌐'
  }
  return icons[productName] || '📦'
}

export default ProductShowroom