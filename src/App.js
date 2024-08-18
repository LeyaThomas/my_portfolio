import {Routes, Route, useLocation} from 'react-router-dom';
import {Home,About,Resume,Skill,Project,Contact,Navbar} from './components';
import './App.scss';

import ParticlesBackground from "./components/config/particlesBackground";


function App() {
  const location = useLocation();
  console.log(location);
  
  const renderParticlesBackgroundJsInHomePage = location.pathname === "/";
  return (
    <>
    {
      renderParticlesBackgroundJsInHomePage &&
      <ParticlesBackground/>
    }
      
      <Navbar/>
      <div className="App_main-page-content">
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
