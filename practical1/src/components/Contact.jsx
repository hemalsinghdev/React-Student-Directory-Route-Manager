import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact({ userData }) {
  const [messageForm, setMessageForm] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    setMessageForm({ ...messageForm, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setMessageForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a question or want to connect? Feel free to reach out.</p>

      <div className="two-col-layout">
        {/* Left Column: Contact Form */}
        <div className="form-card">
          <h3 className="card-title" style={{ marginBottom: '1.2rem' }}>Send a Message</h3>

          <form onSubmit={handleSendMessage}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-input"
                value={messageForm.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-input"
                value={messageForm.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                className="form-textarea"
                value={messageForm.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Send Message
            </button>
          </form>

          {messageSent && (
            <div className="alert-success">
              <span>✓ Message sent successfully! Thank you for reaching out.</span>
            </div>
          )}
        </div>

        {/* Right Column: Contact Details & Saved Profile */}
        <div>
          {/* Quick Contact Info */}
          <div className="contact-info-card">
            <h3 className="card-title">Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-icon">📧</div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-dark)' }}>Email</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {userData?.email || 'student@example.com'}
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-dark)' }}>Phone</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {userData?.phone || '+1 (555) 019-2834'}
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-dark)' }}>Location</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {userData?.location || 'New York, USA'}
                </span>
              </div>
            </div>
          </div>

          {/* Saved User Details Card */}
          <div className="form-card">
            <h3 className="card-title">Saved Profile Data</h3>
            
            {userData && userData.name ? (
              <div className="profile-info-list" style={{ margin: '1rem 0 0 0' }}>
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">{userData.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age</span>
                  <span className="info-value">{userData.age}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{userData.email}</span>
                </div>
              </div>
            ) : (
              <div className="notice-box">
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  ⚠️ No personal details found yet.
                </p>
                <Link to="/personal" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                  Fill out Personal Details Page →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;