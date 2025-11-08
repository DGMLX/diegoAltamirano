import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";


const SeccionContacto = () => {
  return (
    <section className='mb-20'>
        <h2 className='text-lime-400 text-2xl'>Contacto</h2>
        <div className='flex '>

          <div className='mt-10 w-2/3'>
              <form action="">
                  <div className='flex gap-x-3'>
                      <Input placeholder='Tu nombre' className='mt-3'/>
                      <Input placeholder='Número de contacto' className='mt-3'/>
                  </div>
                  <div className='flex  gap-x-3'>
                      <Input type='email' placeholder='example@correo.com' className='mt-3'/>
                      <Input placeholder='Asunto' className='mt-3'/>           
                  </div>
                  <Textarea placeholder="Mensaje" className='mt-3' />
                  <Button className='mt-5 cursor-pointer'>Enviar mensaje</Button>
              </form>

          </div>
            <div className='w-1/3 ml-5'>
              <div className='flex items-center'>
                <div className='border p-3 mr-3 bg-zinc-800 rounded-md'>
                  <CiPhone className='text-3xl text-lime-500'/>

                </div>
                <div>
                  <p className='text-sm text-zinc-500'>Número de contacto</p>
                  <p>+56954714609</p>
                </div>
              </div>

              <div className='flex items-center mt-3'>
                 <div className='border p-3 mr-3 bg-zinc-800 rounded-md'>
                  <MdOutlineAttachEmail className='text-3xl text-lime-500'/>
                </div>
                <div>
                  <p className='text-sm text-zinc-500'>Email</p>
                  <p>diegoaltdev@gmail.com</p>
                </div>
              </div>

              <div className='flex items-center mt-3'>
                 <div className='border p-3 mr-3 bg-zinc-800 rounded-md'>
                  <FiGithub className='text-3xl text-lime-500'/>
                </div>
                <div>
                  <p className='text-sm text-zinc-500'>Github</p>
                  <p>DGMLX</p>
                </div>
              </div>

              <div className='flex items-center mt-3'>
                <div className='border p-3 mr-3 bg-zinc-800 rounded-md'>
                  <FiMapPin className='text-3xl text-lime-500'/>
                </div>
                <div>
                  <p className='text-sm text-zinc-500'>Ubicación</p>
                  <p>Chile - Viña del mar</p>
                </div>
              </div>

              
            </div>
        </div>
    </section>
  )
}

export default SeccionContacto