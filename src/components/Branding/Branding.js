import "./Branding.css";
import design from "../assets/designer-team-working-on-creative-design.png";
import analytics from "../assets/businessman-analyzing-data.png";
import arrow from "../assets/Arrow 1.png";

const Branding = () => {
  return (
    <div id="about">
      <div className="branding">
        <img src={design} alt="branding and design" />
        <div className="branding-text">
          <h2>Branding & Design system</h2>
          <p>
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and mockups
          </p>
          <p>
            <img className="arrow" src={arrow} alt="arrow" />
          </p>
        </div>
      </div>

      <div className="branding">
        <div className="branding-text">
          <h2>Custom & Plugin Development</h2>
          <p>
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and mockups
          </p>
          <p>
            <img className="arrow" src={arrow} alt="arrow" />
          </p>
        </div>

        <img src={analytics} alt="custom and plugin" />
      </div>

      <div className="ellipse-2"></div>
    </div>
  );
};
export default Branding;
