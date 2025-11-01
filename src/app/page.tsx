import Image from "next/image";
import { IoMdTimer } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import CircleAnimation from "@/components/CircleAnimated";
import { LuBrain } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbDatabase } from "react-icons/tb";
import { PiRobotDuotone } from "react-icons/pi";
import { CgInternal } from "react-icons/cg";
import { MdWeb } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";


export default function Home() {
  return (
    <main className="mt-10 mx-28  "  >
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
            <Image src={"/tech/logo-nextjs.jpg"} alt="logo nextjs" className="rounded-full" width={40} height={40}/>
            <Image src={"/tech/React.png"} alt="logo react" width={40} height={40}/>
            <Image src={"/tech/tailwind.png"} alt="logo tailwind" width={40} height={40}/>
            <Image src={"/tech/Typescript.png"} alt="logo typescript" width={40} height={40}/>
            <Image src={"/tech/CSS3.png"} alt="logo css" width={40} height={40}/>
            <Image src={"/tech/shadcn_logo.png"} alt="logo shadcn" className="rounded-full" width={40} height={40}/>
            <Image src={"/tech/Git.png"} alt="logo git" width={40} height={40}/>
            <Image src={"/tech/Postgresql.png"} alt="logo postgresql" width={40} height={40}/>
            <Image src={"/tech/prisma.png"} alt="logo prisma" width={40} height={40}/>
            <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={40} height={40}/>
          </div>
        </div>
      </section>


      <section className="bg-[#272730] mb-10 px-14 py-20 bg-center bg-cover flex justify-around text-white border rounded-xl border-zinc-600 "    style={{
    backgroundImage: `
      repeating-linear-gradient(0deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(90deg, #ffffff10, #ffffff10 1px, transparent 1px, transparent 20px)
    `,
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
  }}>
        <div>
          <IoMdTimer className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+250</p>
          <p className="">Horas de práctica</p>
        </div>
        <div>
          <FaRegCheckCircle  className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+10</p>
          <p>Proyectos realizados</p>
        </div>
        <div>
          <FaCode className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+1000</p>
          <p>Líneas de código</p>
        </div>
        <div>
          <FaGithubAlt className="text-lime-500 text-3xl"/>
          <p className="text-center text-4xl">+25</p>
          <p>Repositorios en GitHub</p>
        </div>
      </section>
      
      
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
              <Image src={"/tech/openai.png"} alt="logo openai" className="rounded-full" width={60} height={60}/>
              <Image src={"/tech/vercel.png"} alt="logo vercel" className="rounded-full" width={60} height={60}/>
              <Image src={"/tech/langchain-color.png"} alt="logo langcahin" className="bg-white rounded-full" width={60} height={60}/>
              <Image src={"/tech/N8N.png"} alt="logo n8n" className=" rounded-full" width={60} height={60}/>
              
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

      <section className="mb-10 flex gap-5">


        <div className="bg-[#272730] pt-10 pb-10 w-1/2 rounded-xl border border-zinc-600 px-14" style={{
          
          WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}>
          <h3 className="text-white text-4xl font-medium text-center flex items-center"><PiStudent className="mr-2 text-4xl text-lime-500"/> Educación</h3>

           <div className="border-l border-slate-500 pl-5 mt-10">
              <div className="flex">
                <p className="text-slate-400">2023-2025:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Instituto Duoc UC</p>
                  <p className="text-white">Técnico Analista programador</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2023-2024:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso Framework Next JS</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2022-2023:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso React JS</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2021-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Udemy</p>
                  <p className="text-white">Curso Javascript Moderno</p>
                </div>
              </div>

                <div className="flex mt-5">
                <p className="text-slate-400">2021-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Instituto Duoc UC</p>
                  <p className="text-white">Diplomado en desarrollo web</p>
                </div>
              </div>
            
           </div>
        </div>


            <div className="bg-[#272730] pt-10 pb-10 w-1/2 rounded-xl border border-zinc-600 px-14" style={{

        WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
      }}>
           <h3 className="text-white text-4xl font-medium text-center flex items-center"><FaWpforms className="mr-2 text-4xl text-lime-500"/> Experiencia</h3>
            <div className="border-l border-slate-500 pl-5 mt-10">
              <div className="flex">
                <p className="text-slate-400">2024-2025:</p>
                <div className="ml-2">
                  <p className="text-lime-500">EcoAlliance</p>
                  <p className="text-white">Práctica profesional Analista programador</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2023-2023:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Aridos Quinta región</p>
                  <p className="text-white">Desarrollo de sitio web</p>
                </div>
              </div>

               <div className="flex mt-5">
                <p className="text-slate-400">2022-2022:</p>
                <div className="ml-2">
                  <p className="text-lime-500">Izajes y transportes G&G</p>
                  <p className="text-white">Desarrollo de sitio web</p>
                </div>
              </div>
           </div>
        </div>
      </section>



      <section className="  border border-zinc-600 rounded-xl pb-10 bg-[#272730]   mb-10 "  style={{  
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
  }} >
      <h3 className="text-lime-500 text-center mt-10 flex justify-center items-center text-lg"><FaDotCircle className="mr-2 text-sm"/>Habilidades</h3>
      <h2 className="text-center text-white text-2xl mt-1 mb-10">Lorem ipsum dolor sit amet ipsum lorem.</h2>
      <div className="flex">
        <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
          <AiOutlineGlobal className="text-2xl text-white mb-2"/>
          <h3 className=" text-white text-xl">Desarrollo de sitios web</h3>
        </div>
         <div className="border border-zinc-700 w-1/3 mx-5 rounded-xl p-10 ">
            <MdWeb className="text-white text-2xl mb-2"/>
            <h3 className=" text-white text-xl">Maquetación y responsividad</h3>
        </div>
         <div className="border border-zinc-700 w-1/3  rounded-xl p-10">
            <TbDatabase className="text-white text-2xl mb-2"/>
            <h3 className="text-white text-xl">ETL Base de datos</h3>
        </div>
      </div>

       <div className="flex mt-5">
        <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
        <PiRobotDuotone className="text-white text-2xl mb-2"/>
          <h3 className=" text-white text-xl">Integración de IA</h3>
        </div>
         <div className="border border-zinc-700 w-1/3 mx-5 rounded-xl p-10 ">
         <CgInternal className="text-white text-2xl mb-2"/>
          <h3 className=" text-white text-xl">Cosumo de librerías y APIs</h3>
        </div>
         <div className="border border-zinc-700 w-1/3 rounded-xl p-10">
         <IoCloudUploadOutline className="text-white text-2xl mb-2"/>
          <h3 className=" text-white text-xl">Despliegue de aplicaciones</h3>
        </div>
        
      </div>





      </section>




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
            <Image src="/trabajo-reciente/lexifyHome.png" width={600} height={600} alt="LexifyHome"/>
            <div className="ml-10 flex-col flex justify-between">
              <h2>Lexify AI</h2>
              <p className=" text-zinc-400 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo vero est pariatur! Dolor voluptatem alias deserunt enim a eveniet repellendus blanditiis corporis aliquam quasi?</p>
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
                <button className="flex items-center cursor-pointer bg-white text-black py-1 px-2 rounded-full hover:bg-zinc-300"><BsArrowUpRight className="mr-2"/>Ver Demo</button>
                {/* <button className="flex items-center cursor-pointer  bg-white text-black py-1 px-2 rounded-full hover:bg-zinc-300"><FaGithub className="mr-2"/> Ver Github</button> */}
              </div>
            </div>
          </div>

      </section>

      <h3 className="text-center text-4xl text-white mt-20 flex justify-center items-center"><GrProjects className="text-lime-500 text-3xl mr-3"/>Proyectos realizados</h3>
      <p className="text-center text-lime-500 mt-2">Recientemente</p>
      <section className="mb-20 flex justify-between mt-18"   style={{
  
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
  }}>
        <div className="bg-[#272730] pt-4 pb-5 w-1/3 rounded-xl border border-zinc-600 px-4 ">
           <Image src="/proyectos/nutrihome.png" width={600} height={600} alt="nutricion homepage" className="rounded-lg"/>
          <p className="text-center mt-4 text-lime-500">Última actualización - Octubre 2025</p>
          <h4 className="text-xl text-center text-white mt-2 font-bold">Servicios de nutrición.</h4>
          <p className="text-center my-8 text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, amet tenetur. Id quam molestiae ipsa assumenda voluptates. Voluptatem, itaque sit.djkasd</p>
          <button className="mt-5 py-2 rounded-xl bg-white w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer"><FaRegEye className="mr-3 text-xl"/>Visitar proyecto</button>
        </div>

           <div className="bg-[#272730] pt-4 pb-5 w-1/3 mx-5 rounded-xl border border-zinc-600 px-4 ">
           <Image src="/proyectos/adminhome.png" width={600} height={600} alt="admin homepage" className="rounded-lg"/>
          <p className="text-center mt-4 text-lime-500">Última actualización - Agosto 2025</p>
          <h4 className="text-xl text-center text-white mt-2 font-bold">Administración de comunidades</h4>
          <p className="text-center my-8 text-zinc-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, amet tenetur. Id quam molestiae ipsa assumenda voluptates. Voluptatem, itaque sit.djkasd</p>
          <button className="mt-5 py-2 rounded-xl bg-white w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer"><FaRegEye className="mr-3 text-xl"/>Visitar proyecto</button>
        </div>

            <div className="bg-[#272730] pt-4 pb-5 w-1/3 rounded-xl border border-zinc-600 px-4 ">
           <Image src="/proyectos/shadcn-nextjs.png" width={600} height={600} alt="shadcn nextjs homepage" className="rounded-lg"/>
          <p className="text-center mt-4 text-lime-500">Última actualización - Julio 2025</p>
          <h4 className="text-xl text-center text-white mt-2 font-bold">Interfaz Shadcn.</h4>
          <p className="text-center my-8 text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, amet tenetur. Id quam molestiae ipsa assumenda voluptates. Voluptatem, itaque sit.djkasd</p>
          <button className="mt-5 py-2 rounded-xl bg-white w-full flex justify-center items-center hover:bg-zinc-300 cursor-pointer"><FaRegEye className="mr-3 text-xl"/>Visitar proyecto</button>
        </div>

      
      </section>
    </main>
  );
}
