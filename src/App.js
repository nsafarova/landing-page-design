import NavBar from './components/NavBar/NavBar.js';
import Hero from './components/Hero/Hero.js';
import Companies from './components/Companies/Companies.js';
import Branding from './components/Branding/Branding.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Companies />
      <Branding />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
