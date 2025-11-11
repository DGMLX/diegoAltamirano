import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaLaptopCode, FaRegEye } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const SeccionProyectos = () => {
  const t = useTranslations("ProyectoActual")
  const x = useTranslations("ProyectosRealizados")

  return (
    <>
      {/* PROYECTO ACTUAL */}
      <section
        className="mb-10 px-6 sm:px-10 lg:px-14 py-10 bg-center bg-cover  border rounded-xl border-zinc-600"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
          `
        }}
      >
        <h3 className="text-lime-500 text-lg font-medium text-center flex justify-center items-center">
          <FaLaptopCode className="mr-2 text-lg text-lime-500" />
          {t("titulo")}
        </h3>

        <h2 className=" text-3xl sm:text-4xl font-medium m-2 text-center sm:text-left">
          Lexify AI
        </h2>

        <div className="border-2 border-zinc-700 mt-7 p-5 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="overflow-hidden rounded-lg w-full lg:w-1/2">
            <Image
              src="/trabajo-reciente/lexifyHome.png"
              width={600}
              height={600}
              alt="LexifyHome"
              className="rounded-lg hover:scale-105 transition-all duration-500 w-full"
            />
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-10 flex-col flex justify-between w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center lg:text-left mb-2">Lexify AI</h2>
            <p className="text-zinc-400 text-md text-center lg:text-left mb-6">{t("descripcion")}</p>

            {/* Tecnologías */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              {[
                { src: "/tech/logo-nextjs.jpg", alt: "NextJS" },
                { src: "/tech/tailwind.png", alt: "Tailwind CSS" },
                { src: "/tech/TypeScript.png", alt: "TypeScript" },
                { src: "/tech/Postgresql.png", alt: "PostgreSQL" },
                { src: "/tech/prisma.png", alt: "Prisma" },
                { src: "/tech/vercel.png", alt: "Vercel" },
                { src: "/tech/shadcn_logo.png", alt: "Shadcn" },
                { src: "/tech/openai.png", alt: "OpenAI" },
                { src: "/tech/langchain-color.png", alt: "Langchain", extra: "bg-white rounded-full" },
              ].map((tech, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger>
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      className={`rounded-full ${tech.extra || ''}`}
                      width={40}
                      height={40}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.alt}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://lexify-ia.vercel.app/"
                target="_blank"
                className="flex items-center cursor-pointer bg-white text-black py-1 px-3 rounded-full hover:bg-zinc-300 text-sm"
              >
                <BsArrowUpRight className="mr-2" />
                {t("boton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS REALIZADOS */}
      <h3 className="text-center text-3xl sm:text-4xl mt-20 flex justify-center items-center">
        <GrProjects className="text-lime-500 text-3xl mr-3" />
        {x("titulo")}
      </h3>
      <p className="text-center text-lime-500 mt-2">{x("subtitulo")}</p>

      {/* Sección con alturas iguales */}
      <section
        className="mb-20 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-fr"
      >
        {[
          {
            img: "/proyectos/nutrihome.png",
            alt: "nutricion homepage",
            link: "https://proyecto-nutricion-ia.vercel.app/",
            fecha: x("Proyectos.proyecto1.fecha"),
            titulo: x("Proyectos.proyecto1.titulo"),
            descripcion: x("Proyectos.proyecto1.descripcion"),
            boton: x("Proyectos.proyecto1.boton"),
          },
          {
            img: "/proyectos/adminhome.png",
            alt: "admin homepage",
            link: "https://admin-comunity.vercel.app/",
            fecha: x("Proyectos.proyecto2.fecha"),
            titulo: x("Proyectos.proyecto2.titulo"),
            descripcion: x("Proyectos.proyecto2.descripcion"),
            boton: x("Proyectos.proyecto2.boton"),
          },
          {
            img: "/proyectos/shadcn-nextjs.png",
            alt: "shadcn nextjs homepage",
            link: "https://nextjs-shadcn-black.vercel.app/",
            fecha: x("Proyectos.proyecto3.fecha"),
            titulo: x("Proyectos.proyecto3.titulo"),
            descripcion: x("Proyectos.proyecto3.descripcion"),
            boton: x("Proyectos.proyecto3.boton"),
          },
        ].map((proyecto, i) => (
          <div
            key={i}
            className=" pt-4 pb-5 rounded-xl border border-zinc-600 px-4 flex flex-col h-full"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={proyecto.img}
                width={600}
                height={600}
                alt={proyecto.alt}
                className="rounded-lg hover:scale-110 transition-all duration-300 w-full"
              />
            </div>

            <p className="text-center mt-4 text-lime-500">{proyecto.fecha}</p>
            <h4 className="text-xl text-center  mt-2 font-bold">{proyecto.titulo}</h4>
            <p className="text-center my-6 text-zinc-400 flex-grow">{proyecto.descripcion}</p>

            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link
                  href={proyecto.link}
                  target="_blank"
                  className="py-2 rounded-xl w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer"
                >
                  <FaRegEye className="mr-3 text-xl" />
                  {proyecto.boton}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default SeccionProyectos
