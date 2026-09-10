import riceField from '../../assets/images/rice-field-3.jpg'
import './HowToUse.css'

function HowToUse() {
  const steps = [
    {
      number: '01',
      title: 'Scan daun padi',
      description:
        'Ambil foto daun padi yang bermasalah secara langsung melalui kamera smartphone kamu untuk mendeteksi gejala penyakit secara cepat.',
    },
    {
      number: '02',
      title: 'Lihat hasil AI',
      description:
        'Dapatkan analisis lengkap hasil diagnosis berdasarkan buatan mengenai jenis penyakit tanaman padi kamu secara akurat dan presisi.',
    },
    {
      number: '03',
      title: 'Terapkan penanganan dan pencegahannya',
      description:
        'Ikuti rekomendasi panduan penanganan yang tepat serta langkah pencegahan terbaik untuk memulihkan dan menjaga kesehatan tanaman padi.',
    },
  ]

  return (
    <section
      className="how-section"
      id="how-to"
    >
      {/* Section heading */}
      <h2>How To Use</h2>

      {/* Usage steps */}
      <div className="how-grid">
        {steps.map((step) => (
          <article
            className="how-item"
            key={step.number}
          >
            <span className="how-number">
              {step.number}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>

      {/* Section image */}
      <div className="how-image-wrapper">
        <img
          src={riceField}
          alt="Pemandangan persawahan"
          className="how-image"
        />
      </div>
    </section>
  )
}

export default HowToUse