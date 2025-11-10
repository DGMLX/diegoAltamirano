import { useTranslations } from 'next-intl'
import React from 'react'
import { FaWpforms } from 'react-icons/fa'
import { PiStudent } from 'react-icons/pi'

const SeccionTrayectoria = () => {
  const t = useTranslations("Trayectoria")
  return (
    <section className="mb-10 flex flex-col md:flex-row gap-5">

      {/* EDUCACIÓN */}
      <div
        className="bg-[#272730] pt-10 pb-10 rounded-xl border border-zinc-600 px-8 sm:px-10 md:px-14 w-full md:w-1/2"
        
      >
        <h3 className="text-white text-3xl sm:text-4xl font-medium text-center flex items-center justify-center">
          <PiStudent className="mr-2 text-3xl sm:text-4xl text-lime-500" />
          {t("Educacion.titulo")}
        </h3>

        <div className="border-l border-slate-500 pl-5 mt-10">
          <div className="flex">
            <p className="text-slate-400">2023-2025:</p>
            <div className="ml-2">
              <p className="text-lime-500">{t("Educacion.curso5.lugar")}</p>
              <p className="text-white">{t("Educacion.curso5.titulo")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2023-2024:</p>
            <div className="ml-2">
              <p className="text-lime-500">{t("Educacion.curso4.lugar")}</p>
              <p className="text-white">{t("Educacion.curso4.titulo")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2022-2023:</p>
            <div className="ml-2">
              <p className="text-lime-500">{t("Educacion.curso3.lugar")}</p>
              <p className="text-white">{t("Educacion.curso3.titulo")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2021-2022:</p>
            <div className="ml-2">
              <p className="text-lime-500">{t("Educacion.curso2.lugar")}</p>
              <p className="text-white">{t("Educacion.curso2.titulo")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2021-2022:</p>
            <div className="ml-2">
              <p className="text-lime-500">{t("Educacion.curso1.lugar")}</p>
              <p className="text-white">{t("Educacion.curso1.titulo")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCIA */}
      <div
        className="bg-[#272730] pt-10 pb-10 rounded-xl border border-zinc-600 px-8 sm:px-10 md:px-14 w-full md:w-1/2"
        
      >
        <h3 className="text-white text-3xl sm:text-4xl font-medium text-center flex items-center justify-center">
          <FaWpforms className="mr-2 text-3xl sm:text-4xl text-lime-500" />
          {t("Experiencia.titulo")}
        </h3>

        <div className="border-l border-slate-500 pl-5 mt-10">
          <div className="flex">
            <p className="text-slate-400">2024-2025:</p>
            <div className="ml-2">
              <p className="text-lime-500">EcoAlliance</p>
              <p className="text-white">{t("Experiencia.titulo3")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2023-2023:</p>
            <div className="ml-2">
              <p className="text-lime-500">Aridos Quinta región</p>
              <p className="text-white">{t("Experiencia.titulo2")}</p>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="text-slate-400">2022-2022:</p>
            <div className="ml-2">
              <p className="text-lime-500">Izajes y transportes G&G</p>
              <p className="text-white">{t("Experiencia.titulo1")}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SeccionTrayectoria
