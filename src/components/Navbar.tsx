'use client'

import * as React from "react"

import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import SeleccionIdioma from "./SeleccionIdioma";
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const t = useTranslations('Navbar');
  return (
    <>

 <header className="bg-primary-foreground mt-10  md:mx-14  justify-between flex items-stretch rounded-xl border-zinc-500  overflow-hidden h-20 shadow-lg " >
  {/* Botón menú */}
  <div className=" cursor-pointer px-5 flex items-center justify-center">
    <SidebarTrigger className="">
    </SidebarTrigger>
  </div>
  <div className='  flex items-center'>
    <FaCode className='text-4xl text-lime-600 ml-4'/>
  </div> 

  {/* Navbar */}  
  <nav className="flex-1 text-gray-500   items-center justify-center gap-7 text-lg hidden md:flex">
    <Link href={"/#"} className=" font-bold transition-all duration-400">{t("sobreMi")}</Link>
    <Link href={"/#trayectoria"} className="hover:text-gray-600 transition-all duration-400">{t("trayectoria")}</Link>
    <Link href={"/#servicios"} className="hover:text-gray-600 transition-all duration-400">{t("servicios")}</Link>
    <Link href={"/#proyectos"} className="hover:text-gray-600 transition-all duration-400">{t("proyectosRealizados")}</Link>
    <Link href={"/#contacto"} className="hover:text-gray-600 transition-all duration-400">{t("contacto")}</Link>
  </nav>

    <div className="flex items-center pr-5 ">
      <SeleccionIdioma/>
    </div>



  {/* Redes sociales */}
  <div className=" hidden lg:flex gap-3 pr-5  items-center">
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
  <div className="flex items-center   pr-2">

    <ModeToggle/>
  </div>
</header>
</>
  )
}


export default Navbar