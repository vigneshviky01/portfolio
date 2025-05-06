import "../stylesheets/experienceCard.css"

const ExperienceCard = ({ company, position, dateRange, description, achievements, links }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h2>
          {company} — {position} {dateRange && `(${dateRange})`}
        </h2>
      </div>
      <div className="experience-content">
        <p className="experience-description">{description}</p>
        {achievements && achievements.length > 0 && <p className="experience-achievements">{achievements.join(" ")}</p>}

        {links && links.length > 0 && (
          <div className="experience-links">
            {links.map((link, index) => (
              <a key={index} href={link.url} className="link-button">
                <span className="link-icon">🔗</span> {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
