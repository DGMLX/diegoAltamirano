
import Link from 'next/link';
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import SliderNav from './SliderNav';
import { FaCode } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
<SliderNav/>
 <header className="mt-10 mx-28  flex items-stretch rounded-xl border-zinc-500 border-t border-l border-r overflow-hidden h-20 shadow-lg shadow-zinc-900" >
  {/* Botón menú */}
  <div className="bg-[#32323b] cursor-pointer px-5 flex items-center justify-center">
    <IoIosMenu className="text-5xl text-white" />
  </div>
  <div className=' bg-[#272730] flex items-center'>
    <FaCode className='text-4xl text-lime-400 ml-4'/>
    <p className='text-white ml-2 text-xl font-thin'>DGMLX</p>
  </div>

  {/* Navbar */}
  <nav className="flex-1 text-gray-400 bg-[#272730] flex items-center justify-center gap-7 text-lg">
    <Link href={"/#"} className=" text-white transition-all duration-400">Sobre mi</Link>
    <Link href={"/#"} className="hover:text-white transition-all duration-400">Trayectoria</Link>
    <Link href={"/#"} className="hover:text-white transition-all duration-400">Servicios</Link>
    <Link href={"/#"} className="hover:text-white transition-all duration-400">Proyectos realizados</Link>
    <Link href={"/#"} className="hover:text-white transition-all duration-400">Contacto</Link>
  </nav>

  {/* Redes sociales */}
  <div className="text-white flex gap-3 pr-5 bg-[#272730] items-center">
    <FaGithub className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/>
    <FaLinkedinIn className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/>
    <SiGmail className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/>
    <FaWhatsapp className="text-xl cursor-pointer hover:text-lime-400 transition-all duration-400"/>
  </div>
</header>
</>
  )
}


export default Navbar