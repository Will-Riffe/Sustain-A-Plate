import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="card-section">
        <h1>Empowering Communities through Sustainable Food Solutions</h1>
        <p>
          Our mission is to provide innovative solutions that improve access to food while reducing waste.
          We leverage technology to connect businesses with surplus food to those in need, fostering a sustainable food system.
        </p>
        <Link to="/about" className="cta-button">Learn More</Link>
      </section>

      {/* Picture Perfect section */}
      <section className="card-section">
        <h2>Creating a Regenerative Food Ecosystem</h2>
        <p>
          We envision a food system that ensures unhindered access to high-nutrient-dense food for all communities,
          irrespective of socioeconomic factors, promoting a regenerative and equitable approach.
        </p>
      </section>


      {/* Partner with Us section */}
      <section className="card-section">
        <h2>Partner with Us for Sustainable Growth</h2>
        <p>
          Businesses partnering with us reduce food waste, increase revenue, and contribute to a more sustainable future.
          Every portion saved is one less wasted portion and one more step toward a better bottom line.
        </p>
        <Link to="/sustainability" className="cta-button">Get Started</Link>
      </section>

      {/* Zero-food-waste communities section */}
      <section className="card-section">
        <h2>Transforming Communities through Zero Food Waste</h2>
        <p>We are committed to making zero food waste a reality. Our focus is on making sustainable eating the most convenient way to eat, benefiting both people and the planet.</p>
        <Link to="/sustainability" className="cta-button">Learn More</Link>
      </section>


      {/* What We Do section */}
      <section className="card-section">
        <h2>Connecting Surplus Food to Those in Need</h2>
        <p>We connect businesses that have surplus food with charities and community groups to ensure no food goes to waste, benefiting those who need it most.</p>
      </section>
    </div>
  );
};

export default HomePage;
