import React from 'react'
import '../.././App.css'
import './contacts.css'

import main1 from './img/main1.png'
import main2 from './img/main2.png'
import main3 from './img/main3.png'

const Contacts = () => {
  return (
    <div className='dark:bg-[#151415d6] dark:text-[#fff]'>
      <div className="main_1 py-[120px]">
        <div className="contener w-[80%] mx-auto">
          <div className="main_1A">
            <img src={main1} alt="" />
            <h1 className='lg:text-[42px] mx:text-[36px] pt-[30px] font-[700]'>How to Improve Your Attitude in a Matter of Minutes</h1>
            <div className='py-[20px]'>
              <img src={main2} alt="" />
            </div>
            <p className='text-[#728399] xl:w-[77%] text-[14px] py-[10px] font-[400]'>What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll go ahead and assume you went with option two. The opportunity to innovate is something most of us want more of in our daily work lives. Yet often, we feel we can’t be more creative at work because of factors beyond our control. Perhaps your company is risk-averse and likes to play it safe, perhaps your targets are intimidatingly aggressive.</p>
            <p className='text-[#728399] xl:w-[77%] text-[14px] py-[10px] font-[400]'>Transparent Standards: My first and foremost guiding principle was that the services would need to continue to apply transparent and objective standards for all career fields to ensure leaders assign tasks, jobs, and career fields throughout the force based on ability, not gender. In this respect, the services have been able to leverage the great amounts of data they gathered over three years’ worth of studies to make their standards up to date and operationally relevant. We found over the last few years that in some cases we were doing things because that’s the way we’ve always done them.</p>
            <p className='text-[#728399] xl:w-[77%] text-[14px] py-[10px] font-[400]'>What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll go ahead and assume you went with option two. The opportunity to innovate is something most of us want more of in our daily work lives. Yet often, we feel we can’t be more creative at work because of factors beyond our control. Perhaps your company is risk-averse and likes to play it safe, perhaps your targets are intimidatingly aggressive.</p>
            <p className='P_four text-[#728399] xl:w-[77%] text-[14px] my-[10px] font-[400]'>Transparent Standards: My first and foremost guiding principle was that the services would need to continue to apply transparent and objective standards for all career fields to ensure leaders assign tasks, jobs, and career fields throughout the force based on ability, not gender. In this respect, the services have been able to leverage the great amounts of data they gathered over three years’ worth of studies to make their standards up to date and operationally relevant. We found over the last few years that in some cases we were doing things because that’s the way we’ve always done them.</p>

            <div className='py-[30px]'>
              <img src={main3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts