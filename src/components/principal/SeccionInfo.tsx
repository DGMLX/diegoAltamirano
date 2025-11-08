import React from 'react'
import { FaCode, FaGithubAlt, FaRegCheckCircle } from 'react-icons/fa'
import { IoMdTimer } from 'react-icons/io'

const SeccionInfo = () => {
  return (
    <section className="bg-[#272730] mb-10 px-14 py-20 bg-center bg-cover flex justify-around text-white border rounded-xl border-zinc-600 "    style={{
    backgroundImage: `
      repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
    `,
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
  }}>
        <div>
          <IoMdTimer className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+250</p>
          <p className="">Horas de práctica</p>
        </div>
        <div>
          <FaRegCheckCircle  className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+10</p>
          <p>Proyectos realizados</p>
        </div>
        <div>
          <FaCode className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+1000</p>
          <p>Líneas de código</p>
        </div>
        <div>
          <FaGithubAlt className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+25</p>
          <p>Repositorios en GitHub</p>
        </div>
      </section>
  )
}

export default SeccionInfo