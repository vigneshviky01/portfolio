import React from 'react'
import ExperienceCard from './ExperienceCard'
import experienceData from '../data/experienceData'
const Experience = () => {
  return (
    <section className='experience-container'>
      <div className='logo-container' >
      <p className='logo gradient-text' >V</p>
      <p className="heading-about">MY EXPERIENCE</p>
      </div>
      <ExperienceCard {...experienceData}/>
    </section>
  )
}

export default Experience