import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';



function App() {
  return (
  <div className='bg-violet-700'>
 <Navbar />
 <Home />
 <About />
 <Skills />
 <Projects />
 <Contact />
 <Footer />
 </div>
  );
}

export default App;
