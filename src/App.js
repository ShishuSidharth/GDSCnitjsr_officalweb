import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/aboutus'
import Hero from './components/hero'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      
    </div>
  );
}

export default App;
