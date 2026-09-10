import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import {
  getHistory,
  clearHistory,
} from '../utils/historyStorage'

import { formatDate } from '../utils/format'

import './History.css'

function History() {
  const [history, setHistory] = useState([])

  // FRONTEND — TETAP
  // Mengambil history dari localStorage
  // sementara backend/database belum tersedia.
  useEffect(() => {
    setHistory(getHistory())
  }, [])

  // FRONTEND — TETAP
  // Menghapus seluruh history dari localStorage.
  function handleClear() {
    const confirmed = window.confirm(
      'Hapus semua riwayat deteksi?'
    )

    if (!confirmed) return

    clearHistory()
    setHistory([])
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="history-section">
          <div className="container">

            {/* Page heading and clear action */}
            <div className="section-header">
              <div>
                <h1>Riwayat Deteksi</h1>

                <p>
                  Hasil deteksi yang pernah dilakukan.
                </p>
              </div>

              {history.length > 0 && (
                <button
                  type="button"
                  className="danger-button"
                  onClick={handleClear}
                >
                  Hapus Semua
                </button>
              )}
            </div>

            {/* Empty state */}
            {history.length === 0 ? (
              <div className="empty-state">
                <h3>Belum ada riwayat</h3>

                <p>
                  Hasil deteksi yang kamu lakukan akan muncul
                  di sini.
                </p>

                <Link
                  to="/upload"
                  className="primary-button"
                >
                  Mulai Deteksi
                </Link>
              </div>
            ) : (
              /* Detection history */
              <div className="history-list">
                {history.map((item) => {
                  // Generate the disease detail URL
                  // from the detected disease name.
                  const diseaseId = item.disease_name
                    .toLowerCase()
                    .replaceAll(' ', '-')

                  return (
                    <article
                      className="history-card"
                      key={item.created_at}
                    >
                      {/* MOCK — SEMENTARA
                          Nanti bisa diganti dengan image URL
                          dari response backend. */}
                      {item.image_preview && (
                        <img
                          src={item.image_preview}
                          alt={`Hasil deteksi ${item.disease_name}`}
                        />
                      )}

                      <div className="history-card-content">
                        <h3>{item.disease_name}</h3>

                        <p>
                          Confidence: {item.confidence}%
                        </p>

                        <small>
                          {formatDate(item.created_at)}
                        </small>
                      </div>

                      <Link
                        to={`/diseases/${diseaseId}`}
                        className="history-card-link"
                      >
                        Detail
                      </Link>
                    </article>
                  )
                })}
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default History