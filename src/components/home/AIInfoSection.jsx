import riceField from '../../assets/images/rice-field-2.jpg'
import './AIInfoSection.css'

function AIInfoSection() {
  const information = [
    {
      number: '01',
      text: 'Model AI menganalisis karakteristik visual pada daun tanaman padi.',
    },
    {
      number: '02',
      text: 'Sistem membandingkan pola gambar dengan data penyakit yang telah dipelajari.',
    },
    {
      number: '03',
      text: 'Hasil analisis menghasilkan jenis penyakit beserta tingkat confidence.',
    },
    {
      number: '04',
      text: 'Hasil deteksi digunakan untuk memberikan informasi penanganan yang sesuai.',
    },
  ]

  return (
    <section
      className="ai-section"
      id="model-ai"
    >
      <div className="ai-content">

        {/* Section label */}
        <span className="section-label">
          Model AI
        </span>

        {/* Section heading */}
        <div className="ai-heading">
          <h2>Informasi Model AI</h2>
        </div>

        {/* AI information list */}
        <div className="ai-list">
          {information.map((item) => (
            <div
              className="ai-item"
              key={item.number}
            >
              <span className="ai-number">
                {item.number}
              </span>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>

      {/* AI image */}
      <div className="ai-image-wrapper">
        <img
          src={riceField}
          alt="Sawah"
          className="ai-image"
        />
      </div>
    </section>
  )
}

export default AIInfoSection