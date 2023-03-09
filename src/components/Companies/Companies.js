import "./Companies.css";
import spotify from '../assets/spotify.png';
import slack from '../assets/slack.png'
import dropbox from '../assets/dropbox.png'
import zoom from '../assets/zoom.png'

const Companies = () => {
  return (
    <div className="companies">
        <span>Trusted by 4,000+ companies</span>

        <div className="company-container">
            <img src={spotify} alt="spotify-logo"/>
            <img src={slack} alt="slack-logo"/>
            <img src={dropbox} alt="dropbox-logo"/>
            <img src={zoom} alt="zoom-logo"/>
        </div>
    </div>
  )
}
export default Companies;