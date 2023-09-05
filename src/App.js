import './App.css';
import About from './components/About';
import { Contact } from './components/Contact';
import Project from './components/Project';
import Welcome from './components/Welcome';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'John David | Portfolio'
  }, [])

  return (
    <div className="App">
      
      <Welcome/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
