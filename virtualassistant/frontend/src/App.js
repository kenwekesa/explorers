import { Route, Routes } from 'react-router-dom';
import MainAbout from './FComponents/about/MainAbout';
import './App.css';
import MainContact from './FComponents/contact/MainContact';
import MainIndustries from './FComponents/industries/MainIndustries';
import Mlanding from './FComponents/landing/Mlanding';
import Mprice from './FComponents/pricing/Mprice';
import MainService from './FComponents/services/MainService';
import Mainlogin from './FComponents/login/Mainlogin';
import Mainsignup from './FComponents/signup/Mainsignup';
import Orderhistory from './pages/orderhistory/Orderhistory';
import Mainaddfunds from './pages/addfunds/Mainaddfunds';
import Mainfund from './pages/addfund/Mainfund';
import Mainservicelist from './pages/servicelist/Mainservicelist';


function App() {
  return (
    <div className='mainapp'>
      <Routes>
        <Route path="/" element={<Mlanding />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/prices" element={<MainService /> } />
        <Route path="/services" element={<Mprice/> } />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/industries" element={<MainIndustries />} />
        <Route path='/login' element={<Mainlogin />} />
        <Route path='/signup' element={<Mainsignup />} />
        <Route path="/industries" element={ <MainIndustries /> } />
        <Route path="/orderhistory" element={<Orderhistory />} />
        <Route path="/newplan" element={<Mainaddfunds />} />
        <Route path='/addfund' element={<Mainfund />} />
        <Route path='/servicelist' element={<Mainservicelist />} />
      </Routes>
    </div>
  );
}

export default App;
