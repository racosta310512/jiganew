import { useRef, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ProductShowroom from './ProductShowroom'
import { PRODUCTS } from '../../utils/constants'

const ProductsSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todos', color: 'jiga-blue' },
    { id: 'infraestrutura', name: 'Infraestrutura', color: 'jiga-green' },
    { id: 'energia', name: 'Energia', color: 'electric-yellow' },
    { id: 'seguranca', name: 'Segurança', color: 'security-orange' },
    { id: 'redes', name: 'Networking', color: 'neon-purple' }
  ]

  const filteredProducts = selectedCategory === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === selectedCategory)

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-tech-gray to-tech-gray/80 relative overflow-hidden"
      id="produtos"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Equipamentos e soluções de alta qualidade para sua infraestrutura
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-${category.color} text-white shadow-lg`
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Showroom */}
        <ProductShowroom products={filteredProducts} />

        {/* Additional Products */}
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-jiga-green mb-6 text-center">
            Produtos Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Softwares aplicativos e utilitários",
              "Equipamentos e periféricos em geral", 
              "Soluções de virtualização",
              "Sistemas de backup físico",
              "Infraestrutura de nuvem",
              "Sistemas de monitoramento"
            ].map((product, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 bg-jiga-blue rounded-full"></div>
                <span className="text-gray-300">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection