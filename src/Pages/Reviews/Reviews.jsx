import React from 'react'
import '../.././App.css'

import ma1 from './img/ma1.png'
import ma2 from './img/ma2.png'
import ma3 from './img/ma3.png'

import ma4A from '../Home/img/ma4A.png'
import ma4B from '../Home/img/ma4B.png'




import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Reviews = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className=' dark:bg-[#2c282cd6]'>
      <div className="main_1 py-[80px]">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
        <div className="main_1A lg:py-[20px] lg:flex justify-between">
            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={ma1} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={ma2} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px]  '>
                <img className='NAT ' src={ma3} alt="" />
              </div>

            </div>
          </div>

          

        </div>
      </div>
      <div className="main_2 py-[90px]">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
        <h1 className='text-[#304560]   font-[700] lg:text-[42px] mx:text-[36px]'>{t("text10")}</h1>
        <p className='text-[#728399] xl:w-[65%] font-[400] py-[10px] text-[20px]'>{t("text10A")}</p>
        <div className="main_2A lg:py-[20px] lg:flex justify-between">
            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={ma4A} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={ma4A} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px]  '>
                <img className='NAT ' src={ma4B} alt="" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reviews