import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="section">
          <h1>Digital Agency</h1>
          <p>Building Digital Products, Brands & Experience</p>
        </div>
        <div className="section">
          <h1>Resources</h1>
          <a href="http://example.com/">Guides</a>
          <a href="http://example.com/">Blog</a>
          <a href="http://example.com/">Customer Stories</a>
          <a href="http://example.com/">Glossery</a>
        </div>
        <div className="section">
          <h1>Company</h1>
          <a href="http://example.com/">About Us</a>
          <a href="http://example.com/">Careers</a>
          <a href="http://example.com/">Partners</a>
          <a href="http://example.com/">Contact Us</a>
        </div>
        <div className="section">
          <h1>Social Media</h1>
          <a href="https://linkedin.com/">LinkedIn</a>
          <a href="https://facebook.com/">Facebook</a>
          <a href="https://instagram.com/">Instagram</a>
          <a href="https://twitter.com/">Twitter</a>
        </div>
      </div>
        <span className="copyright">  © Copyright. All rights reserved. </span>
    </div>
  );
};
export default Footer;
