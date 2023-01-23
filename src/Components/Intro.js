import React, {useState} from 'react'
import InputField from './InputField';

function Intro(props) {
  const parentValue = "udix is the world’s first smart workspace. We bring all your team’s content together while letting you use the tools you love.";
  console.log(parentValue)
  const [paragraph, setParagraph] = useState(parentValue)
  const [isChildText, setIsChildText] = useState(false)
  return (
    <div className='intro'>
      <h1>{props.heading} { props.subheading.greating }
      </h1>
      <p> {paragraph} </p>
      <InputField
        text = "Notification"
        parentValue = {parentValue}
        setParagraph = {setParagraph}
        isChildText = {isChildText}
        setIsChildText = {setIsChildText}
      />
    </div>
  )  
}

export default Intro
