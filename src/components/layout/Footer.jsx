import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">

        {/* Footer navigation */}
        <div className="footer-links">
          <Link to="/#feature">Feature</Link>
          <Link to="/#model-ai">Model AI</Link>
          <Link to="/#how-to">How-to</Link>
        </div>

        {/* Copyright information */}
        <div className="footer-info">
          <span>HealthyRice.AI</span>
          <span>2026</span>
        </div>

        <span className="copyright">
          All Rights Reserved
        </span>

      </div>
    </footer>
  )
}

export default Footer