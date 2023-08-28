// LandingPage.js
import React from 'react';
import './LandingPage.css'; // You'll create this CSS file shortly

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header">
      <div className="logo">
          <img src="/Logo1.png" alt="Your Logo" />
          <h1>Euphoria gamify</h1>
        </div>
        {/* You can use Font Awesome or any icon library */}
        <div className="logo">Your Logo</div>
        <nav className="nav-icons">
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      </div>

      <section id="section1" className="section">
        <div className="section-content">
          <h1>Discover Our Platform</h1>
          <p>
            Welcome to our amazing platform that offers a wide range of features for both users and administrators.
          </p>
          <img
            src="your-image-url.jpg"
            alt="Platform Preview"
            className="section-image"
          />
        </div>
      </section>

      <section id="section2" className="section">
        <div className="section-content">
          <h2>Discover Our Features</h2>
          <div className="feature">
            <img
              src="feature-icon-1.png"
              alt="Feature 1"
              className="feature-icon"
            />
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vitae turpis nec.
            </p>
          </div>
          <div className="feature">
            <img
              src="feature-icon-2.png"
              alt="Feature 2"
              className="feature-icon"
            />
            <h3>Feature 2</h3>
            <p>
              Fusce vitae purus tristique, tincidunt urna in, dignissim justo.
            </p>
          </div>
          <div className="feature">
            <img
              src="feature-icon-3.png"
              alt="Feature 3"
              className="feature-icon"
            />
            <h3>Feature 3</h3>
            <p>
              Etiam non arcu tincidunt, gravida metus eu, ullamcorper urna.
            </p>
          </div>
        </div>
      </section>

      <section id="section3" className="section">
        <div className="section-content">
          <h2>Our Content</h2>
          <p>
            Explore a world of engaging content on our platform. From articles
            to videos, we've got it all.
          </p>
          <div className="content-item">
            <img
              src="content-image-1.jpg"
              alt="Content 1"
              className="content-image"
            />
            <h3>Article 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vitae turpis nec.
            </p>
          </div>
          <div className="content-item">
            <img
              src="content-image-2.jpg"
              alt="Content 2"
              className="content-image"
            />
            <h3>Video 1</h3>
            <p>
              Fusce vitae purus tristique, tincidunt urna in, dignissim justo.
            </p>
          </div>
          <div className="content-item">
            <img
              src="content-image-3.jpg"
              alt="Content 3"
              className="content-image"
            />
            <h3>Article 2</h3>
            <p>
              Etiam non arcu tincidunt, gravida metus eu, ullamcorper urna.
            </p>
          </div>
        </div>
      </section>
      
      {/* Add more sections as needed */}
    </div>
  );
}

export default LandingPage;
