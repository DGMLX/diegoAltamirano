import React from 'react'
import { FaWpforms } from 'react-icons/fa'
import { PiStudent } from 'react-icons/pi'

const SeccionTrayectoria = () => {
  return (
     <section className="mb-10 flex gap-5">


        <div className="bg-[#272730] pt-10 pb-10 w-1/2 rounded-xl border border-zinc-600 px-14" style={{
          
          WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}>
          
          <h3 className="text-white text-4xl font-medium text-center flex items-center"><PiStudent className="mr-2 text-4xl text-lime-500"/> Educación</h3>

           <div className="border-l border-slate-500 pl-5 mt-10">
              <div className="flex">
                <p className="text-slate-400">2023-2025:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Instituto Duoc UC</p>
                  <p className="text-white">Técnico Analista programador</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2023-2024:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso Framework Next JS</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2022-2023:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso React JS</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2021-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso Javascript Moderno</p>
                </div>
              </div>

                <div className="flex mt-5">
                <p className="text-slate-400">2021-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Instituto Duoc UC</p>
                  <p className="text-white">Diplomado en desarrollo web</p>
                </div>
              </div>
            
           </div>
        </div>


            <div className="bg-[#272730] pt-10 pb-10 w-1/2 rounded-xl border border-zinc-600 px-14" style={{

        WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
      }}>
           <h3 className="text-white text-4xl font-medium text-center flex items-center"><FaWpforms className="mr-2 text-4xl text-lime-500"/> Experiencia</h3>
            <div className="border-l border-slate-500 pl-5 mt-10">
              <div className="flex">
                <p className="text-slate-400">2024-2025:</p>
                <div className="ml-2">
                  <p className="text-lime-500">EcoAlliance</p>
                  <p className="text-white">Práctica profesional Analista programador</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2023-2023:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Aridos Quinta región</p>
                  <p className="text-white">Desarrollo de sitio web</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2022-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Izajes y transportes G&G</p>
                  <p className="text-white">Desarrollo de sitio web</p>
                </div>
              </div>
           </div>
        </div>
      </section>
  )
}

export default SeccionTrayectoria