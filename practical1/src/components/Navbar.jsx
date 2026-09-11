import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Simple reusable Navbar component
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile navigation menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand Name */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span>React Practice</span>
          <span className="logo-badge">v1.0</span>
        </NavLink>

        {/* Mobile menu hamburger toggle button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
            end
          >
            Home
          </NavLink>

          <NavLink 
            to="/personal" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            Personal Details
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
