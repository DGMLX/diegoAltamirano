import { useTranslations } from 'next-intl';
import React from 'react'
import { FaCode, FaGithubAlt, FaRegCheckCircle } from 'react-icons/fa'
import { IoMdTimer } from 'react-icons/io'

const SeccionInfo = () => {
  const t = useTranslations('Info');
  return (
    <section
      className="bg-[#272730] mb-10 px-10 sm:px-12 md:px-14 py-16 sm:py-20 bg-center bg-cover flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-around items-center text-white border rounded-xl border-zinc-600 gap-10 sm:gap-8"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
        `,
     
      }}
    >
      <div className="flex flex-col items-center text-center">
        <IoMdTimer className="text-lime-500 text-3xl sm:text-4xl" />
        <p className="text-3xl sm:text-4xl font-semibold mt-2">+250</p>
        <p className="text-sm sm:text-base">{t('horasPractica')}</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaRegCheckCircle className="text-lime-500 text-3xl sm:text-4xl" />
        <p className="text-3xl sm:text-4xl font-semibold mt-2">+10</p>
        <p className="text-sm sm:text-base">{t('proyectosRealizados')}</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaCode className="text-lime-500 text-3xl sm:text-4xl" />
        <p className="text-3xl sm:text-4xl font-semibold mt-2">+1000</p>
        <p className="text-sm sm:text-base">{t('lineasCodigo')}</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaGithubAlt className="text-lime-500 text-3xl sm:text-4xl" />
        <p className="text-3xl sm:text-4xl font-semibold mt-2">+25</p>
        <p className="text-sm sm:text-base">{t('repositorios')}</p>
      </div>
    </section>
  )
}

export default SeccionInfo
