import React from 'react'

function InputField() {
  return (
    <div className='inputFieldWrapper'>
      <div className='inputWrapper'>
        <input type="email" class="form-control" placeholder="Email"/>
      </div>
      <button className='btn btn-primary'>Subscribe</button>
    </div>
  )
}

export default InputField
