import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgInternal } from 'react-icons/cg'
import { FaDotCircle } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'
import { PiRobotDuotone } from 'react-icons/pi'
import { TbDatabase } from 'react-icons/tb'

const SeccionServicios = () => {
  return (
    <section className="  border border-zinc-600 rounded-xl pb-10 bg-[#272730]   mb-10 "  style={{  
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
  }} >
      <h3 className="text-lime-500 text-center mt-10 flex justify-center items-center text-lg"><FaDotCircle className="mr-2 text-sm"/>Habilidades</h3>
      <h2 className="text-center text-white text-2xl mt-1 mb-10">Conocimientos y tecnologías que aplico en mis proyectos.</h2>
      <div className="flex">
        <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
          <AiOutlineGlobal className="text-2xl text-white mb-4"/>
          <h3 className=" text-white text-xl">Desarrollo de sitios web</h3>
          <p className="text-white mt-4">Creación de interfaces visualmente atractivas y fáciles de usar utilizando HTML, CSS, TailwindCSS y frameworks modernos como <span className="text-pink-400">React y NextJS.</span></p>
        </div>
         <div className="border border-zinc-700 w-1/3 mx-5 rounded-xl p-10 ">
            <MdWeb className="text-white text-2xl mb-4"/>
            <h3 className=" text-white text-xl">Maquetación y responsividad</h3>
            <p className="text-white mt-4">Transformación de diseños en maquetas funcionales y responsivas, cuidando la coherencia visual, el espaciado y la adaptabilidad a <span className="text-pink-400">pantallas móviles, tablet y escritorio.</span></p>
        </div>
         <div className="border border-zinc-700 w-1/3  rounded-xl p-10">
            <TbDatabase className="text-white text-2xl mb-4"/>
            <h3 className="text-white text-xl">ETL Base de datos</h3>
            <p className="text-white mt-4">Desarrollo de consultas y estructuras en <span className="text-pink-400">SQL</span> para almacenar, filtrar y analizar datos.</p>
        </div>
      </div>

       <div className="flex mt-5">
        <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
        <PiRobotDuotone className="text-white text-2xl mb-4"/>
          <h3 className=" text-white text-xl">Integración de IA</h3>
          <p className="text-white mt-4">Integración de soluciones de inteligencia artificial en aplicaciones web, desarrollando <span className="text-pink-400">chatbots</span> con memoria y respuestas en tiempo real mediante streaming.</p>
        </div>
         <div className="border border-zinc-700 w-1/3 mx-5 rounded-xl p-10 ">
         <CgInternal className="text-white text-2xl mb-4"/>
          <h3 className=" text-white text-xl">Cosumo de librerías y APIs</h3>
          <p className="text-white mt-4">Implementación y consumo de <span className="text-pink-400">APIs y librerías</span> externas para integrar funcionalidades avanzadas</p>
        </div>
         <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
         <IoCloudUploadOutline className="text-white text-2xl mb-4"/>
          <h3 className=" text-white text-xl">Despliegue de aplicaciones</h3>
          <p className="text-white mt-4">Despliegue de proyectos web en <span className="text-pink-400">Vercel</span> y gestión de bases de datos mediante <span className="text-pink-400">Vercel Storage.</span></p>
        </div>
        
      </div>
      </section>
  )
}

export default SeccionServicios