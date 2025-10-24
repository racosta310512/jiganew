import { useRef } from 'react'

const NetworkMap = () => {
  const mapRef = useRef()

  return (
    <div className="glass-effect rounded-2xl p-6">
      <h4 className="text-lg font-semibold text-white mb-4">
        Nossa Localização
      </h4>

      {/* Contenedor del mapa */}
      <div className="rounded-lg overflow-hidden shadow-lg border-2 border-jiga-blue/30 max-w-xl mx-auto">
        <iframe
            ref={mapRef}
            title="Google Maps - JIGA Soluções"
            className="w-full h-40 md:h-48 lg:h-56"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1701352869744!2d-49.28035968422623!3d-25.452136733991415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5977efba197%3A0xd0e8c96ff30d68d7!2sR.%20Martim%20Afonso%2C%202041%20-%20Bigorrilho%2C%20Curitiba%20-%20PR%2C%2080730-030!5e0!3m2!1spt-BR!2sbr!4v1682180878909!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
      </div>

    </div>
  )
}

export default NetworkMap
