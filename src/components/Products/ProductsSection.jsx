import { useRef, useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ProductShowroom from './ProductShowroom'
import { PRODUCTS } from '../../utils/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Importar logos de parceiros
import hpe from "../../assets/brands/hpenterprise.png";
import microsoft from "../../assets/brands/microsoft.png";
import tplink from "../../assets/brands/tplink.png";
import intel from "../../assets/brands/intel.png";
import brother from "../../assets/brands/brother.png";
import eset from "../../assets/brands/eset.png";
import cisco from "../../assets/brands/ciscosystem.png";
import lenovo from "../../assets/brands/lenovo.png";
import apc from "../../assets/brands/apc.png";
import intelbras from "../../assets/brands/intelbras.png";
import seagate from "../../assets/brands/seagate.png";
import dlink from "../../assets/brands/dlinnk.png";
import nexans from "../../assets/brands/nexans.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  const partnersRef = useRef();

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

  const brands = [
    hpe, brother, eset, cisco, lenovo,
    intelbras, seagate, dlink, intel,
    microsoft, tplink, apc, nexans
  ];

  useEffect(() => {
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

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

        {/* Partner Brands Section */}
        <div className="mt-24 glass-effect rounded-3xl p-10 max-w-6xl mx-auto text-center text-white shadow-lg border border-white/10 backdrop-blur-md">
          <h3 className="text-3xl font-bold mb-4 text-jiga-green">
            Parceiros Tecnológicos
          </h3>
          <p className="text-white/80 mb-10">
            Confiança e credibilidade através de líderes globais em tecnologia
          </p>

          <div 
            ref={partnersRef}
            className="flex flex-wrap justify-center items-center gap-8 px-6"
          >
            {brands.map((logo, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-inner hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="h-10 md:h-12 transition-all duration-300 hover:brightness-150"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductsSection
