import React from 'react'
import '../.././App.css'

import ControlledAccordions from '../Contacts/accordion'

const Answers = () => {
  return (
    <div className='dark:bg-[#151415d6] dark:text-[#fff]'>
      <div className="main_1">
        <div className="contener w-[80%] mx-auto">
          <div className='py-[100px]'>
          <ControlledAccordions/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Answers