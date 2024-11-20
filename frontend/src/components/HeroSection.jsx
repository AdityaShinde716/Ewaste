import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/imagemain.jpg" alt="main" />
      <div className="item">
        <h3>Betterment of Life</h3>
        <div>
          <h1>E waste collectors</h1>
          <p>
            We believe that it is all about the BIG change with the small
            contribution!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Call Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;