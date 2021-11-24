import './App.css';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import Topbar from './components/Topbar/Topbar';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (

    <div className="App">
      <Topbar />
      <Intro/>
      <Experiences/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
