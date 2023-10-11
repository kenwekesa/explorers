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
import Mainfund from './pages/addfund/Mainfund';
import Mainaddfunds from './pages/addfunds/Mainaddfunds';
import Mainservicelist from './pages/servicelist/Mainservicelist';
import Dashboard from './Admin/dashboard/Dashboard';
import Adminclients from './Admin/clients/Adminclients';
import Adminassistants from './Admin/assistants/Adminassistants';
import Adminfunds from './Admin/funds/Adminfunds';
import Adminmessages from './Admin/messages/Adminmessages';
import AdminRegister from './Admin/register/AdminRegister';
import Adminplan from './Admin/plans/Adminplan';
import Adminupdates from './Admin/updates/Adminupdates';
import Virtual_Dashboard from './Virtual-Assistants/dashboard/Dashboard';
import Myfunds from './Virtual-Assistants/myfunds/Myfunds';
import VASupport from './Virtual-Assistants/support/Support';
import Fqas from './Virtual-Assistants/fqas/Fqas';
import MainSupport from './pages/suppport/MainSupport';
import Admindash from './pages/dashboard/admindash';
import Faq from './pages/faqs/faq';
import Myplans from './Virtual-Assistants/myplans/Myplans';


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
        <Route path='/dashboard' element={<Admindash />} />
        <Route path="/orderhistory" element={<Orderhistory />} />
        <Route path="/addfunds" element={<Mainfund />} />
        <Route path='/newplan' element={<Mainaddfunds />} />
        <Route path="/support" element={<MainSupport />} />
        <Route path='/servicelist' element={<Mainservicelist />} />
        <Route path='/faqs' element={<Faq />} />
        {/* ******* Admin Routes************ */}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/clients' element={<Adminclients />} />
        <Route path='/assistants' element={<Adminassistants />} />
        <Route path='/funds' element={<Adminfunds />} />
        <Route path='/messages' element={<Adminmessages />} />
        <Route path='/register' element={<AdminRegister />} />
        <Route path='/plans' element={<Adminplan />} />
        <Route path='/updates' element={<Adminupdates />} />
        {/***********virtual Assistants Routes*********/}
        <Route path='/mydashboard' element={<Virtual_Dashboard/>} />
        <Route path='/myplans' element={<Myplans />} />
        <Route path='/myfunds' element={<Myfunds />} />
        <Route path='/csupport' element={<VASupport />} />
        <Route path='/cfqas' element={<Fqas />} />
      </Routes>
    </div>
  );
}

export default App;
