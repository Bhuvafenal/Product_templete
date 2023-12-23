import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Softwarsection from './Component/softwarsection1/Softwarsection';
import Ressec2 from './Component/ReposSec2/Ressec2';
import Comsec6 from './Component/computersection6/Comsec6';
import Clientsec7 from './Component/Clientsec7/Clientsec7';
import FormSection from './Component/FormSection/FormSection';
import Featuresec from './Component/Featuresection/Featuresec';


function App() {
  return (
    <>
      <Header/>
      <Softwarsection/>
      <Ressec2/>
      <Featuresec />
      <Comsec6/>
      <Clientsec7/>
      <FormSection/>
      <Footer/>
    </>
  );
}

export default App;
