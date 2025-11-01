'use client'

export default function CircleAnimation() {
  return (
    <div className="absolute -bottom-5 -right-12">
      {/* Círculo grande */}
      <div className="relative w-56 h-56 rounded-full border border-white/30 flex items-center justify-center">

        {/* Círculo mediano */}
        <div className="relative w-45 h-45 rounded-full border border-white/60 flex items-center justify-center">
          {/* Círculo pequeño */}
          <div className="relative w-30 h-30 rounded-full border border-white/60">
            {/* Contenedor que rota para los puntos */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Punto 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-600 rounded-full shadow-md" />
              {/* Punto 2 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-lime-500 rounded-full shadow-md" />
            </div>
          </div>

          {/* Nuevo círculo extra */}
      
        </div>
      </div>

      {/* Estilos embebidos */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
