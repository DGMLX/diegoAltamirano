import Image from 'next/image'
import React from 'react'
import CircleAnimation from '../CircleAnimated'
import { LuBrain } from 'react-icons/lu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SeccionInvestigaciones = () => {
  return (
    
          <section className="flex gap-5">
    
              <div className="relative bg-[#272730] mb-10 px-14 pt-10 pb-5  w-3/5 rounded-xl border border-zinc-600" 
                style={{
              
                WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
              }}>
                <h3 className="text-lime-500 mb-10 flex items-center"><LuBrain className="mr-2 text-xl" /> Últimas investigaciones:</h3>
                <p className="text-white"><span className="text-pink-600 font-bold">{'>'}</span> Investigación sobre sistemas RAG {'(Retrieval-Augmented Generation)'}.</p>
                <p className="text-white mt-4"><span className="text-pink-600 font-bold">{'>'}</span> Inversión de tokens OpenAI para integración de proveedor y utlización de modelos.</p>
                <p className="text-white mt-4"><span className="text-pink-600 font-bold">{'>'}</span> Investigación y acercamiento a N8N.</p>
                <p className="text-white mt-4"><span className="text-pink-600 font-bold">{'>'}</span> Investigación de LangChain.</p>
                <p className="text-white mt-4"><span className="text-pink-600 font-bold">{'>'}</span> Investigación e integración de IA SDK Vercel con Next.js</p>
                <div className="mt-10 flex justify-center gap-7 pb-5">
                  <Tooltip>
                    <TooltipTrigger>
                      <Image src={"/tech/openai.png"} alt="logo openai" className="rounded-full" width={60} height={60}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>OpenAI</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={60} height={60}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vercel</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image src={"/tech/langchain-color.png"} alt="logo langcahin" className="bg-white rounded-full" width={60} height={60}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Langchain</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image src={"/tech/N8N.png"} alt="logo n8n" className=" rounded-full" width={60} height={60}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>N8N</p>
                    </TooltipContent>
                  </Tooltip>
                 
                  
                  
                  
                  
                </div>
                <CircleAnimation/>
              </div>
    
              <div style={{
    
            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
          }}
            className=" bg-[#272730] mb-10 px-14 pt-10 pb-5 w-2/5 rounded-xl border border-zinc-600"
          >
            <Image src={"/robot.svg"} alt="robot ia" width={400} height={400}/>
          </div>
        
         
          
        </section>
  )
}

export default SeccionInvestigaciones