import React from 'react'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  User,
  FileText,
  MessageSquare,
  AlertCircle,
  Send,
  Zap,
  CheckCircle
} from 'lucide-react'

const ContactRightPanel = ({
  contactType,
  setContactType,
  contactData,
  isSubmitting,
  isSubmitted,
  errors,
  contactMethods,
  handleChange,
  getSubmitHandler,
  getSubmitButtonText,
  getCharacterLimit
}) => {
  
  // Renderizar icono según nombre
  const renderIcon = (iconName, size = 24) => {
    switch(iconName) {
      case 'message-circle':
        return <MessageCircle size={size} />
      case 'mail':
        return <Mail size={size} />
      case 'phone':
        return <Phone size={size} />
      default:
        return <MessageCircle size={size} />
    }
  }

  return (
    <div className="space-y-6">
      {/* Selector de Método */}
      <div className="contact-item">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Escolha como nos contatar</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {contactMethods.map((method, index) => (
            <button
              key={index}
              onClick={() => setContactType(index === 0 ? 'whatsapp' : 'email')}
              className={`p-5 rounded-xl transition-all duration-300 flex flex-col items-center text-center ${
                (contactType === 'whatsapp' && index === 0) ||
                (contactType === 'email' && index === 1)
                  ? `bg-${method.color}/20 border-2 border-${method.color} shadow-lg`
                  : 'bg-carbon-gray/50 border border-white/10 hover:bg-white/5'
              }`}
            >
              <div className={`w-14 h-14 rounded-full bg-${method.color}/20 flex items-center justify-center mb-3`}>
                <div className={`text-${method.color}`}>
                  {renderIcon(method.icon)}
                </div>
              </div>
              <h4 className="font-semibold text-white mb-1">{method.title}</h4>
              <p className="text-xs text-gray-400 mb-2">{method.value}</p>
              <p className="text-xs text-gray-300">{method.description}</p>
              <div className={`mt-3 text-xs font-semibold px-3 py-1 rounded-full ${
                contactType === method.title.toLowerCase() 
                  ? 'bg-white text-carbon-gray' 
                  : 'bg-white/10 text-white'
              }`}>
                {contactType === method.title.toLowerCase() ? '✓ Selecionado' : 'Selecionar'}
              </div>
            </button>
          ))}
        </div>

        <div className="text-center p-4 bg-carbon-gray/50 rounded-xl border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="text-jiga-green" size={18} />
            <span className="text-sm text-gray-300">
              Método selecionado: <span className="text-white font-semibold">
                {contactType === 'whatsapp' ? 'WhatsApp' : 'Email'}
              </span>
            </span>
          </div>
          <p className="text-xs text-gray-400">
            {contactType === 'whatsapp' 
              ? 'Você será redirecionado para o WhatsApp após preencher o formulário.' 
              : 'Seu cliente de email será aberto com a mensagem preparada.'}
          </p>
        </div>
      </div>

      {/* Formulario Dinámico */}
      <div className="contact-item">
        {isSubmitted ? (
          <div className="glass-effect rounded-2xl p-8 sm:p-12 text-center">
            <CheckCircle className="text-jiga-green text-5xl sm:text-6xl mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              {contactType === 'whatsapp' ? 'Redirecionando para WhatsApp!' : 'Preparando Email!'}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              {contactType === 'whatsapp' 
                ? 'Você será redirecionado automaticamente para WhatsApp.' 
                : 'Seu cliente de email será aberto com a mensagem preparada.'}
            </p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-jiga-green border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : (
          <div className="glass-effect rounded-2xl p-6 sm:p-8">
            <div className={`flex items-center justify-center gap-3 mb-6 p-4 rounded-xl ${
              contactType === 'whatsapp' ? 'bg-[#25D366]/10' : 'bg-jiga-blue/10'
            }`}>
              <div className={`w-12 h-12 rounded-full ${
                contactType === 'whatsapp' ? 'bg-[#25D366]/20' : 'bg-jiga-blue/20'
              } flex items-center justify-center`}>
                {contactType === 'whatsapp' ? 
                  <MessageCircle className="text-[#25D366]" size={24} /> :
                  <Mail className="text-jiga-blue" size={24} />
                }
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {contactType === 'whatsapp' ? 'Mensagem via WhatsApp' : 'Mensagem via Email'}
                </h3>
                <p className="text-gray-400 text-sm">
                  Preencha os dados abaixo para continuar
                </p>
              </div>
            </div>
            
            <form onSubmit={getSubmitHandler()} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactData.name}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-carbon-gray/50 border text-white rounded-lg focus:outline-none focus:ring-2 transition-all text-sm ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-white/10 focus:border-jiga-blue focus:ring-jiga-blue'
                      }`}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email {contactType === 'email' ? '*' : '(Opcional)'}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleChange}
                      required={contactType === 'email'}
                      className={`w-full pl-10 pr-4 py-3 bg-carbon-gray/50 text-white border rounded-lg focus:outline-none focus:ring-2 transition-all text-sm ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-white/10 focus:border-jiga-green focus:ring-jiga-green'
                      }`}
                      placeholder="seu@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone (Opcional)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-carbon-gray/50 text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:border-security-orange focus:ring-security-orange transition-all text-sm"
                      placeholder="(41) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FileText size={16} />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 bg-carbon-gray/50 text-white border rounded-lg focus:outline-none focus:ring-2 transition-all text-sm ${
                        errors.subject 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-white/10 focus:border-security-orange focus:ring-security-orange'
                      }`}
                      placeholder="Ex: Consultoria em TI"
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MessageSquare size={16} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    maxLength={getCharacterLimit()}
                    className={`w-full pl-10 pr-4 py-3 bg-carbon-gray/50 text-white border rounded-lg focus:outline-none focus:ring-2 resize-none transition-all text-sm ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-white/10 focus:border-jiga-blue focus:ring-jiga-blue'
                    }`}
                    placeholder={
                      contactType === 'whatsapp' 
                        ? "Descreva sua consulta ou projeto de forma clara e concisa..."
                        : "Descreva em detalhes seu projeto, requisitos e objetivos..."
                    }
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
                <div className="mt-2 flex justify-between text-xs">
                  <span className="text-gray-400">
                    {contactData.message.length}/{getCharacterLimit()} caracteres
                  </span>
                  {contactType === 'whatsapp' && (
                    <span className="text-[#25D366]">
                      ✓ Compatível com WhatsApp
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 ${
                  contactType === 'whatsapp' 
                    ? 'bg-[#25D366] hover:bg-[#1DA851]' 
                    : 'bg-gradient-to-r from-jiga-blue to-jiga-green hover:from-jiga-blue/90 hover:to-jiga-green/90'
                } text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {contactType === 'whatsapp' ? 'Preparando WhatsApp...' : 'Preparando Email...'}
                  </>
                ) : (
                  <>
                    {contactType === 'whatsapp' ? <MessageCircle size={20} /> : <Send size={20} />}
                    {getSubmitButtonText()}
                  </>
                )}
              </button>
              
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                {contactType === 'whatsapp' 
                  ? 'Ao enviar, você será redirecionado ao WhatsApp para continuar a conversa.'
                  : 'Ao enviar, seu cliente de email será aberto com a mensagem pronta para enviar.'}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactRightPanel