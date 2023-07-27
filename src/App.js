
import './App.css';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contacts';
import Skills from './components/skill';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
