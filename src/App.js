import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';  // Import the default export
import Banner from './components/Banner';  // Import the default export
import Contacts from './components/Contact';  // Import the default export
import Skill from './components/Skills';  // Import the default export
import Certificate from './components/Certificate';  // Import the default export
import Projects from './components/Projects';  // Import the default export
import Footer from './components/Footer';  // Import the default export

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <h2 className="container text-align-center skill-text mt-3 " id='skillsSect' style={{ display: 'block', textAlign: 'center' }} >MY Skills</h2>

      <Skill />
      <Projects />
      <Certificate />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
