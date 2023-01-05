import React from 'react'

function Reach() {
  return (
    <div className='reach'>
      <div className='imageWrapper'>
        <img src='./Assets/images/Reach.png' alt='reach'></img>
      </div>
      <div className='overlay'></div>
      <div className='adverisment'>
        <div className='clicks'>
        <span>1,000 M</span>
        <p>Clicks annually through system</p>
        </div>
        <div className='relationships'>
        <span>4.8 M</span>
        <p>Relationships created annually</p>
        </div>
        <div className='advertisers'>
        <span>100 +</span>
        <p>Advertisers with udix</p>
        </div>
      </div>
      <button className='btn btn-primary btn-sign-up'>Sign up now!</button>
    </div>
  )
}

export default Reach
