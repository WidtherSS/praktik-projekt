import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from  './components/Nav.js';
import Footer from './components/Footer.js';
import BoligerSalg from './components/BoligerSalg.js';
import Kontakt from './components/Kontakt.js';


function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav/>
          <Kontakt/>
          <Footer/>
    </div>
    </BrowserRouter>

  );
}
export default App;
