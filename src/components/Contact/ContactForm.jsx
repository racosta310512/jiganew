import { useState } from 'react'
import axios from 'axios'

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
  const [submitStatus, setSubmitStatus] = useState(null)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus) {
      setSubmitStatus(null)
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setStatusMessage('')

    try {
      // ✅ SOLUCIÓN: Usar variable de entorno de React
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

      console.log('📤 Enviando datos al backend:', formData)

      const response = await axios.post(`${API_URL}/contacto/enviar`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000
      })

      if (response.data.success) {
        setSubmitStatus('success')
        setStatusMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        console.log('✅ Mensagem enviada com sucesso:', response.data.messageId)
      } else {
        throw new Error(response.data.message || 'Error al procesar la solicitud')
      }

    } catch (error) {
      console.error('❌ Erro ao enviar formulário:', error)
      setSubmitStatus('error')
      
      if (error.response) {
        const serverError = error.response.data
        if (serverError.errors) {
          const errorMessages = serverError.errors.map(err => err.message).join(', ')
          setStatusMessage(`Erros no formulário: ${errorMessages}`)
        } else {
          setStatusMessage(serverError.message || 'Mensagem de erro no servidor ao processar')
        }
      } else if (error.request) {
        setStatusMessage('Não foi possível conectar ao servidor. Verifique se o backend está em execução. http://localhost:5000')
      } else if (error.code === 'ECONNABORTED') {
        setStatusMessage('A conexão demorou muito. Tente novamente.')
      } else {
        setStatusMessage('Erro inesperado. Tente novamente.')
      }
    } finally {
      setIsSubmitting(false)
    }
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
          className="w-full glass-effect rounded-lg px-4 py-3 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-jiga-green transition-all duration-300"
          disabled={isSubmitting}
        >
          <option value="" disabled className="text-gray-400">
            Selecione um assunto
          </option>
          {subjects.map((subject, index) => (
            <option
              key={index}
              value={subject}
              className="text-white bg-jiga-blue"
            >
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
          disabled={isSubmitting}
        />
      </div>

      {/* Mensajes de Estado */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Sucesso!</p>
              <p className="text-green-300 text-sm">{statusMessage}</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div>
              <p className="text-red-400 font-semibold">Erro ao enviar mensagem</p>
              <p className="text-red-300 text-sm">{statusMessage}</p>
            </div>
          </div>
        </div>
      )}

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