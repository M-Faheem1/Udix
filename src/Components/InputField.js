import React from 'react'

function InputField() {
  return (
    <div className='inputFieldWrapper'>
      <div className='inputWrapper'>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
      </div>
      <button className='btn btn-primary'>Subscribe</button>
    </div>
  )
}

export default InputField
