import { useState } from 'react'

// Datos de contacto estáticos
export const CONTACT_INFO = [
  {
    icon: 'whatsapp',
    title: 'WhatsApp Direto',
    value: '+55 (41) 3322-3231',
    color: 'jiga-green'
  },
  {
    icon: 'mail',
    title: 'Email Corporativo',
    value: 'contato@jigasolucoes.com.br',
    color: 'jiga-blue'
  },
  {
    icon: 'phone',
    title: 'Telefone',
    value: '(41) 3322-3231',
    color: 'security-orange'
  },
  {
    icon: 'clock',
    title: 'Horário Comercial',
    value: 'Seg-Sex: 8:00 - 18:00',
    color: 'neon-purple'
  }
]

export const CONTACT_METHODS = [
  {
    icon: 'message-circle',
    title: 'WhatsApp',
    value: '+55 (41) 3322-3231',
    color: 'jiga-green',
    description: 'Resposta imediata. Conversa direta e rápida.',
  },
  {
    icon: 'mail',
    title: 'Email',
    value: 'contato@jigasolucoes.com.br',
    color: 'jiga-blue',
    description: 'Formal e documentado. Para propostas detalhadas.',
  }
]

// Números de contacto
export const WHATSAPP_NUMBER = '554133223231'
export const PHONE_NUMBER = '554133223231'
export const EMAIL = 'contato@jigasolucoes.com.br'
export const ADDRESS = 'Rua Martim Afonso, 2041 - Bigorrilho, Curitiba/PR'

// Hook principal
export const useContactForm = () => {
  const [contactType, setContactType] = useState('whatsapp')
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateContactData = () => {
    const newErrors = {}
    
    if (!contactData.name.trim()) {
      newErrors.name = 'O nome é obrigatório'
    }
    
    if (contactType === 'email' && !contactData.email.trim()) {
      newErrors.email = 'O email é obrigatório para enviar email'
    } else if (contactData.email.trim() && !/\S+@\S+\.\S+/.test(contactData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!contactData.subject.trim()) {
      newErrors.subject = 'O assunto é obrigatório'
    }
    
    if (!contactData.message.trim()) {
      newErrors.message = 'A mensagem é obrigatória'
    } else if (contactData.message.length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const buildWhatsAppMessage = () => {
    let message = `Olá Jiga Soluções, entro em contato através do site.\n\n`
    if (contactData.name) message += `*Nome:* ${contactData.name}\n`
    if (contactData.email) message += `*Email:* ${contactData.email}\n`
    if (contactData.phone) message += `*Telefone:* ${contactData.phone}\n`
    if (contactData.subject) message += `*Assunto:* ${contactData.subject}\n\n`
    if (contactData.message) message += `*Mensagem:*\n${contactData.message}\n\n`
    message += `---\n*Enviado através do site jigasolucoes.com.br*`
    return message
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    if (!validateContactData()) {
      return
    }
    
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
        setIsSubmitted(false)
        setContactData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: ''
        })
      }, 1500)
    }, 1000)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    
    if (!validateContactData()) {
      return
    }
    
    setIsSubmitting(true)
    
    const emailBody = `
Nome: ${contactData.name}
Email: ${contactData.email || 'Não informado'}
Telefone: ${contactData.phone || 'Não informado'}
Assunto: ${contactData.subject}

Mensagem:
${contactData.message}

---
Enviado através do site jigasolucoes.com.br
    `
    
    const emailSubject = contactData.subject || 'Consulta através do Site'
    const emailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody.trim())}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      setTimeout(() => {
        window.location.href = emailUrl
        setIsSubmitted(false)
        setContactData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: ''
        })
      }, 1500)
    }, 1000)
  }

  const getSubmitHandler = () => {
    if (contactType === 'whatsapp') return handleWhatsAppSubmit
    if (contactType === 'email') return handleEmailSubmit
    return handleEmailSubmit
  }

  const getSubmitButtonText = () => {
    if (contactType === 'whatsapp') return 'Abrir no WhatsApp'
    if (contactType === 'email') return 'Preparar Email'
    return 'Enviar Mensagem'
  }

  const getCharacterLimit = () => {
    return contactType === 'whatsapp' ? 1000 : 2000
  }

  return {
    // Estado
    contactType,
    setContactType,
    contactData,
    isSubmitting,
    isSubmitted,
    errors,
    
    // Datos estáticos
    CONTACT_INFO,
    CONTACT_METHODS,
    ADDRESS,
    
    // Funciones
    handleChange,
    getSubmitHandler,
    getSubmitButtonText,
    getCharacterLimit,
    validateContactData
  }
}