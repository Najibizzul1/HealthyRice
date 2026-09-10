import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import DiseaseCard from '../components/disease/DiseaseCard'

import { diseases } from '../data/diseases'

import './DiseaseList.css'


function DiseaseList() {
  return (
    <>
      {/* FRONTEND — TETAP */}
      <Navbar />


      <main className="page">

        <section className="disease-list-section">

          <div className="container">

            <h1>
              Daftar Penyakit Padi
            </h1>

            <p>
              Kenali berbagai penyakit yang dapat menyerang
              tanaman padi.
            </p>


            <div className="disease-list">

              {diseases.map((disease) => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                />
              ))}

            </div>

          </div>

        </section>

      </main>


      {/* FRONTEND — TETAP */}
      <Footer />

    </>
  )
}


export default DiseaseList