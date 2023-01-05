import './App.scss';
import './style/scss/_import.scss'
import Header from './Components/Header';
import Intro from './Components/Intro';
import Solutions from './Components/Solutions';
import Creativity from './Components/Creativity';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Intro/>
    <Solutions/>
    <Creativity/>
    <Footer/>
    </div>
  );
}

export default App;
