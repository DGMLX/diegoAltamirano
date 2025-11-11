import { useTranslations } from 'next-intl'
import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgInternal } from 'react-icons/cg'
import { FaDotCircle } from 'react-icons/fa'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'
import { PiRobotDuotone } from 'react-icons/pi'
import { TbDatabase } from 'react-icons/tb'

const SeccionServicios = () => {
  const t = useTranslations("Servicios")

  return (
    <section
      className="border border-zinc-600 rounded-xl pb-10  mb-10 px-4 sm:px-6 md:px-10"
    >
      <h3 className="text-lime-500 text-center mt-10 flex justify-center items-center text-lg">
        <FaDotCircle className="mr-2 text-sm" />
        {t("titulo1")}
      </h3>
      <h2 className="text-center text-2xl mt-1 mb-10">{t("titulo2")}</h2>

      {/* Contenedor responsivo en grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* CARD 1 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <AiOutlineGlobal className="text-2xl text-lime-500 mb-4" />
          <h3 className=" text-xl">{t("Cards.item1.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item1.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>

        {/* CARD 2 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <MdWeb className="text-lime-500 text-2xl mb-4" />
          <h3 className=" text-xl">{t("Cards.item2.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item2.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>

        {/* CARD 3 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <TbDatabase className="text-lime-500 text-2xl mb-4" />
          <h3 className=" text-xl">{t("Cards.item3.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item3.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>

        {/* CARD 4 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <PiRobotDuotone className="text-lime-500 text-2xl mb-4" />
          <h3 className=" text-xl">{t("Cards.item4.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item4.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>

        {/* CARD 5 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <CgInternal className="text-lime-500 text-2xl mb-4" />
          <h3 className=" text-xl">{t("Cards.item5.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item5.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>

        {/* CARD 6 */}
        <div className="border border-zinc-700 rounded-xl p-10">
          <IoCloudUploadOutline className="text-lime-500 text-2xl mb-4" />
          <h3 className=" text-xl">{t("Cards.item6.titulo")}</h3>
          <p className=" mt-4">
            {t.rich("Cards.item6.descripcion", {
              highlight: (chunks) => <span className="text-pink-400">{chunks}</span>,
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SeccionServicios
