import React, { useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import gsap from 'gsap'
import { useContactForm } from '../../hooks/useContactForm'
import ContactLeftPanel from './ContactLeftPanel'
import ContactRightPanel from './ContactRightPanel'

const ContactSection = () => {
  const sectionRef = useScrollAnimation({
    y: 100,
    opacity: 0,
    duration: 1.2
  })

  // Usar hook personalizado
  const {
    contactType,
    setContactType,
    contactData,
    isSubmitting,
    isSubmitted,
    errors,
    CONTACT_INFO,
    CONTACT_METHODS,
    ADDRESS,
    handleChange,
    getSubmitHandler,
    getSubmitButtonText,
    getCharacterLimit
  } = useContactForm()

  // Animación para elementos de contacto
  useEffect(() => {
    const contactItems = document.querySelectorAll('.contact-item')
    contactItems.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: -30,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-br from-tech-gray to-jiga-blue/20 relative overflow-hidden"
      id="contato"
    >
      <div className="container mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Escolha a melhor forma de nos contatar e transforme sua infraestrutura de TI hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Panel Izquierdo - Información */}
          <ContactLeftPanel 
            contactInfo={CONTACT_INFO}
            address={ADDRESS}
          />

          {/* Panel Derecho - Interacción */}
          <ContactRightPanel 
            contactType={contactType}
            setContactType={setContactType}
            contactData={contactData}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            errors={errors}
            contactMethods={CONTACT_METHODS}
            handleChange={handleChange}
            getSubmitHandler={getSubmitHandler}
            getSubmitButtonText={getSubmitButtonText}
            getCharacterLimit={getCharacterLimit}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection