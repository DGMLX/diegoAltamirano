import Image from 'next/image'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SeccionSobreMi = () => {
  return (
      <section className=" flex justify-between items-center border border-zinc-600 rounded-xl bg-[#272730]   mb-10 "  style={{
      
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
      }} >
    
            <Image src={"/developer.svg"} alt="developer-img" width={600} height={600}/>
            <div className="px-16">
    
              <div className="flex items-center">
                <span className="text-pink-400 text-xl">{'<'}span{'>'}</span>
                <p className="text-white text-xl">Hola, soy Diego Altamirano<span className="animate-blink text-pink-400">|</span></p>
                <span className="text-pink-400 text-xl">{'</'}span{'>'}</span>
              </div>
              <h1 className="text-5xl mt-5 text-white font-medium">Desarrollador de software <span className="text-5xl font-medium text-lime-400">{'{Full Stack}'}</span></h1>
              <p className="text-white mt-5"> <span className="text-pink-400 text-xl">{'<'}p{'>'}</span>Con conocimientos en tecnologías modernas como Next.js, Tailwind, React, SQL, Vercel y más. Ofrezco soluciones web que son tanto innovadoras como modernas.<span className="text-pink-400 text-xl">{'</'}p{'>'}</span></p>
              <div className="mt-5 flex gap-4">
                   
                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/logo-nextjs.jpg"} alt="logo nextjs" className="rounded-full" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>NextJS</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/React.png"} alt="logo react" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>React</p>
                    </TooltipContent>
                </Tooltip>

                 <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/tailwind.png"} alt="logo tailwind" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Tailwind CSS</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/Typescript.png"} alt="logo typescript" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Typescript</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/CSS3.png"} alt="logo css" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>CSS3</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/shadcn_logo.png"} alt="logo shadcn" className="rounded-full" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Shadcn</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/Git.png"} alt="logo git" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Git</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/Postgresql.png"} alt="logo postgresql" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>PostgreSQL</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/prisma.png"} alt="logo prisma" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Prisma</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={40} height={40}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Vercel</p>
                    </TooltipContent>
                </Tooltip>

                


                    
             
                
                
                
                
            
                
                
                
             
              </div>
            </div>
          </section>
  )
}

export default SeccionSobreMi