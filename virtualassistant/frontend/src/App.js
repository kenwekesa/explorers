import { Route, Routes } from 'react-router-dom';
import MainAbout from './about/MainAbout';
import './App.css';
import MainContact from './contact/MainContact';
import MainIndustries from './industries/MainIndustries';
import Mlanding from './landing/Mlanding';
import Mprice from './pricing/Mprice';
import MainService from './services/MainService';


function App() {
  return (
    <div className='mainapp' id="scroller">
      <Routes>
        <Route path="/" element={<Mlanding />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/services" element={<MainService /> } />
        <Route path="/prices" element={<Mprice/> } />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/industries" element={ <MainIndustries /> } />
      </Routes>
    </div>
  );
}

export default App;
