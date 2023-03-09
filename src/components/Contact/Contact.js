import "./Contact.css";
import contact from "../assets/customer-support.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <img src={contact} alt="contact" />

        <div className="contact-text">
          <h2>Be a part of the next big thing</h2>
          <p>
            We work with Brans, Startups, to SMEs. Collaborate for more impact
            and growth.
          </p>
          <button>contact us</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
