import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { FaCode, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { SiGmail } from "react-icons/si"
import { useTranslations } from "next-intl"
 
export function AppSidebar() {
  const t = useTranslations("Sidebar")
  const x = useTranslations("Navbar")
  return (
    <Sidebar>
      <SidebarHeader className="hidden md:block">
        <h3 className="mt-5 text-2xl px-5">{t("titulo")}</h3>
        <hr className=" bg-lime-500"/>
      </SidebarHeader>
      <SidebarContent className="px-5 hidden md:block">
        <p className=" mt-10 ">{t("descripcion")}</p>
        <div className="mt-10">

          <h4 className="text-zinc-400 text-xl">{t("numeroContacto")}</h4>
          <p className="text-gray-600 text-lg">+569 54714609</p>

          <h4 className="text-zinc-400 text-xl mt-4">Email</h4>
          <p className="text-gray-600 text-lg">diegoaltdev@gmail.com</p>

          <h4 className="text-zinc-400 text-xl mt-4">{t("ubicacion")}</h4>
          <p className="text-gray-600 text-lg">Chile - Viña del mar</p>

          <h4 className="text-zinc-400 text-xl mt-4">{t("redes")}</h4>
          <div className="flex  gap-5 mt-2">

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
        </div>
      </SidebarContent>
      <SidebarFooter className="hidden md:block">
        <p className="text-gray-600 text-center pb-5">DGMLX - 2025</p>
      </SidebarFooter>



      <SidebarHeader className="block md:hidden">
        <div className="flex items-center justify-center my-5">

          <FaCode className='text-4xl text-lime-400'/>
          <p className="text-xl ml-4">DGMLX</p>
        </div>
        <hr/>
      </SidebarHeader>
      <SidebarContent className="px-5 flex flex-col md:hidden mt-10">      
         <Link href={"/#"} className="hover:translate-x-3   transition-all duration-400">{x("sobreMi")}</Link>
         <hr />
          <Link href={"/#trayectoria"} className="hover:translate-x-3 transition-all duration-400">{x("trayectoria")}</Link>
          <hr />
          <Link href={"/#servicios"} className="hover:translate-x-3  transition-all duration-400">{x("servicios")}</Link>
          <hr />
          <Link href={"/#proyectos"} className="hover:translate-x-3  transition-all duration-400">{x("proyectosRealizados")}</Link>
          <hr />
          <Link href={"/#contacto"} className="hover:translate-x-3 transition-all duration-400">{x("contacto")}</Link>
      </SidebarContent>
      <SidebarFooter className="block md:hidden">
        <div className=" flex justify-center mb-10 gap-3 pr-5  items-center">
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
      </SidebarFooter>
    </Sidebar>
  )
}