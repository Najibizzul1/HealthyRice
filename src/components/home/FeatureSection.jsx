import './FeatureSection.css'
import heroRice from '../../assets/images/rice-field-1.jpg'

function FeatureSection() {
  const features = [
    {
      icon: '⌁',
      title: 'Deteksi Penyakit Berbasis AI',
      description:
        'Deteksi dini penyakit tanaman padi secara akurat memanfaatkan kecerdasan buatan hanya melalui pemindaian foto secara langsung.',
    },
    {
      icon: '◉',
      title: 'Penanganan dan Pencegahan',
      description:
        'Dapatkan rekomendasi penanganan yang tepat serta langkah pencegahan terbaik untuk menjaga tanaman padi tetap sehat maksimal.',
    },
    {
      icon: '◌',
      title: 'Riwayat Kesehatan Padi',
      description:
        'Pantau dan akses kembali seluruh data riwayat pemeriksaan penyakit tanaman padi kapan saja dengan mudah.',
    },
  ]

  return (
    <section
      className="feature-section"
      id="feature"
    >
      <div className="container">

        {/* Section heading */}
        <span className="section-label">
          Feature
        </span>

        <div className="feature-heading">
          <h2>
            Membantu petani membangun
            <br />
            negeri
          </h2>

          <p>
            HealthyRice.AI provides real insights,
            without the data overload.
          </p>
        </div>

        {/* Feature list */}
        <div className="feature-grid">
          {features.map((feature) => (
            <article
              className="feature-item"
              key={feature.title}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Feature image */}
        <div className="feature-image-wrapper">
          <img
            className="feature-image"
            src={heroRice}
            alt="Hamparan sawah"
          />
        </div>

      </div>
    </section>
  )
}

export default FeatureSection