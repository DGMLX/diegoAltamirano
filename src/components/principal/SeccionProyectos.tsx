'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrProjects } from "react-icons/gr";
import { FaChevronLeft, FaChevronRight, FaRegEye } from "react-icons/fa";
import { useRef } from "react";
import 'swiper/css';
import type { Swiper as SwiperType } from "swiper";

const SeccionProyectos = () => {
  const t = useTranslations("ProyectoActual")
  const x = useTranslations("ProyectosRealizados")
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      {/* PROYECTO ACTUAL */}
      <section
        className="bg-primary-foreground mb-10 px-6 sm:px-10 lg:px-14 py-10 bg-center bg-cover  border rounded-xl border-zinc-600"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
          `
        }}
      >
        <h3 className="text-lime-600 text-lg font-medium text-center flex justify-center items-center">
          <FaLaptopCode className="mr-2 text-lg text-lime-600" />
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
            <p className="text-primary text-md text-center lg:text-left mb-6">{t("descripcion")}</p>

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

            <Button className="flex justify-center lg:justify-start" asChild>
              <Link
                href="https://lexify-ia.vercel.app/"
                target="_blank"
                className="flex items-center cursor-pointer py-1 px-3 rounded-full w-full md:w-min  text-sm"
              >
                <BsArrowUpRight className="mr-2" />
                {t("boton")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROYECTOS REALIZADOS */}
      <h3 className="text-center text-3xl sm:text-4xl mt-20 flex justify-center items-center">
        <GrProjects className="text-lime-600 text-3xl mr-3" />
        {x("titulo")}
      </h3>

      <p className="text-center text-lime-600 mt-2">{x("subtitulo")}</p>

      {/* Contenedor con flechas e indicador */}
      <div className="relative mt-10 mb-20">

        {/* Flecha izquierda (solo móvil/tablet) */}
        <FaChevronLeft onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 text-lime-500 text-3xl  animate-pulse" />

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="cursor-grab"
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
              img: "/proyectos/img-ecoalliance.png",
              alt: "ecoalliance homepage",
              link: "https://landing-eax.vercel.app/eliet",
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
            {
              img: "/proyectos/img-gyg.png",
              alt: "gyg homepage",
              link: "https://arriendodecamionesplumagyg.cl/",
              fecha: x("Proyectos.proyecto4.fecha"),
              titulo: x("Proyectos.proyecto4.titulo"),
              descripcion: x("Proyectos.proyecto4.descripcion"),
              boton: x("Proyectos.proyecto4.boton"),
            },
            {
              img: "/proyectos/proyecto-aridos.png",
              alt: "aridos homepage",
              link: "https://www.aridosquintaregion.cl/",
              fecha: x("Proyectos.proyecto5.fecha"),
              titulo: x("Proyectos.proyecto5.titulo"),
              descripcion: x("Proyectos.proyecto5.descripcion"),
              boton: x("Proyectos.proyecto5.boton"),
            },
            {
              img: "/proyectos/teslo.png",
              alt: "teslo homepage",
              link: "",
              fecha: x("Proyectos.proyecto6.fecha"),
              titulo: x("Proyectos.proyecto6.titulo"),
              descripcion: x("Proyectos.proyecto6.descripcion"),
              boton: x("Proyectos.proyecto6.boton"),
            },
            {
              img: "/proyectos/adminhome.png",
              alt: "admin homepage",
              link: "https://admin-comunity.vercel.app/",
              fecha: x("Proyectos.proyecto7.fecha"),
              titulo: x("Proyectos.proyecto7.titulo"),
              descripcion: x("Proyectos.proyecto7.descripcion"),
              boton: x("Proyectos.proyecto7.boton"),
            },
            {
              img: "/proyectos/mecanica-template.png",
              alt: "mecanica template homepage",
              link: "",
              fecha: x("Proyectos.proyecto8.fecha"),
              titulo: x("Proyectos.proyecto8.titulo"),
              descripcion: x("Proyectos.proyecto8.descripcion"),
              boton: x("Proyectos.proyecto8.boton"),
            },
            {
              img: "/proyectos/basket-template.png",
              alt: "basket template homepage",
              link: "https://basket-tawny.vercel.app/",
              fecha: x("Proyectos.proyecto9.fecha"),
              titulo: x("Proyectos.proyecto9.titulo"),
              descripcion: x("Proyectos.proyecto9.descripcion"),
              boton: x("Proyectos.proyecto9.boton"),
            },
            {
              img: "/proyectos/admin-gastos.png",
              alt: "admin gastos homepage",
              link: "https://dgmlx.github.io/administrador-gastos/",
              fecha: x("Proyectos.proyecto10.fecha"),
              titulo: x("Proyectos.proyecto10.titulo"),
              descripcion: x("Proyectos.proyecto10.descripcion"),
              boton: x("Proyectos.proyecto10.boton"),
            },
            {
              img: "/proyectos/crypto.png",
              alt: "crypto homepage",
              link: "https://dgmlx.github.io/cryptoProyect/",
              fecha: x("Proyectos.proyecto11.fecha"),
              titulo: x("Proyectos.proyecto11.titulo"),
              descripcion: x("Proyectos.proyecto11.descripcion"),
              boton: x("Proyectos.proyecto11.boton"),
            },
            {
              img: "/proyectos/buscador_autos.png",
              alt: "buscador autos homepage",
              link: "https://dgmlx.github.io/buscador-autos/",
              fecha: x("Proyectos.proyecto12.fecha"),
              titulo: x("Proyectos.proyecto12.titulo"),
              descripcion: x("Proyectos.proyecto12.descripcion"),
              boton: x("Proyectos.proyecto12.boton"),
            },
            {
              img: "/proyectos/interminable.png",
              alt: "interminable homepage",
              link: "https://dgmlx.github.io/Proyecto-uno-curso-hojas-de-estilos/",
              fecha: x("Proyectos.proyecto13.fecha"),
              titulo: x("Proyectos.proyecto13.titulo"),
              descripcion: x("Proyectos.proyecto13.descripcion"),
              boton: x("Proyectos.proyecto13.boton"),
            },
            {
              img: "/proyectos/rufus.png",
              alt: "rufus homepage",
              link: "https://dgmlx.github.io/proyecto-rufus/",
              fecha: x("Proyectos.proyecto14.fecha"),
              titulo: x("Proyectos.proyecto14.titulo"),
              descripcion: x("Proyectos.proyecto14.descripcion"),
              boton: x("Proyectos.proyecto14.boton"),
            },
            {
              img: "/proyectos/carrito.png",
              alt: "carrito homepage",
              link: "https://dgmlx.github.io/curso-carrito/",
              fecha: x("Proyectos.proyecto15.fecha"),
              titulo: x("Proyectos.proyecto15.titulo"),
              descripcion: x("Proyectos.proyecto15.descripcion"),
              boton: x("Proyectos.proyecto15.boton"),
            },
          ].map((proyecto, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="
      bg-primary-foreground 
      rounded-xl 
      border border-zinc-600 
      p-4 
      flex flex-col 
      h-full 
      min-h-[600px]   
    "
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

                <h4 className="text-xl text-center mt-2 font-bold">
                  {proyecto.titulo}
                </h4>

                <p className="text-center my-6 text-primary flex-grow">
                  {proyecto.descripcion}
                </p>

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
            </SwiperSlide>

          ))}
        </Swiper >

        {/* Flecha derecha */}
        < FaChevronRight onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 text-lime-500 text-3xl  animate-pulse" />

      </div >

    </>
  )
}

export default SeccionProyectos 
