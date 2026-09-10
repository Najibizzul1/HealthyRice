import { Link, Navigate, useLocation } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { formatConfidence } from '../utils/format'

import './Result.css'

function Result() {
  const location = useLocation()

  const result = location.state?.result

  // Redirect users who open the result page directly
  // without completing a scan.
  if (!result) {
    return <Navigate to="/upload" replace />
  }

  /*
    MOCK RESPONSE — SEKARANG
    Data berasal dari detectionService.js.

    BACKEND + ML NANTI:
    result akan berasal dari response Django REST Framework.
  */

  // Generate the disease detail URL from the detected disease name.
  const diseaseId = result.disease_name
    .toLowerCase()
    .replaceAll(' ', '-')

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="result-section">

          {/* Page heading */}
          <h1>Hasil Deteksi</h1>

          {/* Detection image */}
          {/* MOCK / FRONTEND — SEKARANG
              Backend/ML nanti dapat memberikan image_url sendiri. */}
          {result.image_preview && (
            <img
              src={result.image_preview}
              alt="Hasil deteksi"
              className="result-image"
            />
          )}

          {/* Detection result */}
          <div className="result-card">
            <span className="result-label">
              Penyakit Terdeteksi
            </span>

            <h2>{result.disease_name}</h2>

            <div className="confidence">
              <span>Confidence</span>

              <strong>
                {formatConfidence(result.confidence)}
              </strong>
            </div>

            <p>{result.description}</p>
          </div>

          {/* Result actions */}
          <div className="result-actions">
            <Link
              to={`/diseases/${diseaseId}`}
              className="primary-button"
            >
              Lihat Penanganan
            </Link>

            <Link
              to="/history"
              className="secondary-button"
            >
              Lihat Riwayat
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}

export default Result