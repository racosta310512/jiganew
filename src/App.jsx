import Layout from './components/Shared/Layout'
import HeroSection from './components/Hero/HeroSection'
import AboutSection from './components/About/AboutSection'
import ServicesSection from './components/Services/ServicesSection'
import ProductsSection from './components/Products/ProductsSection'
import InfrastructureSection from './components/Infrastructure/InfrastructureSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import InternetSection from './components/Internet/InternetSection'
import ClientsSection from './components/Clients/ClientsSection'
import ContactSection from './components/Contact/ContactSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <InfrastructureSection />
      <ProjectsSection />
      <InternetSection />
      <ClientsSection />
      <ContactSection />
    </Layout>
  )
}

export default App