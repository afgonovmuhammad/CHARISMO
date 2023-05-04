import React from 'react'
import '../.././App.css'
import './home.css'

import main1 from './img/main1.png'
import ma2 from './img/ma2.png'
import ma2A from './img/ma2A.png'
import ma2B from './img/ma2B.png'

import ma3 from './img/ma3.png'
import ma3A from './img/ma3A.png'
import ma3B from './img/ma3B.png'

import ma4 from './img/ma4.png'
import ma4A from './img/ma4A.png'
import ma4B from './img/ma4B.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Home = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  return (
    <div className='dark:bg-[#272327d6] dark:text-[#fff]'>
      <div className="main_1">
        <div className="contener w-[80%] mx-auto">
          <div className="main_1A py-[50px] lg:flex justify-between">
            <div className="left_1 lg:w-[50%] py-[30px] flex flex-col mx:text-center md:text-start  text-start justify-center">
              <h1 className='text-[#304560] dark:text-[#fff] xl:w-[70%] font-[700] md:text-[42px] mx:text-[36px]'>{t("text5")}</h1>
              <p className='text-[#728399] dark:text-[#fff] xl:w-[65%] font-[400] py-[35px] text-[21px]'>{t("text5A")}</p>

              <div>
                <button className='btn py-[10px] px-[40px]'>{t("text5B")}</button>
              </div>

            </div>

            <div className="right_1">
              <img src={main1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_2 py-[120px]">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
          <h1 className='text-[#304560] dark:text-[#fff]   font-[700] lg:text-[42px] mx:text-[36px]'>{t("text6")}</h1>
          <p className='text-[#728399] dark:text-[#fff] xl:w-[65%] font-[400] py-[30px] text-[20px]'>{t("text6A")}</p>
          <div className="main_2A lg:py-[20px] lg:flex justify-between">
            <div className='mainA lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px]  '>
                <img className='NAT p-[10px]' src={ma2} alt="" />
              </div>
              <h1 className='text-[#304560] hover:dark:text-[#000] dark:text-[#fff] xl:w-[70%] font-[700] md:text-[20px] mx:text-[19px]'>{t("text7")}</h1>
              <p className='text-[#728399]  hover:dark:text-[#000] dark:text-[#fff] xl:w-[80%] font-[400] py-[10px] text-[16px]'>{t("text8")}</p>
            </div>

            <div className='mainA lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT p-[10px]' src={ma2A} alt="" />
              </div>
              <h1 className='text-[#304560] hover:dark:text-[#000] dark:text-[#fff]  xl:w-[70%] font-[700] md:text-[20px] mx:text-[19px]'>{t("text7A")}</h1>
              <p className='text-[#728399] hover:dark:text-[#000]    xl:w-[80%] font-[400] py-[10px] text-[16px]'>{t("text8")}</p>
            </div>

            <div className='mainA lg:w-[30%] p-[20px] hover:dark:text-[#000] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT p-[10px]' src={ma2B} alt="" />
              </div>
              <h1 className='text-[#304560]  dark:text-[#fff]  xl:w-[70%] font-[700] md:text-[20px] mx:text-[19px]'>{t("text7B")}</h1>
              <p className='text-[#728399]   xl:w-[80%] font-[400] py-[10px] text-[16px]'>{t("text8")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main_3">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
        <h1 className='text-[#304560]  dark:text-[#fff] font-[700] lg:text-[42px] mx:text-[36px]'>{t("text9")}</h1>
        <p className='text-[#728399] dark:text-[#fff] xl:w-[65%] font-[400] py-[30px] text-[20px]'>{t("text9A")}</p>

        <div className="main_3A lg:py-[20px] lg:flex justify-between">
            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px]  '>
                <img className='NAT ' src={ma3B} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={ma3A} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] '>
              <div className=' flex   '>
                <img className='NAT ' src={ma3B} alt="" />
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="main_4  py-[80px]">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
        <h1 className='text-[#304560]  dark:text-[#fff] font-[700] lg:text-[42px] mx:text-[36px]'>{t("text10")}</h1>
        <p className='text-[#728399] dark:text-[#fff] xl:w-[65%] font-[400] py-[30px] text-[20px]'>{t("text10A")}</p>
        <div className="main_4A lg:py-[20px] lg:flex justify-between">
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

      <div className="main_5 py-[45px]">
        <div className="contener">
          <div className="main_5A flex flex-col justify-center items-center">
          <h1 className='text-[#ffffff]   font-[700] lg:text-[42px] mx:text-[36px]'>{t("text11")}</h1>
          <p className='text-[#ffffff] xl:w-[65%] text-center font-[400] py-[20px] text-[20px]'>{t("text11A")}</p>
          
          <div className='pt-[15px]'>
                <button className='btn5 py-[10px] px-[40px]'>{t("text11B")}</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home