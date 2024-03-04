
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Hero></Hero>
     <About></About>
     <Projects></Projects>
     <Resume></Resume>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
