import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">React Practice Project</span>
          <h1 className="hero-title">Welcome to My React Project</h1>
          <p className="hero-description">
            A beginner-friendly React project created to practice components, routing, props, state, and basic styling.
          </p>

          <div className="hero-buttons">
            <Link to="/personal" className="btn btn-primary">
              View Personal Details
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Visual Feature Card */}
        <div className="hero-visual-card">
          <div className="visual-header">
            <span className="visual-title">React Core Concepts</span>
            <span className="logo-badge">App Overview</span>
          </div>

          <ul className="checklist">
            <li className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Reusable Components</span>
            </li>
            <li className="checklist-item">
              <span className="check-icon">✓</span>
              <span>React Router Navigation</span>
            </li>
            <li className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Props & State Management</span>
            </li>
            <li className="checklist-item">
              <span className="check-icon">✓</span>
              <span>Responsive CSS Styling</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What I Practiced Section */}
      <section className="practice-section">
        <h2 className="section-title">What I Practiced</h2>
        <p className="section-subtitle">Key concepts implemented in this practice project</p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🧩</div>
            <h3 className="card-title">Components</h3>
            <p className="card-desc">Building reusable, independent UI elements like Navbar and page layouts.</p>
          </div>

          <div className="card">
            <div className="card-icon">🧭</div>
            <h3 className="card-title">Routing</h3>
            <p className="card-desc">Seamless client-side navigation between pages using React Router.</p>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Props & State</h3>
            <p className="card-desc">Managing form inputs with useState and sharing user data across components.</p>
          </div>

          <div className="card">
            <div className="card-icon">🎨</div>
            <h3 className="card-title">Responsive CSS</h3>
            <p className="card-desc">Designing clean, responsive layouts that adapt smoothly to all screen sizes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;