import { Link, useParams } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { diseases } from '../data/diseases'

import './DiseaseDetail.css'

function DiseaseDetail() {
  const { id } = useParams()

  // Find the disease based on the ID from the URL.
  const disease = diseases.find(
    (item) => item.id === id
  )

  // Show a fallback page when the disease ID is invalid.
  if (!disease) {
    return (
      <>
        <Navbar />

        <main className="page">
          <section className="disease-detail">
            <h1>Penyakit tidak ditemukan</h1>

            <Link to="/diseases">
              Kembali ke daftar penyakit
            </Link>
          </section>
        </main>

        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="disease-detail">

          {/* Back to disease list */}
          <Link
            to="/diseases"
            className="back-link"
          >
            ← Kembali
          </Link>

          {/* Disease image */}
          <div className="disease-detail-image">
            <img
              src={disease.image}
              alt={`Gejala ${disease.name}`}
            />
          </div>

          {/* Disease information */}
          <h1>{disease.name}</h1>

          <p className="scientific-name">
            {disease.scientific_name}
          </p>

          {/* Disease description */}
          <div className="detail-section">
            <h2>Tentang Penyakit</h2>

            <p>{disease.description}</p>
          </div>

          {/* Disease cause */}
          <div className="detail-section">
            <h2>Penyebab</h2>

            <p>{disease.cause}</p>
          </div>

          {/* Disease symptoms */}
          <div className="detail-section">
            <h2>Gejala</h2>

            <ul>
              {disease.symptoms.map((symptom) => (
                <li key={symptom}>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Disease details */}
          <div className="detail-section">
            <h2>Detail Penyakit</h2>

            <p>{disease.details}</p>
          </div>

          {/* Disease treatment */}
          <div className="detail-section">
            <h2>Cara Penanganan</h2>

            <div className="treatment-list">
              {disease.treatment.map(
                (treatment, index) => (
                  <div
                    className="treatment-card"
                    key={treatment}
                  >
                    <span>{index + 1}</span>

                    <p>{treatment}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Disease prevention */}
          <div className="detail-section">
            <h2>Pencegahan</h2>
            <div className="treatment-list">
              {disease.prevention.map(
                (prevention, index) => (
                  <div
                    className="treatment-card"
                    key={prevention}
                  >
                    <span>{index + 1}</span>

                    <p>{prevention}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Disease sources */}
          <div className="detail-section">
            <h2>Sumber</h2>

            <ul>
              {disease.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}

export default DiseaseDetail