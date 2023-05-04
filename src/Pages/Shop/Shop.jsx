import React from 'react'
import '../.././App.css'

import './shop.css'

import main1 from './img/main1.png'

const Shop = () => {
  return (
    <div className='dark:bg-[#6477dfd6] dark:text-[#fff]'>
      <div className="main_1">
        <div className="contener lg:w-[80%] md:w-[40%] mx:w-[50%] mx-auto">
        <div className="main_1A pt-[100px] lg:flex justify-between">
            <div className='main lg:w-[30%] p-[20px] flex justify-center items-center'>
              <div className=' flex  py-[10px]  '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] flex justify-center items-center'>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] flex justify-center items-center p-[20px] '>
              <div className='   '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>
          </div>

          <div className="main_1A2 py-[90px]  lg:flex justify-between">
            <div className='main lg:w-[30%] p-[20px] flex justify-center items-center'>
              <div className=' flex  py-[10px]  '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] p-[20px] flex justify-center items-center'>
              <div className=' flex  py-[10px] '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>

            <div className='main lg:w-[30%] flex justify-center items-center p-[20px] '>
              <div className='   '>
                <img className='NAT ' src={main1} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop