import React from 'react'

function InputField({
    text,
    parentValue,
    isChildText,
    setIsChildText,
    setParagraph
  }) {

  const handleButton = () => {
    if (!isChildText) {
      setParagraph('Value is changed through boolean');
      setIsChildText(!isChildText);
    } else {
      setParagraph(parentValue);
      setIsChildText(!isChildText);
    }
  }

  return (
    <div className='inputFieldWrapper'>
      <div className='inputWrapper'>
        <input type="email" className="form-control" placeholder="Email"/>
      </div>
      <button 
      onClick={handleButton}
      className='btn btn-primary'>{text}</button>
    </div>
  )
}

export default InputField
