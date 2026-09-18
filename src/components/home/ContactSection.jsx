import rafiPhoto from '../../assets/images/Teams/Rafi.jpeg'
import revinoPhoto from '../../assets/images/Teams/Revino.jpeg'
import wisnuPhoto from '../../assets/images/Teams/Wisnu.jpeg'
import najibPhoto from '../../assets/images/Teams/Najib.png'

import './ContactSection.css'

function ContactSection() {
  const members = [
    {
      name: 'Rafi Dzaki Azhari',
      role: 'Data Science',
      image: rafiPhoto,
      linkedin: 'https://www.linkedin.com/in/rafi-dzaki-azhari',
      github: 'https://github.com/rdzvoltgt3',
      //instagram: 'https://www.instagram.com/USERNAME',
    },
    {
      name: 'Revino Sava Gavrila',
      role: 'Data Science',
      image: revinoPhoto,
      linkedin: 'https://www.linkedin.com/in/revinosavagavrila',
      github: 'https://github.com/HEYHAYHOY',
      //instagram: 'https://www.instagram.com/USERNAME',
    },
    {
      name: 'IKG Wisnu Satryo Nugroho',
      role: 'Fullstack',
      image: wisnuPhoto,
      linkedin: 'https://www.linkedin.com/in/ikg-wisnu-sn',
      github: 'https://github.com/rishafa61',
      //instagram: 'https://www.instagram.com/USERNAME',
    },
    {
      name: 'Muhammad Najib Izzulhaq',
      role: 'Fullstack',
      image: najibPhoto,
      linkedin: 'https://www.linkedin.com/in/m-najib-izzulhaq',
      github: 'https://github.com/Najibizzul1',
      // instagram: 'https://www.instagram.com/USERNAME',
    },
  ]

  return (
    <section
      className="contact-section"
      id="contact"
    >
      {/* Section heading */}
      <h2>Connect with us</h2>

      {/* Team members */}
      <div className="member-grid">
        {members.map((member) => (
          <article
            className="member-card"
            key={member.name}
          >
            {/* Member photo */}
            <div className="member-image">
              {member.image ? (
                <img
                  src={member.image}
                  alt={`Foto ${member.name}`}
                />
              ) : (
                <span>
                  {member.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Member information */}
            <h3>{member.name}</h3>

            <p>{member.role}</p>

            {/* Social links */}
            <div className="social-links">

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.65 2v-1.8H9.2V21h3.5v-6.2c0-1.64.31-3.22 2.34-3.22 2 0 2.03 1.87 2.03 3.33V21H21v-7.2Z"
                  />
                </svg>
              </a>

              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.05a9.15 9.15 0 0 1 5.01 0c1.92-1.32 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </a>

              {/* <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Instagram`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
                  />
                </svg>
              </a> */}

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContactSection