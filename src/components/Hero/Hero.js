import "./Hero.css";
import hero from '../assets/business-people-discussing-business-idea.png';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div className="ellipse-1"></div>
        <h1>Building digital products, brands & experience</h1>
        <p>
          Digital Agency is your online team management tool that easy and prompt
        </p>
        <button>contact us</button>
      </div>

      <img src={hero} alt="hero"/>
    </div>
  );
};
export default Hero;
