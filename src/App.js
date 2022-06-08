import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Footer from './components/Footer/Footer';
import Phone from './components/Phone';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/Zori-React' element={ <Home /> } />
        <Route path='/Zori-React/rooms' element={ <Rooms /> } />
        <Route path='/Zori-React/services' element={ <Services /> } />
        <Route path='/Zori-React/contacts' element={ <Contacts /> } />
      </Routes>
      <Phone />
      <Footer />
    </Router>
    </>
  );
}

export default App;
