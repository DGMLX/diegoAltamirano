'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { CiPhone } from "react-icons/ci"
import { MdOutlineAttachEmail } from "react-icons/md"
import { FiGithub, FiMapPin } from "react-icons/fi"
import { useTranslations } from 'next-intl'
import { useForm, SubmitHandler } from "react-hook-form"
import { Alert, AlertDescription } from '../ui/alert'
import { toast } from 'sonner'

type Inputs = {
  nombre: string
  telefono: number
  correo:string
  asunto:string
  mensaje:string
}


const SeccionContacto = () => {

  const t = useTranslations("Contacto")
   const {register,handleSubmit,
     watch,
     formState: { errors },reset
   } = useForm<Inputs>()

   const onSubmit : SubmitHandler<Inputs> = async(data) =>{
    toast.success(t("Exito.mensajeExito"),{
                position:"top-center"
            })
    
    reset()
   }

  return (
    <section className="mb-20 px-5">
      <h2 className="text-lime-400 font-medium text-3xl">{t("titulo")}</h2>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center lg:flex-row mt-10 gap-10">

        {/* Formulario */}
        <div className="w-full lg:w-2/3 ">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className='w-full'>
              <Input placeholder={t("Formulario.labelNombre")} {...register('nombre', { required: true })} className="mt-3 flex-1" />
              {
                  errors.nombre && 
                    <Alert variant="destructive" className='mt-2'>
                      <AlertDescription>
                        {t("Error.errorNombre")}
                      </AlertDescription>
                    </Alert>
                }
                </div>
                <div  className='w-full'>
              <Input placeholder={t("Formulario.labelTelefono")} type='number' {...register('telefono', { required: true })} className="mt-3 flex-1" />
              {
                  errors.telefono && 
                    <Alert variant="destructive" className='mt-2'>
                      <AlertDescription>
                        {t("Error.errorTelefono")}
                      </AlertDescription>
                    </Alert>
                }
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className='w-full'>
                <Input type="email" placeholder={t("Formulario.labelCorreo")} {...register('correo', { required: true })} className="mt-3 flex-1" />
                {
                    errors.correo && 
                      <Alert variant="destructive" className='mt-2'>
                        <AlertDescription>
                          {t("Error.errorCorreo")}
                        </AlertDescription>
                      </Alert>
                  }
                </div>
                <div className='w-full'>

                
              <Input placeholder={t("Formulario.labelAsunto")} {...register('asunto', { required: true })} className="mt-3 flex-1" />
                {
                    errors.asunto && 
                      <Alert variant="destructive" className='mt-2'>
                        <AlertDescription>
                          {t("Error.errorAsunto")}
                        </AlertDescription>
                      </Alert>
                  }
                </div>
            </div>

            <Textarea placeholder={t("Formulario.labelMensaje")} {...register('mensaje', { required: true })} className="mt-3 min-h-[150px]"/>
            {
                  errors.asunto && 
                    <Alert variant="destructive" className='mt-2'>
                      <AlertDescription>
                        {t("Error.errorAsunto")}
                      </AlertDescription>
                    </Alert>
                }
            <Button type="submit" className="mt-5 w-full sm:w-auto cursor-pointer">{t("Formulario.boton")}</Button>
           
          </form>
        </div>

        {/* Información de contacto */}
        <div className="w-full lg:w-1/3 space-y-4 bg-prim">
          <ContactInfo
            icon={<CiPhone className="text-3xl text-lime-500" />}
            label={t("Info.numero")}
            value="+569 54714609"
            
          />

          <ContactInfo
            icon={<MdOutlineAttachEmail className="text-3xl text-lime-500" />}
            label={t("Info.email")}
            value="diegoaltdev@gmail.com"
          />

          <ContactInfo
            icon={<FiGithub className="text-3xl text-lime-500" />}
            label="Github"
            value="DGMLX"
          />

          <ContactInfo
            icon={<FiMapPin className="text-3xl text-lime-500" />}
            label={t("Info.ubicacion")}
            value="Chile - Viña del Mar"
          />
        </div>
      </div>
    </section>
  )
}

const ContactInfo = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="bg-primary-foreground flex items-center  rounded-md p-3 shadow-md">
    <div className="border border-zinc-700 p-3 mr-3 bg-zinc-800 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-zinc-600">{label}</p>
      <p className=" break-words">{value}</p>
    </div>
  </div>
)

export default SeccionContacto
