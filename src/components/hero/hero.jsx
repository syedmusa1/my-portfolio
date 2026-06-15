import "./hero.css";
import avatar from "../../assets/images/avatar.jpg";
import picture1 from "../../assets/images/picture1.jpg";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-tag">
          Frontend Portfolio
        </p>

        <h1>Syed Musa</h1>

        <h2>
          Frontend Developer
          <br />
          Aspiring Full-Stack Developer
        </h2>

        <p>
          Passionate about building responsive web applications
          with JavaScript and React while continuously learning
          modern technologies on my journey toward becoming a
          software developer.
        </p>

        <div className="hero-buttons">
          <NavLink
            to="/projects"
            className="primary-btn"
          >
           View Projects
          </NavLink>
          <a
          href="/musa_resume.pdf"
          download
          className="secondary-btn"
        >
          Resume
        </a>
        </div>
      </div>

      <div className="hero-avatar">
        <img src={picture1} alt="Syed Musa" />
      </div>
    </section>
  );
}

export default Hero;