import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu after selecting a navigation item.
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Toggle the mobile navigation menu.
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          HealthyRice.AI
        </Link>

        {/* Navigation links */}
        <nav
          className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}
        >
          <Link
            to="/"
            className="navbar-link"
            onClick={closeMenu}
          >
            Beranda
          </Link>

          <Link
            to="/upload"
            className="navbar-link"
            onClick={closeMenu}
          >
            Scan
          </Link>

          <Link
            to="/diseases"
            className="navbar-link"
            onClick={closeMenu}
          >
            Penanganan
          </Link>

          <Link
            to="/history"
            className="navbar-link"
            onClick={closeMenu}
          >
            Riwayat
          </Link>
        </nav>

        {/* Desktop scan button */}
        <Link
          to="/upload"
          className="scan-button"
        >
          <span>Mulai Scan</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 7"
            className="scan-icon"
            aria-hidden="true"
          >
            <path
              d="M 5.010367577756833 4.993402463584606
              L 5.010367577756833 1.051837891536508
              L 5.649387370405278 1.0914231885298176
              L 0.7351555136663525 6.01131010055542
              L 0 5.276154584965387
              L 4.914231856738925 0.36192271536740067
              L 4.965127238454288 1.0009425096879674
              L 1.006597549481621 1.0009425096879674
              L 1.006597549481621 0
              L 6 0.011310084855231271
              L 6 4.993402463584606
              L 5.010367577756833 4.993402463584606 Z"
              fill="#ffffff"
            />
          </svg>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar