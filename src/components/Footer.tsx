import Link from 'next/link'
import React from 'react'
import { FaCode, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { SiGmail } from 'react-icons/si'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations("Navbar")

  return (
    <footer className="pb-10 px-5">
      <hr className="mb-5 border-gray-700" />

      {/* Logo */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <FaCode className="text-4xl text-lime-400" />
        <p className=" text-2xl font-thin">DGMLX</p>
      </div>

      {/* Redes sociales */}
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
        <Link href="https://github.com/DGMLX" target="_blank">
          <FaGithub className="text-2xl cursor-pointer hover:text-lime-400 transition-all duration-300" />
        </Link>

        <Link href="https://www.linkedin.com/in/diego-altamirano-gallardo-72a7a2203/" target="_blank">
          <FaLinkedinIn className="text-2xl cursor-pointer hover:text-lime-400 transition-all duration-300" />
        </Link>

        <Tooltip>
          <TooltipTrigger>
            <SiGmail className="text-2xl hover:text-lime-400 transition-all duration-300 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p>diegoaltdev@gmail.com</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <FaWhatsapp className="text-2xl hover:text-lime-400 transition-all duration-300 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p>+569 54714609</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Navegación */}
      <nav className=" hidden md:flex flex-wrap justify-center items-center text-gray-400 mt-6 text-sm gap-4 sm:gap-6 md:gap-8">
        <Link href="/#sobreMi" className="hover:text-white transition-all duration-300">{t("sobreMi")}</Link>
        <Link href="/#trayectoria" className="hover:text-white transition-all duration-300">{t("trayectoria")}</Link>
        <Link href="/#servicios" className="hover:text-white transition-all duration-300">{t("servicios")}</Link>
        <Link href="/#proyectos" className="hover:text-white transition-all duration-300">{t("proyectosRealizados")}</Link>
        <Link href="/#contacto" className="hover:text-white transition-all duration-300">{t("contacto")}</Link>
      </nav>

      {/* Créditos */}
      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} DGMLX 
      </p>
    </footer>
  )
}

export default Footer
