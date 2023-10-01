import { Route, Routes } from 'react-router-dom';
import MainAbout from './FComponents/about/MainAbout';
import './App.css';
import Faq from './FComponents/pricing/faq'
import MainContact from './FComponents/contact/MainContact';
import MainIndustries from './FComponents/industries/MainIndustries';
import Mlanding from './FComponents/landing/Mlanding';
import Mprice from './FComponents/pricing/Mprice';
import MainService from './FComponents/services/MainService';
import Mainlogin from './FComponents/login/Mainlogin';
import Mainsignup from './FComponents/signup/Mainsignup';
import Orderhistory from './pages/orderhistory/Orderhistory';
import Mainaddfunds from './pages/addfunds/Mainaddfunds';
import Admindash from './FComponents/pricing/admindash';
import Subscriptions from './pages/subscriptions/Subscriptions';
import Support from './pages/support/Support';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';



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
        <Route path="/addfunds" element={<Mainaddfunds/>} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/dashboard" element={<Admindash/>}/>
        {/* <Route path="/orderhistory" element={ <Orderhistory/> } /> */}
        <Route path="/support" element={ <Support/> } />
        <Route path="/subscriptions" element={ <Subscriptions/> } />

      </Routes>
    </div>
  );
}

export default App;
