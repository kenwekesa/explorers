import MainAbout from './about/MainAbout';
import './App.css';
import MainContact from './contact/MainContact';
import MainIndustries from './industries/MainIndustries';
import Faq from './pricing/faq';
import Mprice from './pricing/Mprice';
import MainService from './services/MainService';

function App() {
  return (
    <div className='mainapp'>
      {/* <MainIndustries /> */}
      {/* <MainAbout /> */}
      {/* <MainContact /> */}
      {/* <MainService /> */}
      <Mprice/>
      <Faq/>
    </div>
  );
}

export default App;
