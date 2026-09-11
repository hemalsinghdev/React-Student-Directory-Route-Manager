import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PersonalDetails from './components/PersonalDetails';
import Contact from './components/Contact';
import './StudentPage.css';

// Main Application component managing state and page routes
function StudentPage() {
  // Central state to hold personal details shared across pages
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    location: '',
    education: 'Computer Science Student',
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Route Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/personal" 
              element={
                <PersonalDetails 
                  userData={userData} 
                  setUserData={setUserData} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<Contact userData={userData} />} 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default StudentPage;