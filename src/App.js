import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About2/About';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
// import Project from './components/Projects/Project';
function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      {/* </Routlp99o
      > */}
    </Routes>
    </>
    
  );
}

export default App;
