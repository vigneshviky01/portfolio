import React from 'react'
import skillsData from '../data/skillsData'
import SkillElement from './SkillElement';
import "../stylesheets/Skills.css"
const Skills = () => {
  return (
    <section className='skill-container-overall'>
 <div className='logo-container' >
      <p className='logo gradient-text' >V</p>
      <p className="heading-about">MY SKILLS</p>
      </div>
    <div className='skills-container'>
      {
        skillsData.map((item,index)=>{
          return(<SkillElement key={index} {...item}/>);
        })
      }
    </div>
      </section>
  )
}

export default Skills