
import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Headerbar from './Headerbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
         <Headerbar OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/dashboard' element={ <h1>dashboard</h1>}/>
        <Route path='/product' element={ <h1>product</h1>}/>
        <Route path='/categories' element={ <h1>categories</h1>}/>
        <Route path='/customer' element={ <h1>customer</h1>}/>
        <Route path='/inventory' element={ <h1>inventory</h1>}/>
        <Route path='/reports' element={ <h1>reports</h1>}/>
        <Route path='/Settings' element={ <h1>Settings</h1>}/>


      </Routes>
     
    </div>
  );
}

export default App;
