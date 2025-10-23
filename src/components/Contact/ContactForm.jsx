import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  const subjects = [
    'Consulta Geral',
    'Orçamento de Projeto',
    'Suporte Técnico',
    'Consultoria',
    'Parceria Comercial',
    'Outro'
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
            placeholder="(41) 99999-9999"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Assunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full glass-effect rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
        >
          <option value="">Selecione um assunto</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full glass-effect rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300 resize-none"
          placeholder="Descreva sua necessidade ou projeto..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-jiga-green hover:bg-jiga-blue hover:scale-105 hover:shadow-2xl hover:shadow-jiga-green/30'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Enviando...
          </div>
        ) : (
          'Enviar Mensagem'
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-gray-400 text-sm text-center">
        Seus dados estão seguros conosco. Não compartilhamos suas informações com terceiros.
      </p>
    </form>
  )
}

export default ContactForm