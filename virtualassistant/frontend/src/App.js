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
import Adminclients from './Admin/clients/Adminclients';
import Adminassistants from './Admin/assistants/Adminassistants';
import Adminfunds from './Admin/funds/Adminfunds';
import Adminmessages from './Admin/messages/Adminmessages';
import AdminRegister from './Admin/register/AdminRegister';
import Adminplan from './Admin/plans/Adminplan';
import Adminupdates from './Admin/updates/Adminupdates';
import Myfunds from './VirtualAssistants/myfunds/Myfunds';
import Fqas from './VirtualAssistants/fqas/Fqas';
import MainSupport from './pages/suppport/MainSupport';
import Faq from './pages/faqs/faq';
import Myplans from './VirtualAssistants/myplans/Myplans';
import Maincareers from './FComponents/careers/Maincareers';
import Emailplan from './Admin/email/Emailplan';
import Adminsplan from './Admin/admins/Adminplan';
import Activeplan from './Admin/activeplans/Activeplans';
import Pendingplan from './Admin/pendingplans/Pendingplans';
import MyActiveplan from './VirtualAssistants/myactiveplan/MyActiveplans';
import MyCanceledplan from './VirtualAssistants/mycancelplans/MyCanceledplan';
import Mynewplan from './VirtualAssistants/newplans/Mynewplan';
import MyCompletedplan from './VirtualAssistants/completedplans/MyCompletedplan';
import Fund from './pages/fund/Fund';
import Activeplann from './pages/activeplann/activeplann';
import Completedplann from './pages/completedplann/Completedplann';
import Pendingplann from './pages/pendingplann/Pendingplann';
import Canceledplann from './pages/canceledplann/canceledplann';
import ClientDashboard from './pages/dashboard/ClientDashboard';
import AdminDashboard from './Admin/dashboard/AdminDashboard';
import VirtualDashboard from './VirtualAssistants/dashboard/VirtualDashboard';
import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom'
import VASupport from './VirtualAssistants/support/Support';
import Chats from './pages/chats/Chats';


function App() {

  // const navigate = useNavigate()

  // const RequireAuth =({children}) => 
  // {
  //   const {state} = useContext(AuthContext)
  //    return state !=null && state.user? children: navigate('/login')
  // }

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
        <Route path='/careers' element={<Maincareers />} />
        {/* ********clinet Routes********** */}
        <Route path='/dashboard' element={<ClientDashboard />} />
        <Route path="/orderhistory" element={<Orderhistory />} />
        <Route path="/addfunds" element={<Mainfund />} />
        <Route path='/newplan' element={<Mainaddfunds />} />
        <Route path="/support" element={
         <MainSupport />
        } />
        <Route path='/servicelist' element={<Mainservicelist />} />
        <Route path='/faqs' element={<Faq />} />
        <Route path='/fund' element={<Fund />} />
        <Route path='/active_plans' element={<Activeplann />} />
        <Route path='/completed_plans' element={<Completedplann />} />
        <Route path='/pending_plans' element={<Pendingplann />} />
        <Route path='/canceled_plans' element={<Canceledplann />} />
        {/* ******* Admin Routes************ */}
        <Route path='/admin_dashboard' element={<AdminDashboard />} />
        <Route path='/clients' element={<Adminclients />} />
        <Route path='/assistants' element={<Adminassistants />} />
        <Route path='/funds' element={<Adminfunds />} />
        <Route path='/messages' element={
          <Adminmessages />
        } />
        <Route path='/register' element={<AdminRegister />} />
        <Route path='/plans' element={<Adminplan />} />
        <Route path='/updates' element={<Adminupdates />} />
        <Route path='/emails' element={<Emailplan />} />
        <Route path='/administrators' element={<Adminsplan />} />
        <Route path='/activeplans' element={<Activeplan />} />
        <Route path='/pendingplans' element={<Pendingplan />} />
        {/***********virtual Assistants Routes*********/}
        <Route path='/mydashboard' element={<VirtualDashboard/>} />
        <Route path='/myplans' element={<Myplans />} />
        <Route path='/myfunds' element={<Myfunds />} />
        <Route path='/csupport' element={
          <VASupport />
        } />
        <Route path='/chats' element={<Chats />} />
        <Route path='/cfqas' element={<Fqas />} />
        <Route path='/myactiveorders' element={<MyActiveplan />} />
        <Route path='/mycompletedorders' element={<MyCompletedplan />} />
        <Route path='/mycanceledorders' element={<MyCanceledplan />} />
        <Route path='/myneworders' element={<Mynewplan />} />
      </Routes>
    </div>
  );
}

export default App;
