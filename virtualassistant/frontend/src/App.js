import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import VASupport from './VirtualAssistants/support/Support';
import { AuthContext } from './contextr/AuthContext';
import { findUser } from './services/api/DataApi';


const RequireAuth =({children}) => 
  {
    const {state} = useContext(AuthContext)
     return state.user? children: <Navigate to='/login'/> 
  }

 const RequireAdmin = ({ children }) => {
    const { state } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
  
    useEffect(() => {
      const checkAdminUser = async () => {
        const temp = await findUser(state.user.uid);
        const adminUser = temp[0];
  
        if (adminUser && adminUser.usertype === 'admin') {
          setIsAdmin(true);
        }
        setIsLoading(false); // Set loading state to false once the check is complete
      };
  
      checkAdminUser();
    }, [state.user.uid]);
  
    // If still loading, display a loading indicator or any other desired UI
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    // If not an admin, redirect to signin route
    if (!isAdmin) {
      return <Navigate to="/login" />;
    }
  
    // Render children if user is an admin
    return <>{children}</>;
 };
  
const RequireClient = ({ children }) => {
    const { state } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
  
    useEffect(() => {
      const checkAdminUser = async () => {
        const temp = await findUser(state.user.uid);
        const adminUser = temp[0];
  
        if (adminUser && adminUser.usertype === 'client') {
          setIsAdmin(true);
        }
        setIsLoading(false); // Set loading state to false once the check is complete
      };
  
      checkAdminUser();
    }, [state.user.uid]);
  
    // If still loading, display a loading indicator or any other desired UI
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    // If not an admin, redirect to signin route
    if (!isAdmin) {
      return <Navigate to="/login" />;
    }
  
    // Render children if user is an admin
    return <>{children}</>;
  };

  const RequireVa = ({ children }) => {
    const { state } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [isVerfied, setIsVerfied] = useState(false)
    useEffect(() => {
      const checkAdminUser = async () => {
        const temp = await findUser(state.user.uid);
        const adminUser = temp[0];
  
        if (adminUser && adminUser.usertype === 'va') {
          setIsAdmin(true);
          if (adminUser.status === 'verified') {
            setIsVerfied(true)
          }
        }
        setIsLoading(false); // Set loading state to false once the check is complete
      };
  
      checkAdminUser();
    }, [state.user.uid]);
  
    // If still loading, display a loading indicator or any other desired UI
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isAdmin && isVerfied) {
      return <>{children}</>;
    } else if (isAdmin && !isVerfied) {
      return <Navigate to="/contact" />;
    } else {
      return <Navigate to="/login" />;
    }
  };


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
        <Route path='/careers' element={<Maincareers />} />
        {/* ********client Routes********** */}
        <Route path='/dashboard' element={<RequireAuth><RequireClient><ClientDashboard /></RequireClient></RequireAuth>} />
        <Route path="/orderhistory" element={<RequireAuth><RequireClient><Orderhistory /></RequireClient></RequireAuth>} />
        <Route path="/addfunds" element={<RequireAuth><RequireClient><Mainfund /></RequireClient></RequireAuth>} />
        <Route path='/newplan' element={<RequireAuth><RequireClient><Mainaddfunds /></RequireClient></RequireAuth>} />
        <Route path="/support" element={<RequireAuth><RequireClient><MainSupport /></RequireClient></RequireAuth>} />
        <Route path='/servicelist' element={<RequireAuth><RequireClient><Mainservicelist /></RequireClient></RequireAuth>} />
        <Route path='/faqs' element={<RequireAuth><RequireClient><Faq /></RequireClient></RequireAuth>} />
        <Route path='/fund' element={<RequireAuth><RequireClient><Fund /></RequireClient></RequireAuth>} />
        <Route path='/active_plans' element={<RequireAuth><RequireClient><Activeplann /></RequireClient></RequireAuth>} />
        <Route path='/completed_plans' element={<RequireAuth><RequireClient><Completedplann /></RequireClient></RequireAuth>} />
        <Route path='/pending_plans' element={<RequireAuth><RequireClient><Pendingplann /></RequireClient></RequireAuth>} />
        <Route path='/canceled_plans' element={<RequireAuth><RequireClient><Canceledplann /></RequireClient></RequireAuth>} />
        {/* ******* Admin Routes************ */}
        <Route path='/admin_dashboard' element={<RequireAuth><RequireAdmin><AdminDashboard /></RequireAdmin></RequireAuth>} />
        <Route path='/clients' element={<RequireAuth><RequireAdmin><Adminclients /></RequireAdmin></RequireAuth>} />
        <Route path='/assistants' element={<RequireAuth><RequireAdmin><Adminassistants /></RequireAdmin></RequireAuth>} />
        <Route path='/funds' element={<RequireAuth><RequireAdmin><Adminfunds /></RequireAdmin></RequireAuth>} />
        <Route path='/messages' element={<RequireAuth><RequireAdmin><Adminmessages /></RequireAdmin></RequireAuth>} />
        <Route path='/register' element={<RequireAuth><RequireAdmin><AdminRegister /></RequireAdmin></RequireAuth>} />
        <Route path='/plans' element={<RequireAuth><RequireAdmin><Adminplan /></RequireAdmin></RequireAuth>} />
        <Route path='/updates' element={<RequireAuth><RequireAdmin><Adminupdates /></RequireAdmin></RequireAuth>} />
        <Route path='/emails' element={<RequireAuth><RequireAdmin><Emailplan /></RequireAdmin></RequireAuth>} />
        <Route path='/administrators' element={<RequireAuth><RequireAdmin><Adminsplan /></RequireAdmin></RequireAuth>} />
        <Route path='/activeplans' element={<RequireAuth><RequireAdmin><Activeplan /></RequireAdmin></RequireAuth>} />
        <Route path='/pendingplans' element={<RequireAuth><RequireAdmin><Pendingplan /></RequireAdmin></RequireAuth>} />
        {/***********virtual Assistants Routes*********/}
        <Route path='/mydashboard' element={<RequireAuth><RequireVa><VirtualDashboard /></RequireVa></RequireAuth>} />
        <Route path='/myplans' element={<RequireAuth><RequireVa><Myplans /></RequireVa></RequireAuth>} />
        <Route path='/myfunds' element={<RequireAuth><RequireVa><Myfunds /></RequireVa></RequireAuth>} />
        <Route path='/csupport' element={<RequireAuth><RequireVa><VASupport /></RequireVa></RequireAuth>} />
        <Route path='/cfqas' element={<RequireAuth><RequireVa><Fqas /></RequireVa></RequireAuth>} />
        <Route path='/myactiveorders' element={<RequireAuth><RequireVa><MyActiveplan /></RequireVa></RequireAuth>} />
        <Route path='/mycompletedorders' element={<RequireAuth><RequireVa><MyCompletedplan /></RequireVa></RequireAuth>} />
        <Route path='/mycanceledorders' element={<RequireAuth><RequireVa><MyCanceledplan /></RequireVa></RequireAuth>} />
        <Route path='/myneworders' element={<RequireAuth><RequireVa><Mynewplan /></RequireVa></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;

