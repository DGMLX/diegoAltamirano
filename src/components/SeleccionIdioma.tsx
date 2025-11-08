'use client'

import React, { useEffect, useState } from 'react'
import { MdLanguage } from 'react-icons/md'
import Cookies from 'js-cookie'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'


const SeleccionIdioma = () => {

  const [idioma, setIdioma] = useState("")

   useEffect(() => {
    const saved = Cookies.get('locale')
    if (saved) setIdioma(saved)
  }, [])

  const handleChange = (value: string) => {
    setIdioma(value)
    Cookies.set('locale', value, { expires: 365 }) // 1 año
    window.location.reload() // recargar para que next-intl lo tome desde el request
  }
  
  return (
    <Select value={idioma} onValueChange={handleChange}>
        <SelectTrigger className="">
            <MdLanguage/>
            <SelectValue placeholder="Idioma"/>
        </SelectTrigger>
    <SelectContent>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="en">Inglés</SelectItem>
            {/* <SelectItem value="ja">Japonés</SelectItem> */}
    </SelectContent>
    </Select>
  )
}

export default SeleccionIdioma