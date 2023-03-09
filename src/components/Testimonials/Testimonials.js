import "./Testimonials.css";
import avatar_1 from "../assets/avatar-1.png";
import avatar_2 from "../assets/avatar-2.png";
import avatar_3 from "../assets/avatar-3.png";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <p>TESTIMONIALS</p>
      <h2 className="title">Read What Other Have To Say</h2>

      <div className="container">
        <div className="card">
          <img src={avatar_1} alt="avatar" />
          <h1>Andrew Rathore</h1>
          <p className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
        <div className="card">
          <img src={avatar_2} alt="avatar" />
          <h1>Vera Duncan</h1>
          <p className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
        <div className="card">
          <img src={avatar_3} alt="avatar" />
          <h1>Mark Smith</h1>
          <p className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
