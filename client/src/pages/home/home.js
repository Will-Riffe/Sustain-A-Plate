import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import leadImage from "../../assets/pexels-julia-m-cameron-6995220.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="lead-section">
        <div className="lead-content">
          <div className="lead-text">
            <h1>
              <em>
                Turn <u>Waste</u> into <u>Wonder</u>!
              </em>
            </h1>
            <p>Join the Movement for Sustainable Food!</p>
            <Link to="/about" className="cta-button">
              Learn More
            </Link>
          </div>
          <div className="lead-image">
            <img src={leadImage} alt="leadImage" />
          </div>
        </div>
      </section>

      <div className="outfield-container">

        {/* Partner with Us section */}
        <section className="card-section">
          <h2>Partner with Us for Sustainable Growth</h2>
          <p>
            Businesses partnering with us reduce food waste, increase revenue,
            and contribute to a more sustainable future. Every portion saved is
            one less wasted portion and one more step toward a better bottom
            line.
          </p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </section>

        {/* Zero-food-waste communities section */}
        <section className="card-section">
          <h2>Transforming Communities through Zero Food Waste</h2>
          <p>
            We are committed to making zero food waste a reality. Our focus is
            on making sustainable eating the most convenient way to eat,
            benefiting both people and the planet.
          </p>
          <Link to="/sustainability" className="cta-button">
            Learn More
          </Link>
        </section>

        {/* What We Do section */}
        <section className="card-section">
          <h2>Connecting Surplus Food to Those in Need</h2>
          <p>
            We connect businesses with surplus food to charities, and
            community groups to ensure less food goes to waste! We strive to benefit those
            who need it most.
          </p>
          <Link to="/login" className="cta-button">
            Connect Here
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
