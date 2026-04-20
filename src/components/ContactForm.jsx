import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="relative group">
        <input 
          className="block w-full bg-surface-container-highest border-0 border-b-2 border-transparent text-on-surface text-lg px-4 py-5 focus:ring-0 focus:border-primary-container transition-colors peer rounded-t-DEFAULT" 
          id="name" 
          name="name" 
          placeholder=" " 
          type="text" 
          required 
        />
        <label 
          className="absolute text-sm font-label uppercase tracking-[0.05em] text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container" 
          htmlFor="name"
        >
          Nombre Completo
        </label>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors pointer-events-none peer-focus:hidden"></div>
      </div>

      {/* Industry */}
      <div className="relative group">
        <input 
          className="block w-full bg-surface-container-highest border-0 border-b-2 border-transparent text-on-surface text-lg px-4 py-5 focus:ring-0 focus:border-primary-container transition-colors peer rounded-t-DEFAULT" 
          id="industry" 
          name="industry" 
          placeholder=" " 
          type="text" 
          required 
        />
        <label 
          className="absolute text-sm font-label uppercase tracking-[0.05em] text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container" 
          htmlFor="industry"
        >
          Industria / Especialidad
        </label>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors pointer-events-none peer-focus:hidden"></div>
      </div>

      {/* Portfolio / Socials */}
      <div className="relative group">
        <input 
          className="block w-full bg-surface-container-highest border-0 border-b-2 border-transparent text-on-surface text-lg px-4 py-5 focus:ring-0 focus:border-primary-container transition-colors peer rounded-t-DEFAULT" 
          id="portfolio" 
          name="portfolio" 
          placeholder=" " 
          type="url" 
          required 
        />
        <label 
          className="absolute text-sm font-label uppercase tracking-[0.05em] text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container" 
          htmlFor="portfolio"
        >
          Link a Portafolio o Redes
        </label>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors pointer-events-none peer-focus:hidden"></div>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea 
          className="block w-full bg-surface-container-highest border-0 border-b-2 border-transparent text-on-surface text-lg px-4 py-5 focus:ring-0 focus:border-primary-container transition-colors peer rounded-t-DEFAULT resize-none" 
          id="message" 
          name="message" 
          placeholder=" " 
          rows="4" 
          required
        ></textarea>
        <label 
          className="absolute text-sm font-label uppercase tracking-[0.05em] text-on-surface-variant duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-container" 
          htmlFor="message"
        >
          ¿Por qué La Conect?
        </label>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors pointer-events-none peer-focus:hidden"></div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button 
          disabled={status === 'submitting'}
          className={`w-full md:w-auto bg-gradient-to-br text-on-primary font-bold uppercase tracking-[0.05em] text-sm px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,95,31,0.2)] flex items-center justify-center gap-3 ${
            status === 'success' 
              ? 'from-green-500 to-green-700' 
              : 'from-primary-container to-on-primary-fixed-variant hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,95,31,0.4)]'
          }`} 
          type="submit"
        >
          {status === 'idle' && (
            <>
              Enviar Aplicación
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>arrow_forward</span>
            </>
          )}
          {status === 'submitting' && 'Enviando...'}
          {status === 'success' && (
             <>
               ¡Aplicación Enviada!
               <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
             </>
          )}
        </button>
      </div>
    </form>
  );
}
