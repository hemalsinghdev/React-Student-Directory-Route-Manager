import { useState } from 'react';
import { Link } from 'react-router-dom';

function PersonalDetails({ userData, setUserData }) {
  // Temporary form state initialized with current userData
  const [tempData, setTempData] = useState({
    name: userData.name || '',
    age: userData.age || '',
    email: userData.email || '',
    phone: userData.phone || '',
    location: userData.location || '',
    education: userData.education || 'Computer Science Student',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(tempData);
    setSubmitted(true);
  };

  // Sample skills list for practice portfolio
  const defaultSkills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Git'];

  return (
    <div className="page-container">
      <h2 className="section-title">Personal Details</h2>
      <p className="section-subtitle">Manage your personal information and profile card</p>

      <div className="two-col-layout">
        {/* Left Column: Input Form */}
        <div className="form-card">
          <h3 className="card-title" style={{ marginBottom: '1.2rem' }}>Edit Profile Information</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                value={tempData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Johnson"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                name="age"
                className="form-input"
                value={tempData.age}
                onChange={handleChange}
                placeholder="e.g. 21"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                value={tempData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="form-input"
                value={tempData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 (555) 019-2834"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                className="form-input"
                value={tempData.location}
                onChange={handleChange}
                placeholder="e.g. New York, USA"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Save Details
            </button>
          </form>

          {submitted && (
            <div className="alert-success">
              <span>✓ Details saved successfully! View them on the Contact page.</span>
            </div>
          )}
        </div>

        {/* Right Column: Live Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar">
            {userData.name ? userData.name.charAt(0).toUpperCase() : '👤'}
          </div>

          <h3 className="card-title">{userData.name || 'Your Name'}</h3>
          <p className="card-desc" style={{ marginBottom: '1rem' }}>
            {userData.education || 'Student / Developer'}
          </p>

          <div className="profile-info-list">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">{userData.name || 'Not provided'}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Age</span>
              <span className="info-value">{userData.age ? `${userData.age} yrs` : 'Not provided'}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{userData.email || 'Not provided'}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{userData.phone || 'Not provided'}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{userData.location || 'Not provided'}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Skills</h4>
            <div className="skills-tags">
              {defaultSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <Link to="/" className="btn btn-secondary" style={{ flex: 1 }}>
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;