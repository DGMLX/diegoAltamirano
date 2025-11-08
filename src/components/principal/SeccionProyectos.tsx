import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaLaptopCode, FaRegEye } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { Button } from '../ui/button'


const SeccionProyectos = () => {
  return (
    <>
        <section className="bg-[#272730] mb-10 px-14 py-10 bg-center bg-cover  text-white border rounded-xl border-zinc-600 "    style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
            `,
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
        }}>
            <h3 className="text-lime-500 text-lg font-medium text-center flex items-center"><FaLaptopCode className="mr-2 text-lg text-lime-500"/>Proyecto Acutal</h3>
            <h2 className="text-white text-4xl font-medium m-2">Lexify AI</h2>
            <div className="border-2 border-zinc-700 mt-7 p-5 flex ">
                <Image src="/trabajo-reciente/lexifyHome.png" width={600} height={600} alt="LexifyHome" className='hover:scale-105 transition-all duration-500'/>
                
                <div className="ml-10 flex-col flex justify-between">
                <h2>Lexify AI</h2>
                <p className=" text-zinc-400 text-md">LexifyAI es una aplicación web impulsada por inteligencia artificial diseñada para transformar la forma en que las personas aprenden idiomas. Combina traducción contextual y conversaciones interactivas.</p>
                <div className="flex gap-4 ">
                    <Image src={"/tech/logo-nextjs.jpg"} alt="logo nextjs" className="rounded-full" width={30} height={30}/>
                    <Image src={"/tech/tailwind.png"} alt="logo tailwind" width={30} height={30}/>
                    <Image src={"/tech/Typescript.png"} alt="logo typescript" width={30} height={30}/>
                    <Image src={"/tech/Postgresql.png"} alt="logo postgresql" width={30} height={30}/>
                    <Image src={"/tech/prisma.png"} alt="logo prisma" width={30} height={30}/>
                    <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={30} height={30}/>
                    <Image src={"/tech/shadcn_logo.png"} alt="logo shadcn" className="rounded-full" width={30} height={30}/>
                    <Image src={"/tech/openai.png"} alt="logo openai" className="rounded-full" width={30} height={30}/>
                    <Image src={"/tech/langchain-color.png"} alt="logo langcahin" className="bg-white rounded-full" width={30} height={30}/>
                </div>
                <div className="flex gap-10">
                    <button className="flex items-center cursor-pointer bg-white text-black py-1 px-2 rounded-full hover:bg-zinc-300 text-sm"><BsArrowUpRight className="mr-2"/>Ver Demo</button>
                </div>
                </div>
            </div>

        </section>

        <h3 className="text-center text-4xl text-white mt-20 flex justify-center items-center"><GrProjects className="text-lime-500 text-3xl mr-3"/>Proyectos realizados</h3>
        <p className="text-center text-lime-500 mt-2">Recientemente</p>
        <section className="mb-20 flex justify-between mt-18"  style={{
        WebkitMaskImage:
        'linear-gradient(to right, black 80%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
    }}>
        <div className="flex justify-center items-stretch">
            <div className="bg-[#272730] pt-4 pb-5 w-1/3 rounded-xl border border-zinc-600 px-4 flex flex-col h-full">
                <div className='overflow-hidden'>
                    <Image src="/proyectos/nutrihome.png" width={600} height={600} alt="nutricion homepage" className="rounded-lg hover:scale-110 transition-all duration-300" />
                </div>
                <p className="text-center mt-4 text-lime-500">Última actualización - Octubre 2025</p>
                <h4 className="text-xl text-center text-white mt-2 font-bold">Servicios de nutrición.</h4>
                <p className="text-center my-8 text-zinc-400 flex-grow">
                Proyecto construido con Next.js, enfocado en ofrecer una interfaz moderna para servicios de nutrición. Integra inteligencia artificial mediante un chatbot especializado y un sistema de autenticación que permite generar planes personalizados según los requerimientos del usuario.
                </p>
                <Button asChild>
                    <Link href={"https://proyecto-nutricion-ia.vercel.app/"} target="_blank" className="mt-auto py-2 rounded-xl  w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer">
                    <FaRegEye className="mr-3 text-xl"/>Visitar proyecto
                    </Link>
                </Button>
            </div>

            <div className="bg-[#272730] pt-4 pb-5 w-1/3 mx-5 rounded-xl border border-zinc-600 px-4 flex flex-col h-full over">
                <div className='overflow-hidden'>
                    <Image src="/proyectos/adminhome.png" width={600} height={600} alt="admin homepage" className=" rounded-lg hover:scale-110 transition-all duration-300" />
                </div>
                <p className="text-center mt-4 text-lime-500">Última actualización - Agosto 2025</p>
                <h4 className="text-xl text-center text-white mt-2 font-bold">Administración de comunidades</h4>
                <p className="text-center my-8 text-zinc-400 flex-grow">
                Proyecto construido con Next.js, centrado en la creación de una interfaz adaptable para la administración de comunidades. Implementa principios de diseño limpio, componentes reutilizables y optimización en rendimiento.
                </p>
                <Button asChild>
                    <Link href={"https://admin-comunity.vercel.app/"} target="_blank" className="mt-auto py-2 rounded-xl w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer">
                    <FaRegEye className="mr-3 text-xl"/>Visitar proyecto
                    </Link>
                </Button>
            </div>

            <div className="bg-[#272730] pt-4 pb-5 w-1/3 rounded-xl border border-zinc-600 px-4 flex flex-col h-full">
                <div className='overflow-hidden'>
                    <Image src="/proyectos/shadcn-nextjs.png" width={600} height={600} alt="shadcn nextjs homepage" className="rounded-lg hover:scale-110 transition-all duration-300" />
                </div>
                <p className="text-center mt-4 text-lime-500">Última actualización - Julio 2025</p>
                <h4 className="text-xl text-center text-white mt-2 font-bold">Interfaz Shadcn.</h4>
                <p className="text-center my-8 text-zinc-400 flex-grow">
                Proyecto enfocado en comprender la arquitectura y personalización de Shadcn/UI. Implementé diferentes componentes y estilos para familiarizarme con su integración en entornos modernos de Next.js.
                </p>
                <Button asChild>
                    <Link href={"https://nextjs-shadcn-black.vercel.app/"} target="_blank" className="mt-auto py-2 rounded-xl w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer">
                    <FaRegEye className="mr-3 text-xl"/>Visitar proyecto
                    </Link>
                </Button>
            </div>
            </div>

      
      </section>
      </>
  )
}

export default SeccionProyectos