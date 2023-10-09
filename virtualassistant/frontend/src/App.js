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
import Mainfund from './pages/addfund/Mainfund';
import Mainchat from './FComponents/chat/Mainchat';
import Mainaddfunds from './pages/addfunds/Mainaddfunds';
import Admindash from './FComponents/pricing/admindash';
import Subscriptions from './pages/subscriptions/Subscriptions';
import Support from './pages/support/Support';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Mainservicelist from './pages/servicelist/Mainservicelist';
import Dashboard from './Admin/dashboard/Dashboard';
import Adminclients from './Admin/clients/Adminclients';
import Adminassistants from './Admin/assistants/Adminassistants';
import Adminfunds from './Admin/funds/Adminfunds';
import Adminmessages from './Admin/messages/Adminmessages';
import AdminRegister from './Admin/register/AdminRegister';
import Adminplan from './Admin/plans/Adminplan';
import Adminupdates from './Admin/updates/Adminupdates';


function App() {
  return (
    <div className='mainapp'>

      <Routes>
        {/* **********Main Application Routes*************** */}
        <Route path="/" element={<Mlanding />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/prices" element={<MainService />} />
        <Route path="/services" element={<Mprice />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/industries" element={<MainIndustries />} />
        <Route path='/login' element={<Mainlogin />} />
        <Route path='/signup' element={<Mainsignup />} />
        {/* ********clinet Routes********** */}
        <Route path="/orderhistory" element={<Orderhistory />} />
        {/* <Route path="/addfunds" element={<Mainaddfunds/>} /> */}
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/dashboard" element={<Admindash/>}/>
        {/* <Route path="/orderhistory" element={ <Orderhistory/> } /> */}
        <Route path="/support" element={ <Support/> } />
        <Route path="/subscriptions" element={ <Subscriptions/> } />
        <Route path="/addfunds" element={<Mainfund />} />
        <Route path='/newplan' element={<Mainaddfunds />} />
        <Route path="/support" element={<Mainchat />} />
        <Route path='/servicelist' element={<Mainservicelist />} />
        {/* ******* Admin Routes************ */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clients' element={<Adminclients />} />
        <Route path='/assistants' element={<Adminassistants />} />
        <Route path='/funds' element={<Adminfunds />} />
        <Route path='/messages' element={<Adminmessages />} />
        <Route path='/register' element={<AdminRegister />} />
        <Route path='/plans' element={<Adminplan />} />
        <Route path='/updates' element={<Adminupdates />} />

      </Routes>
    </div>
  );
}

export default App;
