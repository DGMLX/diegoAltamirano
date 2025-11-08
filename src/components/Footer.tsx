import Link from 'next/link'
import React from 'react'
import { FaCode, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { SiGmail } from 'react-icons/si'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations("Navbar")
  return (
    <footer className='pb-10'>
        <hr className='mb-5'/>
        <div className=' flex items-center justify-center gap-x-2'>
            <FaCode className='text-4xl text-lime-400'/>
            <p className='text-white text-2xl font-thin'>DGMLX</p>
        </div> 
        <div className='flex gap-x-5 justify-center items-center mt-5'>
            <Link href={"https://github.com/DGMLX"} target='_blank'><FaGithub className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/></Link>
            <Link href={"https://www.linkedin.com/in/diego-altamirano-gallardo-72a7a2203/"} target='_blank'><FaLinkedinIn className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/></Link>
            <Tooltip>
            <TooltipTrigger>   <SiGmail className="text-xl hover:text-lime-400 transition-all duration-400"/></TooltipTrigger>
            <TooltipContent>
                <p>diegoaltdev@gmail.com</p>
            </TooltipContent>
            </Tooltip>

            
            <Tooltip>
            <TooltipTrigger> <FaWhatsapp className="text-xl hover:text-lime-400 transition-all duration-400"/></TooltipTrigger>
            <TooltipContent>
                <p>+569 54714609</p>
            </TooltipContent>
            </Tooltip>
        </div>

         <nav className="flex-1 text-gray-400 mt-5 text-sm flex items-center justify-center gap-5 ">
            <Link href={"/#sobreMi"} className=" hover:text-white transition-all duration-400">{t("sobreMi")}</Link>
            <Link href={"/#trayectoria"} className="hover:text-white transition-all duration-400">{t("trayectoria")}</Link>
            <Link href={"/#servicios"} className="hover:text-white transition-all duration-400">{t("servicios")}</Link>
            <Link href={"/#proyectos"} className="hover:text-white transition-all duration-400">{t("proyectosRealizados")}</Link>
            <Link href={"/#contacto"} className="hover:text-white transition-all duration-400">{t("contacto")}</Link>
        </nav>
        
    </footer>
  )
}

export default Footer