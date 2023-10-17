import { Route, Routes } from 'react-router-dom';
import MainAbout from './about/MainAbout';
import './App.css';
import MainContact from './contact/MainContact';
import MainIndustries from './industries/MainIndustries';
import Mlanding from './landing/Mlanding';
import Mprice from './pricing/Mprice';
import MainService from './services/MainService';
import Orderhistory from './pages/orderhistory/Orderhistory';
import Subscriptions from './pages/subscriptions/Subscriptions';
import Support from './pages/support/Support';
import Payment from './FComponents/payments/Payment';


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
        <Route path="/orderhistory" element={ <Orderhistory/> } />
        <Route path="/support" element={ <Support/> } />
        <Route path="/subscriptions" element={ <Subscriptions/> } />
        <Route path="/payment" element={<Payment />}/>

      </Routes>
    </div>
  );
}

export default App;
