'use client'

import * as React from "react"

import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import SliderNav from './SliderNav';
import { FaCode } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";


const Navbar = () => {
  return (
    <>

 <header className=" mt-10 mx-28  flex items-stretch rounded-xl border-zinc-500 border-t border-l border-r overflow-hidden h-20 shadow-lg shadow-zinc-900" >
  {/* Botón menú */}
  <div className="bg-[#32323b] cursor-pointer px-5 flex items-center justify-center">
    <SidebarTrigger className="">
    </SidebarTrigger>
  </div>
  <div className=' bg-[#272730] flex items-center'>
    <FaCode className='text-4xl text-lime-400 ml-4'/>
    <p className='text-white ml-2 text-xl font-thin'>DGMLX</p>
  </div> 

  {/* Navbar */}  
  <nav className="flex-1 text-gray-400 bg-[#272730] flex items-center justify-center gap-7 text-lg">
    <Link href={"/#"} className=" text-white transition-all duration-400">Sobre mi</Link>
    <Link href={"/#trayectoria"} className="hover:text-white transition-all duration-400">Trayectoria</Link>
    <Link href={"/#servicios"} className="hover:text-white transition-all duration-400">Servicios</Link>
    <Link href={"/#proyectos"} className="hover:text-white transition-all duration-400">Proyectos realizados</Link>
    <Link href={"/#contacto"} className="hover:text-white transition-all duration-400">Contacto</Link>
  </nav>



  {/* Redes sociales */}
  <div className="text-white flex gap-3 pr-5 bg-[#272730] items-center">
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
  <div className="flex items-center   bg-[#272730] pr-2">

    <ModeToggle/>
  </div>
</header>
</>
  )
}


export default Navbar