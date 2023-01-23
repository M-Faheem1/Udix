import './App.scss';
import './style/scss/_import.scss'
import Header from './Components/Header';
import Intro from './Components/Intro';
import Solutions from './Components/Solutions';
import Reach from './Components/Reach';
import Creativity from './Components/Creativity';
import Footer from './Components/Footer';
import { useState } from 'react'

function App() {
  const [heading,setheading]=useState("This is Prop")
  
  return (
    <div className="App">
      <Header/>
      <Intro heading={heading} subheading={{greating:", second prop"}}/>
      <Solutions/>
      <Reach/>
      <Creativity/>
      <Footer/>
      <button onClick={()=>{setheading("Heading changed using use state")}}> Change state </button>
    </div>
  );
}

export default App;
