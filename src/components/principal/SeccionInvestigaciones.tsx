import Image from 'next/image'
import React from 'react'
import CircleAnimation from '../CircleAnimated'
import { LuBrain } from 'react-icons/lu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTranslations } from 'next-intl'

const SeccionInvestigaciones = () => {
  const t = useTranslations('Investigaciones');
  return (
    <section className="flex flex-col lg:flex-row gap-5">
      {/* === Texto e íconos === */}
      <div
        className="relative bg-[#272730] mb-10 px-8 sm:px-10 md:px-14 pt-10 pb-5 w-full lg:w-3/5 rounded-xl border border-zinc-600"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 0%, black 0%)",
      
        }}
      >
        <h3 className="text-lime-500 mb-10 flex items-center">
          <LuBrain className="mr-2 text-xl" />
          {t("titulo")}
        </h3>

        <div className="text-white space-y-4">
          <p><span className="text-pink-600 font-bold">{'>'}</span> {t("item1")}</p>
          <p><span className="text-pink-600 font-bold">{'>'}</span> {t("item2")}</p>
          <p><span className="text-pink-600 font-bold">{'>'}</span> {t("item3")}</p>
          <p><span className="text-pink-600 font-bold">{'>'}</span> {t("item4")}</p>
          <p><span className="text-pink-600 font-bold">{'>'}</span> {t("item5")}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-7 pb-5">
          <Tooltip>
            <TooltipTrigger>
              <Image src={"/tech/openai.png"} alt="logo openai" className="rounded-full" width={60} height={60} />
            </TooltipTrigger>
            <TooltipContent>
              <p>OpenAI</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={60} height={60} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Vercel</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image src={"/tech/langchain-color.png"} alt="logo langchain" className="bg-white rounded-full" width={60} height={60} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Langchain</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image src={"/tech/N8N.png"} alt="logo n8n" className="rounded-full" width={60} height={60} />
            </TooltipTrigger>
            <TooltipContent>
              <p>N8N</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <CircleAnimation />
      </div>

      {/* === Imagen del robot === */}
      <div
        className="bg-[#272730] hidden lg:flex mb-10 px-8 sm:px-10 md:px-14 pt-10 pb-5 w-full lg:w-2/5 rounded-xl border border-zinc-600  justify-center items-center"
      
      >
        <Image
          src={"/robot.svg"}
          alt="robot ia"
          width={400}
          height={400}
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto"
        />
      </div>
    </section>
  )
}

export default SeccionInvestigaciones
