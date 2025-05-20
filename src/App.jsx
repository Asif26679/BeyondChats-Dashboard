

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import DataTable from './components/DataTable';
import OurTeam from './pages/OurTeam';
import SettingPage from './components/SettingPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <div className='flex'>
          <SideBar />
          <div className='flex-1'>
            <Header
              onSerach={(term) => setSearchTerm(term)}
              onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              isDarkMode={isDarkMode}
            />
            <main className='p-4 md:ml-64 mt-10'>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Cards />
                      <DataTable searchTerm={searchTerm} isDarkMode={isDarkMode} />
                    </>
                  }
                />
                <Route path="/team" element={<OurTeam />} />
                <Route path='/settings' element={<SettingPage/>}></Route>
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

