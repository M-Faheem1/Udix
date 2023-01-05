import React from 'react'
import Image from './Image'
import CreativityDescription from './CreativityDescription'

function Creativity() {
  return (
    <div className='creativity'>
      <div className='row creativityAndTechnology'>
        <div className='col-6 creativityAndTechnologyLeft'>
          <Image/>
        </div>
        <div className='col-6 creativityAndTechnologyRight'>
          <CreativityDescription/>
        </div>
      </div>
    </div>
  )
}

export default Creativity
