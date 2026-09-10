import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import FeatureSection from '../components/home/FeatureSection'
import AIInfoSection from '../components/home/AIInfoSection'
import HowToUse from '../components/home/HowToUse'
import ContactSection from '../components/home/ContactSection'

import heroRice from '../assets/images/hero-rice.jpg'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />

      <main>
        {/* Hero section */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">
              Good rice, happy life
            </h1>

            <div className="hero-image-wrapper">
              <img
                src={heroRice}
                alt="Tanaman padi"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Home sections */}
        <FeatureSection />
        <AIInfoSection />
        <HowToUse />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home