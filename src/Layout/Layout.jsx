import React from 'react'
import './layout.css'
import '.././App.css'

import { Link,Outlet } from 'react-router-dom'

import Switcher from '.././component/Switcher'
import Temporary from '../component/navbar'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'


import nav from './img/nav.png'
import nav2 from './img/nav2.png'
import footer1 from './img/footer1.png'
import { Home } from '../Routes/Routes'
const Layout = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  const handleChange = (e) => {
    const {value} = e.target
    changeLanguage(value)
    setLng(value)
  }
  return (
    <div>
      <div className='bg-[#F4F7FE] dark:bg-[#151415d6] dark:text-[#fff] contener'>
        <div className="navbar flex justify-between lg:w-[83%] mx:w-[95%] py-[15px] mx-auto">
          <div>
            <img src={nav} alt="" />
          </div>
            <ul className=' lg:flex hidden w-[55%] text-[16px] font-[400] mx-auto px-[10px] justify-between '>
              <Link to ='/' >
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text")}</li>
              </Link>


              <Link to = "shop">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text1")}</li>
              </Link>

              <Link to = "answers">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text2")}</li>
              </Link>

              <Link to = "reviews">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text3")}</li>
              </Link>
              <Link to = "contacts" >
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text4")}</li>
              </Link>
            </ul>

                  <div className='flex md:gap-[20px]  mx:gap-[10px]'> 
                    <div className=''>
                        <Switcher/>
                    </div>
                    <div className=''>
                    <select className='dark:text-[#010000] font-[600] rounded-[10px] p-[5px]' value={lng} onChange={handleChange}>
                         <option value={"en"}>En</option>
                         <option value={"ru"}>Ru</option>
                     </select>
                    </div>
                    <div className='md:flex hidden'> 
                      <img src={nav2} alt="" />
                      </div>
                      <div>
                        <button className='btn md:flex hidden text-[16px] font-[400] py-[5px] px-[25px] '>{t("text4A")}</button>
                        </div>  
                    <div className=' lg:hidden mx:flex'>
                        <Temporary/>
                    </div>

                </div>
        </div>
      </div>

      <Outlet/>

      <div className='contener dark:bg-[#151415d6] dark:text-[#fff]'>
        <div className="footer lg:w-[80%] md:w-[60%] justify-between mx-auto py-[70px] lg:flex">
          <div className='flex py-[20px] lg:w-[32%] mx:justify-center mx:text-center mx:items-center  lg:justify-start lg:text-start lg:items-start flex-col gap-[10px]'>
            <div>
              <img src={nav} alt="" />
            </div>
            <p className='py-[10px] text-[14px] xl:w-[75%] mx:w-[90%] font-[400]'>{t("text12")}</p>
            <h2 className='text-[20px] font-[700]'>{t("text12A")}</h2>
            <div className='py-[20px]'>
              <img src={footer1} alt="" />
            </div>

          </div>
          <div className='lg:w-[33%] flex justify-evenly py-[20px]'>
          <ul className=' lg:flex flex-col gap-[10px] '>
              <h1 className='text-[20px] font-[700]'>{t("text12B")}</h1>
              <Link to ='/' >
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text")}</li>
              </Link>


              <Link to = "shop">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text1")}</li>
              </Link>

              <Link to = "answers">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text2")}</li>
              </Link>

              <Link to = "reviews">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text3")}</li>
              </Link>
              <Link to = "contacts" >
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text4")}</li>
              </Link>
            </ul>

            <ul className=' lg:flex flex-col gap-[10px] '>
              <h1 className='text-[20px] font-[700]'>{t("text12C")}</h1>
              <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>Dekobrow</li>
              <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>DekoHair</li>
              <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>DekoPill</li>
              <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>DekoBeard</li>
            </ul>
            </div>

            <div className='mx:justify-center mx:text-center mx:items-center py-[20px] lg:justify-start lg:text-start'>
              <h1 className='text-[20px] pb-[15px] font-[700]'>{t("text12D")}</h1>
              <input className='input py-[5px] my-[15px] px-[40px]' type="text" placeholder='Ваш E-mail' />

              <div className='pt-[15px]'>
                <button className='btnF  py-[7px] px-[95px]'>{t("text")}</button>
              </div>
            </div>

          
        </div>
      </div>

    </div>
  )
}

export default Layout