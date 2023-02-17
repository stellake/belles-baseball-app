import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/shared/primaryButton";
import backgroundImage from "../images/baseball.png";
import './main.css';

export function Main() {
  return (
    <div>
      <div style={{ position: 'relative', paddingTop: 20, paddingBottom: 40 }}>
        <div className="intro-section">
          <h1>Belles Baseball</h1>
          <div style={{ marginBottom: 20 }}>Interested in upcoming baseball and softball opportunities?</div>
          <div style={{ maxWidth: 200, width: '100%' }}>
            <Link to="/new-members">
              <PrimaryButton text="Join us"/>
            </Link>
          </div>
        </div>
        <div className="main-background-image">
          <img src={backgroundImage} />
        </div>
      </div>
      <h2>How can you support us?</h2>
      <ul>
        <li>
          <a style={{ textDecoration: 'underline' }} target="_blank" href="https://www.easyfundraising.org.uk/causes/bellesbaseball/">Easy fundraising</a>
        </li>
        <li>
          <a style={{ textDecoration: 'underline' }} target="_blank" href="https://www.baseballoutlet.co.uk/team-shops/belles-baseball.html">Get our merch</a>
        </li>
      </ul>
    </div>
  );
}
