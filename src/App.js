import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Services from './Components/Services/Services';
import FormSection from './Components/LogIn/FormSection';
import LogIn from './Components/LogIn/LogIn';
import Navbar from './Components/Navigation/Navigation';
function App() { 
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <LogIn Name="OUR SERVICES" className='top-padding'/>
      <Services />
      <LogIn Name="ENRROLLE FORM" />
      <FormSection />
    </div>
  );
}

export default App;
