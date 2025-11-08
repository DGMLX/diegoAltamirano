'use client'

import React, { useEffect, useState } from 'react'
import { MdLanguage } from 'react-icons/md'
import Cookies from 'js-cookie'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useTranslations } from 'next-intl'


const SeleccionIdioma = () => {

  const [idioma, setIdioma] = useState("")
  const t = useTranslations("Idiomas")
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
            <SelectValue placeholder={t("idioma")}/>
        </SelectTrigger>
    <SelectContent>
            <SelectItem value="es">{t("español")}</SelectItem>
            <SelectItem value="en">{t("ingles")}</SelectItem>
            {/* <SelectItem value="ja">Japonés</SelectItem> */}
    </SelectContent>
    </Select>
  )
}

export default SeleccionIdioma