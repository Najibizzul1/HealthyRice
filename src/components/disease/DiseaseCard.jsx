import { Link } from 'react-router-dom'
import './DiseaseCard.css'

function DiseaseCard({ disease }) {
  return (
    <article className="disease-card">

      {/* Disease image */}
      {disease.image && (
        <div className="disease-card-image">
          <img
            src={disease.image}
            alt={`Gejala ${disease.name}`}
          />
        </div>
      )}

      {/* Disease information */}
      <div className="disease-card-content">
        <h3>{disease.name}</h3>

        <p>{disease.description}</p>
      </div>

      {/* Link to disease detail */}
      <Link
        to={`/diseases/${disease.id}`}
        className="disease-card-link"
      >
        Lihat Detail →
      </Link>

    </article>
  )
}

export default DiseaseCard